//import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-20 text-2xl font-semibold tracking-tighter">
        F0F8FF.log
      </h1>
      <p className="lg:text-7xl text-6xl shrink-0 text-gray-900">
          <span className="font-light">{"I'm"}</span>
          <br />
          <span className="font-medium">Full-stack Developer</span>
          <br />
          <span className="font-light">currently work at Seoul.</span>
        </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
