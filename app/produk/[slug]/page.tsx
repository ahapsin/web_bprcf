type paramProps = {
  slug: string;
};

const BLOG_URL = "http://192.168.1.44:3001";
const CONTENT_API_KEY = "065c160e2b7a6847d9c794a304";

async function getPages(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/pages/slug/${slug}/?key=${CONTENT_API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
  }
  return res.json();
}

export default async function Page({ params }: { params: paramProps }) {
  const data = await getPages(params.slug);
  return data.pages.map((page: any) => (
    <div className="flex p-5 gap-5" key={page.id}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
      </div>
    </div>
  ));
}
