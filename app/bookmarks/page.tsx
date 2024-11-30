import { genPageMetadata } from 'app/seo'
import bookmarksData from '@/data/bookmarksData'

export const metadata = genPageMetadata({ title: 'Bookmarks' })

export default function Bookmarks() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bookmarks
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of use full links from open internet
          </p>
        </div>
        <div className="container py-12">
          {bookmarksData.map((d, idx) => (
            <>
              <p
                key={idx}
                className="text-lg font-extrabold leading-7 text-gray-800 dark:text-gray-400"
              >
                {d?.category_title}
              </p>

              {d.bookmarks.map((bookmark, idx) => (
                <a
                  className="m-4 flex flex-wrap items-center justify-start"
                  key={idx}
                  target="_blank"
                  href={bookmark.href}
                >
                  <h3 className="text-sm text-slate-800">{idx + 1}</h3>
                  <h3 className="ms-2 text-sm text-slate-800">{bookmark.title}</h3>
                  <span className="ms-5 h-3 w-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                    </svg>
                  </span>
                </a>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  )
}
