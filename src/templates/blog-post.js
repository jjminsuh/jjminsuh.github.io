import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import UtterancesComment from '../components/utterance-comment'

const BlogPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const hasToc = post.tableOfContents && post.tableOfContents.length > 0

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="px-4 py-8 w-full max-w-7xl mx-auto"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <p className="text-gray-500 text-sm">{post.frontmatter.date}</p>
        </header>

        <div className={`grid ${hasToc ? 'md:grid-cols-[2fr_1fr]' : ''} gap-10`}>
          <div
            className="prose prose-lg max-w-none post-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {hasToc && (
            <aside className="hidden md:block border-l pl-4 text-sm text-gray-600 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h2 className="text-base font-semibold text-gray-700 uppercase tracking-wide mb-3">
                On this page
              </h2>
              <div className="toc" dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
            </aside>
          )}
        </div>

        <hr className="my-12" />
        <footer className="mt-8">
          <Bio />
        </footer>
      </article>

      <div className="max-w-4xl mx-auto px-4">
        <UtterancesComment />
      </div>

      <nav className="max-w-4xl mx-auto px-4 mt-12 mb-20">
        <ul className="flex justify-between text-blue-600">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="hover:underline">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" className="hover:underline">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
      }
      tableOfContents
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
