import Nav from '../components/Nav'
import Link from 'next/link'
export default function Projects(){
    const projects = [
  { slug: 'data-science-course', title: 'Data Science Course (Dr. Reza, Harvard/MIT Labs)', description: 'Completed GenAI Analytics training with Python & Hugging Face.' },
  { slug: 'ai-video-profile', title: 'AI Video Profile', description: 'Created professional AI-based video introducing skills and goals.' },
  { slug: 'vibe-coding-course', title: 'Vibe Coding Course', description: 'Completed Vibe Coding course focused on AI-powered app development.' },
  { slug: 'automation-arena', title: 'Automation Arena (ORNANTS Workflow)', description: 'Automated LinkedIn & Gmail workflows using n8n and Make.com.' },
  { slug: 'ai-agent-challenge', title: 'AI Agent Challenge', description: 'Built AI summarization agent using Streamlit and Hugging Face BART.' },
  { slug: 'ai-influencer-tracker', title: 'AI Influencer Tracker', description: 'Automated AI influencer research using Google Gemini and Sheets.' },
  { slug: 'stack-showdown', title: 'Stack Showdown', description: 'Compared MERN, Next.js, Remix, and Astro for AI app readiness.' },
  { slug: 'ai-content-forge', title: 'AI Content Forge', description: 'Created SEO-optimized technical blogs using AI tools.' },
  { slug: 'vibe-coding-sprint', title: 'Vibe Coding Sprint (SmartTask)', description: 'Developed SmartTask app using Google Generative AI.' },
  { slug: 'viral-replicator', title: 'Viral Replicator', description: 'Built AI agent that replicates viral post formats using OpenAI API.' },
  { slug: 'polish-and-present', title: 'Polish & Present', description: 'Refined and presented final AI Engineer Internship Portfolio.' }
    ];return(<><Nav/>
    <main className='max-w-6xl mx-auto py-12'><h1 className='text-3xl font-bold mb-6'>Projects</h1><div className='grid md:grid-cols-2 gap-6'>{projects.map(p=>(<Link key={p.slug} href={`/projects/${p.slug}`} className='block p-6 border rounded-lg bg-white hover:shadow'><h3 className='text-black font-semibold mb-2'>{p.title}</h3><p className='text-black'>Click to view details</p></Link>))}</div></main></>) }