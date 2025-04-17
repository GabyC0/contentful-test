import { getEntries } from '@/lib/contentful'

export default async function Page({ params }) {
  const pages = await getEntries('page') // Fetch all pages
  const page = pages.find((p) => p.fields.slug === params.slug)

  if (!page) {
    return <h1>Page Not Found</h1> // Fallback for missing pages
  }

  return (
    <main>
      <h1>{page.fields.title}</h1>
      <div>{page.fields.body}</div> {/* Assuming you have a body field */}
    </main>
  )
}

// Optionally, generate dynamic routes
export async function generateStaticParams() {
  const pages = await getEntries('page')
  return pages.map((page) => ({
    slug: page.fields.slug, // Assuming slug is unique
  }))
}
