'use client'

import { useState, useEffect } from 'react'

export default function Gallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="not-prose my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, i) => (
          <figure key={image.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full overflow-hidden rounded-lg border border-gray-200 transition hover:border-gray-400 cursor-zoom-in"
            >
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
            </button>
            <figcaption className="mt-2 text-sm text-gray-500">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
        >
          <img
            src={images[openIndex].src}
            alt={images[openIndex].alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}