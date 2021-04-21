import React from 'react'

const links = [
  {
    title: 'Documentation',
    link: 'https://github.com/danilowoz/react-content-loader',
  },
  {
    title: 'Examples',
    link: 'https://danilowoz.github.io/react-content-loader/',
  },
]

const content = [
  {
    title: 'How to create and customize react-content-loader (by Sara Fotros)',
    link:
      'https://medium.com/better-programming/create-and-customize-react-content-loader-c630a3b917ac',
  },
  {
    title:
      'Implementing loading placeholder with react-content-loader (by Kohei Asai)',
    link:
      'https://www.kohei.dev/posts/react-content-loader?postId=react-content-loader&hl=en-US',
  },
]

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h2 className="learn-more--title">Links:</h2>

      {links.map(({ link, title }) => {
        return (
          <p className="learn-more--link" key={title}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </p>
        )
      })}

      <h2 className="learn-more--title">How to use it:</h2>

      {content.map(({ link, title }) => {
        return (
          <p className="learn-more--link" key={title}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </p>
        )
      })}
    </div>
  )
}

export default LearnMore
