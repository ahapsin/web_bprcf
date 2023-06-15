import Image from "next/image";

const BLOG_URL = "http://bprcahayafajar.co.id:3001";
const CONTENT_API_KEY = "065c160e2b7a6847d9c794a304";

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page() {
  const data = await getPosts();
  const titles = data.posts.map((post: any) => post.title);
  console.log(data);
  return (
    <div className="flex p-5 gap-5">
      {data.posts.map((post: any) => (
        <article
          className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          key={post.id}
        >
          <Image
            alt="Office"
            src={"https://joadre.com/wp-content/uploads/2019/02/no-image.jpg"}
            className="h-56 w-full object-cover"
            width={350}
            height={350}
          />
          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {post.created_at}
            </time>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
            </a>
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              Snippet
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              JavaScript
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
