import { type NextRequest, NextResponse } from "next/server"
import { OpenAI } from "openai"
import { createClient } from "@supabase/supabase-js"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!)

export async function POST(req: NextRequest) {
  try {
    console.log("✅ Requête reçue dans /api/chat-rag")

    const body = await req.json()
    const message = body.message?.trim()

    if (!message) {
      console.warn("⚠️ Message manquant")
      return NextResponse.json({ error: "Message manquant." }, { status: 400 })
    }

    console.log("📨 Message reçu :", message)

    // Vérifier si les variables d'environnement sont définies
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ OPENAI_API_KEY manquante")
      return NextResponse.json({
        reply: "Je suis temporairement indisponible. Veuillez réessayer plus tard.",
      })
    }

    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE) {
      console.error("❌ Variables Supabase manquantes")
      // Fallback vers l'API chat normale
      return NextResponse.json({
        reply:
          "Je suis Melchisedeck Mvita. Comment puis-je vous aider avec des questions sur mon parcours professionnel ?",
      })
    }

    // 1. Embedding
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    })

    const userEmbedding = embeddingResponse.data[0].embedding
    console.log("🔢 Embedding généré")

    // 2. Requête Supabase
    const { data: matches, error } = await supabase.rpc("match_documents", {
      query_embedding: userEmbedding,
      match_threshold: 0.72,
      match_count: 10,
    })

    if (error) {
      console.error("❌ Erreur Supabase RPC :", error)
      // Fallback vers une réponse générique
      return NextResponse.json({
        reply: "Je n'ai pas pu accéder à toutes mes informations. Pouvez-vous reformuler votre question ?",
      })
    }

    if (!matches || matches.length === 0) {
      console.log("🕵️ Aucun match trouvé")
      return NextResponse.json({
        reply: "Je n'ai pas assez d'informations pour répondre précisément à cette question sur mon parcours.",
      })
    }

    const context = matches.map((m: any) => m.content).join("\n---\n")
    console.log("📄 CONTEXTE TROUVÉ :", context)

    // 3. Demande à OpenAI avec contexte
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `
          Tu es Melchisedeck Mvita. Tu réponds toujours à la première personne en t'appuyant uniquement sur les informations suivantes (provenant de mon portfolio en ligne) :

          ${context}
          Ta réponse doit refléter mon **parcours professionnel**, mes **expériences concrètes**, et **éviter les généralités**. Si certaines infos manquent, reformule avec ce que tu sais.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    })

    const reply = completion.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      console.warn("⚠️ Pas de réponse générée par OpenAI")
      return NextResponse.json({
        reply: "Je n'ai pas pu générer une réponse appropriée. Pouvez-vous reformuler votre question ?",
      })
    }

    console.log("🤖 Réponse générée :", reply)
    return NextResponse.json({ reply })
  } catch (err) {
    console.error("💥 Erreur serveur :", err)
    return NextResponse.json(
      {
        reply: "Une erreur technique est survenue. Veuillez réessayer dans quelques instants.",
      },
      { status: 200 },
    ) // Retourner 200 avec un message d'erreur plutôt que 500
  }
}
