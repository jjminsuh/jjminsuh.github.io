/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <div className="bio-name">
            {author.name}
          </div>
          <div className="bio-description">
            {author?.summary || null}
          </div>
        </div>
      )}
      <div className="bio-link-wrapper">
        <div>
          <a href="https://github.com/jjminsuh">
            <StaticImage
              className="bio-link-icon"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/github-mark.png"
              width={28}
              height={28}
              quality={95}
              alt="Github Link"/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/minsuh-jo/">
            <StaticImage
              className="bio-link-icon"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/linkedin-logo.png"
              width={28}
              height={28}
              quality={95}
              alt="Linkedin Link"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
