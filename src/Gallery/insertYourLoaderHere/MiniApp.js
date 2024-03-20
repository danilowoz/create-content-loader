import React from "react"
import ContentLoader from "react-content-loader"

const MiniAppLoader = props => {
  return (
    <ContentLoader viewBox="0 0 800 120" height={120} width={800}>
                    <Rect x="25" y="10" rx="20" ry="20" width="70" height="70" />
                    <Rect x="25" y="90" rx="0" ry="0" width="70" height="15" />
                    <Rect x="115" y="10" rx="20" ry="20" width="70" height="70" />
                    <Rect x="115" y="90" rx="0" ry="0" width="70" height="15" />
                    <Rect x="205" y="10" rx="20" ry="20" width="70" height="70" />
                    <Rect x="205" y="90" rx="0" ry="0" width="70" height="15" />
                    <Rect x="295" y="10" rx="20" ry="20" width="70" height="70" />
                    <Rect x="295" y="90" rx="0" ry="0" width="70" height="15" />
                </ContentLoader>
  )
}

MiniAppLoader.metadata = {
  name: 'Randy Rebucas',
  github: 'randy-rebucas',
  description: 'A loading skeleton for your mini app programs.',
  filename: 'MiniApp',
}

export default MiniAppLoader
