<p align="center">
  <img width="800px" src="https://user-images.githubusercontent.com/4838076/55633581-9d854f00-57b4-11e9-98b2-81c2eec332e3.png" title="Create Content Loader" />
</p>

<p align="center">
  <a href="https://danilowoz.github.io/create-content-loader/">Access the online tool</a>
</p>

## Create React Content Loader

**Have you heard about [react-content-loader](https://github.com/danilowoz/react-content-loader)? It's a SVG component to create placeholder loading, like Facebook cards loading or also known as skeleton UI.** So now you can use this [online tool](https://danilowoz.github.io/create-content-loader/) to create your own loader easily. You just need to draw using the canvas or code using the live editing!

Read the documentation of [react-content-loader](https://github.com/danilowoz/react-content-loader)

## Share your loader with the community.

That's is a way to share your custom loader with the React community. Besides you can help the other developers to create amazing loader to their interfaces. **There are so many ways to build a content loader, show off here!**

## How to insert a loader?

1. Build your custom amazing loader;
2. Create a file with a custom name, [here](https://github.com/danilowoz/create-content-loader/tree/master/src/Gallery/insertYourLoaderHere);
3. Use the following boilerplate (don't forget to fill the metadata);
4. Insert the file in the gallery, [here](https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/index.js);
5. Open a PR;

## Boilerplate

```jsx
import React from "react"
import ContentLoader from "react-content-loader"

const __NAME_OF_LOADER__ = props => {
  return (
    <ContentLoader
      height={40}
      width={1060}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
    // your loader
    </ContentLoader>
  )
}

__NAME_OF_LOADER__.metadata = {
  name: __WRITEHERE__, // My name
  github: __WRITEHERE__, // Github username
  description: __WRITEHERE__, // Little tagline
  filename: __WRITEHERE__ // filename of your loader
}

export default __NAME_OF_LOADER__

```

It'll be amazing to see the creativity of the community! 

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), so in the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
