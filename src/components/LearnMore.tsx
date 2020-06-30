import React from 'react'

const content = [
  {
    title: 'Documentation',
    link: 'https://github.com/danilowoz/react-content-loader',
  },
  {
    title: 'How to create and customize react-content-loader',
    link:
      'https://medium.com/better-programming/create-and-customize-react-content-loader-c630a3b917ac',
  },
  {
    title: 'Implementing loading placeholder with react-content-loader',
    link:
      'https://www.kohei.dev/posts/react-content-loader?postId=react-content-loader&hl=en-US',
  },
]

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h2 className="learn-more--title">Learn more:</h2>

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
