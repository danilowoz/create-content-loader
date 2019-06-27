<p align="center">

  [![All Contributors][logo]](reference)

  [logo]: https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square
  [reference]: #contributors
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://danilowoz.com"><img src="https://avatars1.githubusercontent.com/u/4838076?v=4" width="100px;" alt="Danilo Woznica"/><br /><sub><b>Danilo Woznica</b></sub></a><br /><a href="#maintenance-danilowoz" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://twitter.com/poshakajay"><img src="https://avatars2.githubusercontent.com/u/7375457?v=4" width="100px;" alt="Ajay Poshak"/><br /><sub><b>Ajay Poshak</b></sub></a><br /><a href="#content-AjayPoshak" title="Content">🖋</a></td>
    <td align="center"><a href="http://rabingaire.com.np"><img src="https://avatars3.githubusercontent.com/u/17409675?v=4" width="100px;" alt="Rabin Gaire"/><br /><sub><b>Rabin Gaire</b></sub></a><br /><a href="#content-rabingaire" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/RJavlonbek"><img src="https://avatars0.githubusercontent.com/u/33687903?v=4" width="100px;" alt="RJavlonbek"/><br /><sub><b>RJavlonbek</b></sub></a><br /><a href="#content-RJavlonbek" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/LucasPadovan"><img src="https://avatars0.githubusercontent.com/u/993291?v=4" width="100px;" alt="Lucas Padovan"/><br /><sub><b>Lucas Padovan</b></sub></a><br /><a href="#content-LucasPadovan" title="Content">🖋</a></td>
    <td align="center"><a href="https://cv.wiput.me"><img src="https://avatars3.githubusercontent.com/u/8299278?v=4" width="100px;" alt="Wiput Pootong"/><br /><sub><b>Wiput Pootong</b></sub></a><br /><a href="#content-wiput1999" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.thomasknickman.com"><img src="https://avatars1.githubusercontent.com/u/2933988?v=4" width="100px;" alt="Thomas Knickman"/><br /><sub><b>Thomas Knickman</b></sub></a><br /><a href="#content-tknickman" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nicholascm"><img src="https://avatars2.githubusercontent.com/u/8185671?v=4" width="100px;" alt="Nick"/><br /><sub><b>Nick</b></sub></a><br /><a href="#content-nicholascm" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/gauravagarwal2704"><img src="https://avatars0.githubusercontent.com/u/5871983?v=4" width="100px;" alt="Gaurav Agarwal"/><br /><sub><b>Gaurav Agarwal</b></sub></a><br /><a href="#content-gauravagarwal2704" title="Content">🖋</a></td>
    <td align="center"><a href="https://patreon.com/egoist"><img src="https://avatars2.githubusercontent.com/u/8784712?v=4" width="100px;" alt="EGOIST"/><br /><sub><b>EGOIST</b></sub></a><br /><a href="#content-egoist" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/danielerota"><img src="https://avatars2.githubusercontent.com/u/50356649?v=4" width="100px;" alt="danielerota"/><br /><sub><b>danielerota</b></sub></a><br /><a href="#content-danielerota" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/EslavaDev"><img src="https://avatars0.githubusercontent.com/u/31320429?v=4" width="100px;" alt="EslavaDev"/><br /><sub><b>EslavaDev</b></sub></a><br /><a href="#content-EslavaDev" title="Content">🖋</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
