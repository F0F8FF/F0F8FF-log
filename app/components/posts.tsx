import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col space-y-1 mb-8"
            href={`/blog/${post.slug}`}
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-500 tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2">
              {post.metadata.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  )
}
