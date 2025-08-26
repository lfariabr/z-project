'use client'

export default function Footer() {
  return (
    <div className="mt-10 text-xs text-gray-500 flex items-center flex-wrap gap-1">
      <span className="hover:text-gray-300 cursor-pointer">Terms</span>
      <span className="mx-2">•</span>
      <span className="hover:text-gray-300 cursor-pointer">Contact</span>
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
