//import { BlogPosts } from 'app/components/posts'
import { Computer } from 'app/components/model'

export default function Page() {
  return (
    <section>
      <h1 className="mb-20 text-2xl font-semibold tracking-tighter">
        F0F8FF.log
      </h1>
      <p className="lg:text-7xl text-6xl shrink-0 text-gray-900">
          <span className="font-light">{"I'm"}</span>
          <br />
          <span className="font-medium">Backend Developer</span>
          <br />
          <span className="font-light">currently working in Seoul.</span>
          <br />
          <span className="font-light text-5xl">Becoming a full stack developer.</span>
        </p>

        <Computer />

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
