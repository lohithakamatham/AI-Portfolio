import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Vibe_Coding_Sprint() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>Vibe Coding Sprint (SmartTask)</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Built SmartTask app using React, Tailwind, and Google Generative AI for intelligent to-do list creation.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Successfully deployed app on Vercel, integrating AI task generation with responsive UI/UX.</p>
        </section>
      </main>
    </>
  )
}