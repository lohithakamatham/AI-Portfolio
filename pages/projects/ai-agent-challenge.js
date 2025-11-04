import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Ai_Agent_Challenge() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>AI Agent Challenge</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Built an AI agent that summarizes and repurposes content using Python, Streamlit, and Hugging Face BART model.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Automated content creation and improved NLP model understanding with text summarization techniques.</p>
        </section>
      </main>
    </>
  )
}