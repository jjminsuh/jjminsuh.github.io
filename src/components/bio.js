/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col items-center my-2 hidden md:flex md:my-0">
      <StaticImage
        className="min-w-[50px] rounded-full"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../images/profile-pic.png"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <>
          <div className="text-xl mt-4 font-semibold text-gray-800">{author.name}</div>
          <div className="text-sm text-gray-600 mt-2">{author?.summary || null}</div>
        </>
      )}
      <div className="flex items-center justify-center mt-4 gap-4">
        <a
          href="https://github.com/jjminsuh"
          className="p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Github"
        >
          <StaticImage
            className="w-7 h-7"
            layout="fixed"
            formats={['auto', 'webp', 'avif']}
            src="../images/github-mark.png"
            width={28}
            height={28}
            quality={95}
            alt="Github Link"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/minsuh-jo/"
          className="p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="LinkedIn"
        >
          <StaticImage
            className="w-7 h-7"
            layout="fixed"
            formats={['auto', 'webp', 'avif']}
            src="../images/linkedin-logo.png"
            width={28}
            height={28}
            quality={95}
            alt="Linkedin Link"
          />
        </a>
      </div>
    </div>
  )
}

export default Bio
