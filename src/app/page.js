import { getEntries } from '@/lib/contentful'

export default async function HomePage() {
  const posts = await getEntries('page') // replace with your content type ID

  return (
    <main>
      <h1>Homepage Test</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>{post.fields.title}
          <p>{post.fields.bodyContent}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}