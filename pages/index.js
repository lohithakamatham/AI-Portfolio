import Nav from '../components/Nav'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Nav/>
      <div className='text-center py-24'>
        <h1 className='text-4xl font-bold mb-4'>AI Engineer Internship Portfolio</h1>
        <p className='text-vibe-indigo mb-6'>Lohitha Kamatham — AI Internship @ ORANTS AI (2025)</p>
        <div className='flex justify-center gap-4'>
          <Link href='/projects' className='bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition-transform'>View Projects</Link>
          <a href='/Lohitha_Kamatham_AI_Portfolio_Presentation_MediumTech.pptx' download className='bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition-transform'>Download Slides</a>
        </div>
      </div>
    </>
  )
}
