import siteMetadata from '@/data/siteMetadata'
import { useRandomColorPair } from 'lib/hooks/useRandomColorPair'
import { contact } from 'config/contact'

import { RoughNotation } from 'react-rough-notation'
import Link from 'next/link'

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair()

  return (
    <>
      <div className="fade-in divide-y-2 divide-gray-100 dark:divide-gray-800">
        <div className="container py-12">
          <p>
            Do you have a project in mind? Want to hire me? or simply wanna chat? Feel free to
            <Link
              className="ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white"
              href={`mailto:${siteMetadata.email}`}
              role="button"
              tabIndex={0}
            >
              <RoughNotation
                show
                type="underline"
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                schedule a call or mail me
              </RoughNotation>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
