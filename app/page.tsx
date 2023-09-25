import Image from 'next/image'
import Link from 'next/link';
import { getSortedPostsData } from '@/utils/posts'

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({slug, date, title}) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{title}</Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </>
  )
}
