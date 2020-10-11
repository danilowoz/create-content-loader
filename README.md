<p align="center">
  <img width="800px" align="center" src="https://user-images.githubusercontent.com/4838076/72096118-78a8a400-3311-11ea-8b8d-c69ef232ffcc.png" title="Create Content Loader" />
</p>

<p align="center">
  <a href="https://danilowoz.github.io/create-content-loader/">danilowoz.com/create-content-loader</a>
</p>

## Introduction

**[react-content-loader](https://github.com/danilowoz/react-content-loader) it is a SVG component to create placeholder loading, like Facebook cards loading or also known as skeleton UI.** So using this [online tool](https://danilowoz.github.io/create-content-loader/) you will be able to create your own loader easily. You just need to draw using the canvas and get the snippet ready for:

- ReactJS;
- React Native;
- VueJS;
- SVG/HTML;
- Maybe Gif someday;

**Still not clear?**
Read the documentation of [react-content-loader](https://github.com/danilowoz/react-content-loader)

## Community loading

**Have you made an amazing loading and you're proud of it? Your contribution is welcome.** Add your loading code in the gallery following the steps bellow and help the community grows.

## How to insert a loader?

1. Build your custom amazing loader;
2. Create a file with a custom name, [here](https://github.com/danilowoz/create-content-loader/tree/master/src/Gallery/insertYourLoaderHere);
3. Use the following boilerplate (don't forget to fill the metadata);
4. Insert the file in the gallery, [here](https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/index.js);
5. Open a pull request, don't you know how to do it? [Read this](https://help.github.com/pt/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request);

## Boilerplate

```jsx
import React from 'react'
import ContentLoader from 'react-content-loader'

const __NAME_OF_LOADER__ = props => {
  return (
    <ContentLoader
      height={40}
      width={1060}
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
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
  filename: __WRITEHERE__, // filename of your loader
}

export default __NAME_OF_LOADER__
```

---

## Development

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), so in the project directory, you can run:

#### `npm install && npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/poshakajay"><img src="https://avatars2.githubusercontent.com/u/7375457?v=4" width="100px;" alt=""/><br /><sub><b>Ajay Poshak</b></sub></a><br /><a href="#content-AjayPoshak" title="Content">🖋</a></td>
    <td align="center"><a href="http://danilowoz.com"><img src="https://avatars1.githubusercontent.com/u/4838076?v=4" width="100px;" alt=""/><br /><sub><b>Danilo Woznica</b></sub></a><br /><a href="#maintenance-danilowoz" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://rabingaire.com.np"><img src="https://avatars3.githubusercontent.com/u/17409675?v=4" width="100px;" alt=""/><br /><sub><b>Rabin Gaire</b></sub></a><br /><a href="#content-rabingaire" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/RJavlonbek"><img src="https://avatars0.githubusercontent.com/u/33687903?v=4" width="100px;" alt=""/><br /><sub><b>RJavlonbek</b></sub></a><br /><a href="#content-RJavlonbek" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/LucasPadovan"><img src="https://avatars0.githubusercontent.com/u/993291?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Padovan</b></sub></a><br /><a href="#content-LucasPadovan" title="Content">🖋</a></td>
    <td align="center"><a href="https://cv.wiput.me"><img src="https://avatars3.githubusercontent.com/u/8299278?v=4" width="100px;" alt=""/><br /><sub><b>Wiput Pootong</b></sub></a><br /><a href="#content-wiput1999" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.thomasknickman.com"><img src="https://avatars1.githubusercontent.com/u/2933988?v=4" width="100px;" alt=""/><br /><sub><b>Thomas Knickman</b></sub></a><br /><a href="#content-tknickman" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nicholascm"><img src="https://avatars2.githubusercontent.com/u/8185671?v=4" width="100px;" alt=""/><br /><sub><b>Nick</b></sub></a><br /><a href="#content-nicholascm" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/gauravagarwal2704"><img src="https://avatars0.githubusercontent.com/u/5871983?v=4" width="100px;" alt=""/><br /><sub><b>Gaurav Agarwal</b></sub></a><br /><a href="#content-gauravagarwal2704" title="Content">🖋</a></td>
    <td align="center"><a href="https://patreon.com/egoist"><img src="https://avatars2.githubusercontent.com/u/8784712?v=4" width="100px;" alt=""/><br /><sub><b>EGOIST</b></sub></a><br /><a href="#content-egoist" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/danielerota"><img src="https://avatars2.githubusercontent.com/u/50356649?v=4" width="100px;" alt=""/><br /><sub><b>danielerota</b></sub></a><br /><a href="#content-danielerota" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/EslavaDev"><img src="https://avatars0.githubusercontent.com/u/31320429?v=4" width="100px;" alt=""/><br /><sub><b>EslavaDev</b></sub></a><br /><a href="#content-EslavaDev" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.upwork.com/o/profiles/users/_~0159ba59f83310f587/"><img src="https://avatars0.githubusercontent.com/u/39671392?v=4" width="100px;" alt=""/><br /><sub><b>Ahsan Ullah</b></sub></a><br /><a href="#content-IamAhsanMani" title="Content">🖋</a></td>
    <td align="center"><a href="https://koneko096.github.io/"><img src="https://avatars3.githubusercontent.com/u/9217338?v=4" width="100px;" alt=""/><br /><sub><b>Afrizal Fikri</b></sub></a><br /><a href="#content-koneko096" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/bilalbutt044"><img src="https://avatars3.githubusercontent.com/u/30072504?v=4" width="100px;" alt=""/><br /><sub><b>Muhammad Bilal</b></sub></a><br /><a href="#content-bilalbutt044" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/alidaghighi"><img src="https://avatars3.githubusercontent.com/u/23290056?v=4" width="100px;" alt=""/><br /><sub><b>Ali Daghighi</b></sub></a><br /><a href="#content-alidaghighi" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.youtube.com/victoriamei"><img src="https://avatars2.githubusercontent.com/u/28760234?v=4" width="100px;" alt=""/><br /><sub><b>Victoria Mei</b></sub></a><br /><a href="#content-vm930" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/adititipnis"><img src="https://avatars0.githubusercontent.com/u/10024684?v=4" width="100px;" alt=""/><br /><sub><b>adititipnis</b></sub></a><br /><a href="#content-adititipnis" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/pablomaribondo"><img src="https://avatars0.githubusercontent.com/u/29880916?v=4" width="100px;" alt=""/><br /><sub><b>Pablo Maribondo</b></sub></a><br /><a href="#content-pablomaribondo" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/sbaraka"><img src="https://avatars2.githubusercontent.com/u/29280064?v=4" width="100px;" alt=""/><br /><sub><b>Sammy Baraka</b></sub></a><br /><a href="#content-sbaraka" title="Content">🖋</a></td>
    <td align="center"><a href="https://baptistefkt.github.io"><img src="https://avatars3.githubusercontent.com/u/18186452?v=4" width="100px;" alt=""/><br /><sub><b>Baptiste Firket</b></sub></a><br /><a href="#content-baptistefkt" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/aej11a"><img src="https://avatars2.githubusercontent.com/u/10066422?v=4" width="100px;" alt=""/><br /><sub><b>aej11a</b></sub></a><br /><a href="#content-aej11a" title="Content">🖋</a></td>
    <td align="center"><a href="http://royalbhati.github.io/portfolio"><img src="https://avatars3.githubusercontent.com/u/11679543?v=4" width="100px;" alt=""/><br /><sub><b>Royal Bhati</b></sub></a><br /><a href="#content-royalbhati" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Akashnb"><img src="https://avatars3.githubusercontent.com/u/42564198?v=4" width="100px;" alt=""/><br /><sub><b>Akash Bambhaniya</b></sub></a><br /><a href="#content-Akashnb" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/lPaths"><img src="https://avatars0.githubusercontent.com/u/22215743?v=4" width="100px;" alt=""/><br /><sub><b>Phát Mai</b></sub></a><br /><a href="#content-lPaths" title="Content">🖋</a></td>
    <td align="center"><a href="https://sgarcia30.github.io/portfolio/"><img src="https://avatars2.githubusercontent.com/u/31214561?v=4" width="100px;" alt=""/><br /><sub><b>Sarah Ann Garcia</b></sub></a><br /><a href="#content-sgarcia30" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.fistondesign.com"><img src="https://avatars2.githubusercontent.com/u/46843540?v=4" width="100px;" alt=""/><br /><sub><b>BYIRINGIRO Emmanuel</b></sub></a><br /><a href="#content-emmbyiringiro" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/clariokids"><img src="https://avatars1.githubusercontent.com/u/7637706?v=4" width="100px;" alt=""/><br /><sub><b>clariokids</b></sub></a><br /><a href="#content-clariokids" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://luisabfs.github.io"><img src="https://avatars1.githubusercontent.com/u/21061462?v=4" width="100px;" alt=""/><br /><sub><b>Luísa</b></sub></a><br /><a href="#content-luisabfs" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/marjorg"><img src="https://avatars2.githubusercontent.com/u/5442549?v=4" width="100px;" alt=""/><br /><sub><b>Marius Jørgensen</b></sub></a><br /><a href="#content-marjorg" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/inesgs12"><img src="https://avatars2.githubusercontent.com/u/49120647?v=4" width="100px;" alt=""/><br /><sub><b>Ines Guerrero</b></sub></a><br /><a href="#content-inesgs12" title="Content">🖋</a></td>
    <td align="center"><a href="https://linkedin.com/in/arthufalcao/"><img src="https://avatars2.githubusercontent.com/u/22386383?v=4" width="100px;" alt=""/><br /><sub><b>Arthur Falcão</b></sub></a><br /><a href="#content-arthurfalcao" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.webnow.site"><img src="https://avatars2.githubusercontent.com/u/33206445?v=4" width="100px;" alt=""/><br /><sub><b>Cristina Dias</b></sub></a><br /><a href="#content-crisgit" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Mr-sgreen"><img src="https://avatars1.githubusercontent.com/u/12498468?v=4" width="100px;" alt=""/><br /><sub><b>Mr-sgreen</b></sub></a><br /><a href="#content-Mr-sgreen" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/asehdev"><img src="https://avatars2.githubusercontent.com/u/50873266?v=4" width="100px;" alt=""/><br /><sub><b>asehdev</b></sub></a><br /><a href="#content-asehdev" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/toiladoong"><img src="https://avatars0.githubusercontent.com/u/26488763?v=4" width="100px;" alt=""/><br /><sub><b>toiladoong</b></sub></a><br /><a href="#content-toiladoong" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/swatana3"><img src="https://avatars3.githubusercontent.com/u/8205632?v=4" width="100px;" alt=""/><br /><sub><b>swatana3</b></sub></a><br /><a href="#content-swatana3" title="Content">🖋</a></td>
    <td align="center"><a href="http://fulgenc.io"><img src="https://avatars0.githubusercontent.com/u/13307636?v=4" width="100px;" alt=""/><br /><sub><b>Chris Fulgencio</b></sub></a><br /><a href="#content-fulgencc" title="Content">🖋</a></td>
    <td align="center"><a href="http://Fouadkhatib.de"><img src="https://avatars0.githubusercontent.com/u/42405091?v=4" width="100px;" alt=""/><br /><sub><b>Fouad Khatib</b></sub></a><br /><a href="#content-Fouadktb" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/bilal-ahmed-dev"><img src="https://avatars1.githubusercontent.com/u/12461946?v=4" width="100px;" alt=""/><br /><sub><b>Bilal Ahmed</b></sub></a><br /><a href="#content-bilal-ahmed-dev" title="Content">🖋</a></td>
    <td align="center"><a href="http://pushp1997.github.io"><img src="https://avatars3.githubusercontent.com/u/19623154?v=4" width="100px;" alt=""/><br /><sub><b>Pushp Vashisht</b></sub></a><br /><a href="#content-pushp1997" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/sridhareaswaran"><img src="https://avatars3.githubusercontent.com/u/9800626?v=4" width="100px;" alt=""/><br /><sub><b>Sridhar Easwaran</b></sub></a><br /><a href="#content-sridhareaswaran" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/PathakPratik"><img src="https://avatars2.githubusercontent.com/u/17859354?v=4" width="100px;" alt=""/><br /><sub><b>Pratik Pathak</b></sub></a><br /><a href="#content-PathakPratik" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/caio-davi"><img src="https://avatars3.githubusercontent.com/u/54697155?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Caio Davi</b></sub></a><br /><a href="#content-caio-davi" title="Content">🖋</a></td>
    <td align="center"><a href="http://cleo.one"><img src="https://avatars0.githubusercontent.com/u/2522722?v=4" width="100px;" alt=""/><br /><sub><b>Yusuf Özlü</b></sub></a><br /><a href="#content-ozluy" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Arif-un"><img src="https://avatars2.githubusercontent.com/u/19432983?v=4" width="100px;" alt=""/><br /><sub><b>Arif Uddin</b></sub></a><br /><a href="#content-Arif-un" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/surepeps"><img src="https://avatars0.githubusercontent.com/u/31157177?v=4" width="100px;" alt=""/><br /><sub><b>Hassan Tijani.A</b></sub></a><br /><a href="#content-surepeps" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/anpel"><img src="https://avatars2.githubusercontent.com/u/16278404?v=4" width="100px;" alt=""/><br /><sub><b>Andreas Pelekoudas</b></sub></a><br /><a href="https://github.com/danilowoz/create-content-loader/commits?author=anpel" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/pranaybinju"><img src="https://avatars2.githubusercontent.com/u/24493084?v=4" width="100px;" alt=""/><br /><sub><b>Pranay Binju</b></sub></a><br /><a href="#content-pranaybinju" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/RivkyBleier"><img src="https://avatars1.githubusercontent.com/u/59883988?v=4" width="100px;" alt=""/><br /><sub><b>rivkyb</b></sub></a><br /><a href="#content-RivkyBleier" title="Content">🖋</a></td>
    <td align="center"><a href="https://linkedin.com/in/nikhil-anand"><img src="https://avatars2.githubusercontent.com/u/36640498?v=4" width="100px;" alt=""/><br /><sub><b>Nikhil Anand</b></sub></a><br /><a href="#content-anandnkhl" title="Content">🖋</a></td>
    <td align="center"><a href="https://alanhurtarte.com"><img src="https://avatars1.githubusercontent.com/u/12109719?v=4" width="100px;" alt=""/><br /><sub><b>Alan Hurtarte</b></sub></a><br /><a href="#content-kenny08gt" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ghettifish"><img src="https://avatars1.githubusercontent.com/u/23620578?v=4" width="100px;" alt=""/><br /><sub><b>ghettifish</b></sub></a><br /><a href="#content-ghettifish" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/dao-phuong"><img src="https://avatars0.githubusercontent.com/u/26901361?v=4" width="100px;" alt=""/><br /><sub><b>duyphuong</b></sub></a><br /><a href="#content-dao-phuong" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/coktopus"><img src="https://avatars3.githubusercontent.com/u/63889078?v=4" width="100px;" alt=""/><br /><sub><b>coktopus</b></sub></a><br /><a href="#content-coktopus" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/dhurvgaloriya"><img src="https://avatars.githubusercontent.com/dhruvgaloriya" width="100px;" alt=""/><br /><sub><b>Dhruvit Galoriya</b></sub></a><br /><a href="#dhruvit-galoriya" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
