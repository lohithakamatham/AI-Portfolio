import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Vibe_Coding_Course() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>Vibe Coding Course</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Completed Vibe Coding with Google AI course focused on building intelligent applications using Generative AI APIs.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Learned how to integrate AI APIs into web apps and developed understanding of AI-assisted front-end workflows.</p>
        </section>
      </main>
    </>
  )
}