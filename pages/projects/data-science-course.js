import Nav from '../../components/Nav'
import Link from 'next/link'

export default function Data_Science_Course() {
  return (
    <>
      <Nav />
      <main className='max-w-4xl mx-auto py-12 px-4'>
        <Link href='/projects' className='text-black hover:underline'>← Back to Projects</Link>
        <h1 className='text-3xl font-bold mt-4 mb-6'>Data Science Course (Dr. Reza, Harvard/MIT Labs)</h1>
        <section className='bg-white p-6 rounded-lg shadow mb-6'>
          <h2 className='text-black font-semibold mb-2'>Overview</h2>
          <p className='text-gray-700 leading-relaxed'>Completed Harvard/MIT GenAI Analytics training covering Python, Pandas, NumPy, and Hugging Face integration for data analysis and automation.</p>
        </section>
        <section className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-black font-semibold mb-2'>Results & Learnings</h2>
          <p className='text-gray-700 leading-relaxed'>Gained hands-on experience in GenAI analytics and model deployment. Strengthened Python skills for real-world AI data tasks.</p>
        </section>
      </main>
    </>
  )
}