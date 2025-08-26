'use client'
import Link from 'next/link'

export default function Footer({ center = false }: { center?: boolean }) {
  return (
    <div className={
      `mt-10 text-xs text-gray-500 flex items-center flex-wrap gap-1 ${center ? 'justify-center w-full text-center' : ''}`
    }>
      <Link href="/about" className="hover:text-gray-300 cursor-pointer">About</Link>
      <span className="mx-2">•</span>
      <a
        href="https://www.instagram.com/zerodopamine_motivation/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300"
      >
        Instagram
      </a>
      <span className="mx-2">•</span>
      <a
        href="https://www.youtube.com/@Zerodopaminemotivation"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300"
      >
        YouTube
      </a>
    </div>
  )
}
