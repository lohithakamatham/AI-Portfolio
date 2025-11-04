import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Ai_Influencer_Tracker() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black-500 hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>AI Influencer Tracker</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Developed an n8n-based workflow using Google Gemini Chat and Sheets to auto-collect 50+ AI influencer insights.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Generated structured influencer datasets and improved workflow automation expertise.</p>
        </section>
      </main>
    </>
  )
}