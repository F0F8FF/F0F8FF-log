import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Project',
  description: '지금까지 만든 프로젝트들을 정리한 기록입니다.',
}

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  )
}
