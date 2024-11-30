interface Bookmarks {
  title: string
  tags: string[]
  href?: string
}
interface Categories {
  category_title: string
  bookmarks: Bookmarks[]
}

const bookmarksData: Categories[] = [
  {
    category_title: 'Frontend',
    bookmarks: [
      {
        title: 'XloxUI',
        tags: ['/static/images/google.png'],
        href: 'https://www.xlox.in',
      },
      {
        title: 'The Time Machine',
        tags: ['/static/images/google.png'],
        href: '/blog/the-time-machine',
      },
    ],
  },
  {
    category_title: 'Backend',
    bookmarks: [
      {
        title: 'XloxUI',
        tags: ['/static/images/google.png'],
        href: 'https://www.xlox.in',
      },
      {
        title: 'The Time Machine',
        tags: ['/static/images/google.png'],
        href: '/blog/the-time-machine',
      },
    ],
  },
]

export default bookmarksData
