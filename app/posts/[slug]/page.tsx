import { getAllPostIds, getPostData } from "@/utils/posts"

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postData = await getPostData(slug);

  return (
    <>
      <div>My Post: {slug}</div>
      <article>
        <h1>
          {slug}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths
}