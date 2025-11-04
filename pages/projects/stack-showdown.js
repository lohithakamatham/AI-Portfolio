import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Stack_Showdown() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>Stack Showdown</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Compared frameworks MERN, Next.js, Remix, and Astro for AI app performance, integration, and scalability.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Concluded that Next.js offers the best balance for AI dashboards due to SSR and flexibility.</p>
        </section>
      </main>
    </>
  )
}