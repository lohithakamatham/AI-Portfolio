import Link from 'next/link'
export default function Nav() {
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-lg text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-lg font-bold text-white">AI Projects Portfolio</h1>
        <div className="flex gap-4 text-sm font-bold">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/tech">Tech Stack</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
