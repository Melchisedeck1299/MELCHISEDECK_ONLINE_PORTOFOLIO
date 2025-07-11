import { OpenAI } from "openai"
import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
)

const data = [
  {
    content: "Je suis diplômé de l’UQTR en informatique, spécialisé en science des données. J’ai terminé mes études en juin 2025 avec plusieurs projets appliqués.",
    metadata: { type: "education", tags: ["UQTR", "science des données"] },
  },
  {
    content: "Je suis aussi diplômé en Business Management de Strathmore University (Nairobi, Kenya), obtenu en septembre 2021.",
    metadata: { type: "education", tags: ["Strathmore", "business"] },
  },
  {
    content: "J’ai effectué un stage en support informatique chez Axxess International à Montréal (mai-août 2024), où j’ai géré les tickets, la maintenance et l’amélioration de l’efficacité.",
    metadata: { type: "experience", tags: ["support", "IT", "stage"] },
  },
  {
    content: "En tant que commis à la douane (2021–2024, puis depuis août 2024), j’ai traité des documents d’import/export, assuré la conformité douanière et servi les clients.",
    metadata: { type: "experience", tags: ["douane", "compliance", "service client"] },
  },
  {
    content: "J’ai développé une simulation réseau en Java, modélisant les couches application, transport et liaison, avec segmentation et gestion de connexion.",
    metadata: { type: "project", tags: ["Java", "réseau", "simulation"] },
  },
  {
    content: "Je suis développeur web avec React, TypeScript, Tailwind CSS, et j’ai déployé plusieurs projets sur Vercel.",
    metadata: { type: "skills", tags: ["React", "TypeScript", "Tailwind", "Vercel"] },
  },
  {
    content: "J’ai automatisé l’analyse du marché de l’emploi en France avec l’API France Travail, MongoDB, et des dashboards interactifs.",
    metadata: { type: "project", tags: ["data", "emploi", "France", "MongoDB"] },
  },
  {
    content: "Mes compétences incluent Python, Java, SQL, MongoDB, TensorFlow, Pandas, NumPy, Streamlit, Git, Next.js.",
    metadata: { type: "skills", tags: ["Python", "SQL", "TensorFlow", "Git", "Next.js"] },
  },
  {
    content: "Mon objectif est de travailler en cybersécurité, data science, ou développement backend — en stage, emploi ou mandat freelance.",
    metadata: { type: "goals", tags: ["cybersécurité", "data", "freelance"] },
  },
  {
    content: "Certains projets que j’ai réalisés ne peuvent pas être partagés en ligne à cause de la confidentialité des données traitées.",
    metadata: { type: "note", tags: ["confidentialité", "projets"] },
  },
  {
    content: "Je suis organisé, autonome et toujours curieux. J’utilise Notion et j'aime documenter clairement mes projets.",
    metadata: { type: "skills", tags: ["organisation", "Notion", "documentation"] },
  },
  {
    content: "Je parle couramment français et anglais, ce qui me permet d’échanger efficacement dans des contextes bilingues.",
    metadata: { type: "skills", tags: ["langues", "bilingue"] },
  },
  {
    content: "Je pense que l’IA doit être utilisée de façon responsable. Je m’intéresse à l’éthique de la technologie et à son impact humain.",
    metadata: { type: "philosophy", tags: ["éthique", "technologie"] },
  },
  {
    content: "Je vis actuellement à Trois-Rivières, au Québec, au Canada. Je suis toutefois prêt à déménager pour des opportunités intéressantes.",
    metadata: { type: "personal", tags: ["mobilité", "Trois-Rivières", "Québec", "Canada"] },
  },
  {
    content: "J’ai 25 ans et je suis quelqu’un de dynamique, curieux et rigoureux dans mon travail.",
    metadata: { type: "personal", tags: ["âge", "profil", "personnalité"] },
  },
  {
    content: "Je suis sociable, à l’écoute, et j’ai toujours su m’intégrer facilement dans les équipes de travail grâce à mes bonnes relations interpersonnelles.",
    metadata: { type: "soft-skill", tags: ["relations", "communication", "travail d'équipe"] },
  },
  {
    content: "Mes loisirs incluent la boxe, la musculation, la randonnée, les sorties entre amis et la lecture, qui m’aident à garder un bon équilibre de vie.",
    metadata: { type: "hobby", tags: ["boxe", "lecture", "musculation", "hiking", "sorties"] },
  },
  {
    content: "Je suis reconnu pour ma capacité à résoudre des problèmes rapidement, à m’adapter à des situations nouvelles, et à faire preuve de créativité.",
    metadata: { type: "soft-skill", tags: ["adaptabilité", "créativité", "résolution de problèmes"] },
  },
  {
    content: "Références professionnelles : Edith Vazalinskas, Ressources Humaines chez Go Depo (514-278-9955) et Daniel Rony, Technicien Informatique chez Axxess International Inc. (514-849-9377).",
    metadata: { type: "references", tags: ["références", "Go Depo", "Axxess"] },
  },
]

async function insertData() {
  for (const item of data) {
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: item.content,
    })

    const { error } = await supabase.from("documents").insert({
      content: item.content,
      embedding: embedding.data[0].embedding,
      metadata: item.metadata,
    })

    if (error) {
      console.error("❌ Erreur d'insertion :", error)
    } else {
      console.log("✅ Donnée ajoutée :", item.metadata.type)
    }
  }
}

insertData()

