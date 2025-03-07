import { marked } from 'marked';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import { getPostBySlug, PostNotFoundError } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    if (error instanceof PostNotFoundError) {
      // notFound() throws an error internally, so execution stops here
      notFound();
    }
    throw error;
  }
  
  const { frontmatter, content } = post;
  const htmlContent = marked(content);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-col w-full max-w-4xl mx-auto mt-12'>
        <Link href='/' className='text-blue-600 hover:text-blue-700'>
          <div className='flex items-center gap-2'>
            <ArrowLeftIcon className='w-4 h-4' />
            <span>Back to all blogs</span>
          </div>
        </Link>
        {frontmatter.image && (
          <div className="relative w-full h-96 mt-6 overflow-hidden rounded-lg">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              className="object-cover w-full h-full"
              fill
            />
          </div>
        )}
        <div className='w-full mt-6'>
          <h1 className='text-5xl font-bold mb-2'>
            {frontmatter.title}
          </h1>
          <p className='text-sm text-gray-500 mb-6'>
            Written by {frontmatter.author} on {frontmatter.date.toLocaleDateString()}
          </p>
          <article className='prose prose-slate max-w-none'>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </article>
        </div>
      </div>
    </div>
  );
}
