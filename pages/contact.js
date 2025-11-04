import Nav from '../components/Nav'
import { Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Nav/>
      <main className='max-w-4xl mx-auto py-12 text-center'>
        <h1 className='text-3xl font-bold mb-6'>Contact</h1>
        <p className='text-lg mb-8 text-gray-700'>
          Feel free to reach out for collaboration or projects!
        </p>

        <div className='flex justify-center gap-8'>
          <a
            href='https://github.com/lohithakamatham'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-purple-500 transition-colors'
          >
            <Github className='w-6 h-6' />
            <span>GitHub</span>
          </a>

          <a
            href='https://www.linkedin.com/in/lohitha-k-279909278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-blue-600 transition-colors'
          >
            <Linkedin className='w-6 h-6' />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className='mt-10 text-gray-600'>
          📧 <a href='mailto:lohithakamatham06@gmail.com' className='underline'>lohithakamatham06@gmail.com</a>
        </p>
      </main>
    </>
  )
}
