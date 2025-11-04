import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Ai_Content_Forge() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black-500 hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>AI Content Forge</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Used ChatGPT, Jasper, and SurferSEO to generate optimized technical blogs for ORANTS AI website.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Achieved SEO scores above 90/100 and improved AI-powered content creation efficiency.</p>
        </section>
      </main>
    </>
  )
}