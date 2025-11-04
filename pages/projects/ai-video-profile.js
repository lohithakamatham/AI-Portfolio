import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Ai_Video_Profile() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>AI Video Profile</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Created a professional AI-generated introduction video using tools like HeyGen and Pika Labs. Highlighted skills, AI projects, and goals.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Produced an interview-ready video showcasing communication and personal branding using AI tools.</p>
        </section>
      </main>
    </>
  )
}