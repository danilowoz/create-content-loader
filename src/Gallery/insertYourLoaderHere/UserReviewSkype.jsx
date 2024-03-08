import React from 'react'
import ContentLoader from 'react-content-loader'

const UserReviewSkype = props => {
  return (
    <ContentLoader
      width={460}
      height={275}
      viewBox="0 0 460 275"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="77" cy="63" r="52" />
      <circle cx="118" cy="98" r="25" />
      <rect x="30" y="134" rx="0" ry="0" width="113" height="14" />
      <rect x="46" y="154" rx="0" ry="0" width="82" height="13" />
      <rect x="28" y="177" rx="0" ry="0" width="123" height="78" />
      <circle cx="217" cy="64" r="52" />
      <circle cx="258" cy="99" r="25" />
      <rect x="170" y="135" rx="0" ry="0" width="113" height="14" />
      <rect x="186" y="155" rx="0" ry="0" width="82" height="13" />
      <rect x="168" y="178" rx="0" ry="0" width="123" height="78" />
      <circle cx="358" cy="64" r="52" />
      <circle cx="399" cy="99" r="25" />
      <rect x="311" y="135" rx="0" ry="0" width="113" height="14" />
      <rect x="327" y="155" rx="0" ry="0" width="82" height="13" />
      <rect x="309" y="178" rx="0" ry="0" width="123" height="78" />
    </ContentLoader>
  )
}

UserReviewSkype.metadata = {
  name: 'Pushp Vashisht',
  github: 'pushp1997',
  description: 'A User Review with Skype like user image.',
  filename: 'UserReviewSkype',
}

export default UserReviewSkype
