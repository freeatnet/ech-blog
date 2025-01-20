import Link from "next/link";
import fs from "fs";
import path from "path";

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'blogs');
  const files = await fs.promises.readdir(postsDirectory);
  
  // Filter only .tsx or .mdx files (assuming blog posts are one of these)
  const posts = files.filter(file => 
    file.endsWith('.md')
  ).map(file => ({
    slug: file.replace(/\.md$/, ''),
    // Remove [slug] brackets if present
    title: file.replace(/\.md$/, '').replace(/^\[|\]$/g, '')
  }));

  return posts;
}

export default async function Home() {
  const posts = await getBlogPosts();
  
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">EthCatHerders Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Herding Knowledge, Building Community, Homesteading Ethereum!
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <Link 
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">All Posts</h2>
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
