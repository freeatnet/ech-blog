import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const markdown = fs.readFileSync(path.join('blogs', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdown)
  console.log(frontmatter)

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-col w-full max-w-2xl mx-auto mt-12'>
        <Link href='/' className='text-blue-600 hover:text-blue-700'>
          <div className='flex items-center gap-2'>
            <ArrowLeftIcon className='w-4 h-4' />
            <span>Back to all blogs</span>
          </div>
        </Link>
        <div className='w-full mt-6'>
          <p className='text-sm text-gray-500 mb-2'>
            {frontmatter.date.toLocaleDateString()}
          </p>
          <h1 className='text-2xl font-bold mb-8'>
            {frontmatter.title}
          </h1>
          <div className='doc-body' dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </div>
  );
}
