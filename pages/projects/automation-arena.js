import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Automation_Arena() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>Automation Arena (ORNANTS Workflow)</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Automated LinkedIn and Gmail workflows using n8n and Make.com with Google Sheets integration for seamless content posting.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Eliminated manual posting errors, improved response speed, and learned cross-platform automation.</p>
        </section>
      </main>
    </>
  )
}