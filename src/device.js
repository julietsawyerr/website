const size = {
    mobileS: '540px',
    mobileM: '640px',
    mobileL: '740px',
    tablet: '915px',
    laptop: '1280px',
    laptopL: '1366px',
    laptopXL: '1545px',
    desktop: '2560px'
  }

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    laptopXL: `(min-width: ${size.laptopXL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };


//   @media (min-width:768px) {
//     font-size: 18px;
// }
// @media (min-width:1024px) {
//     font-size: 19px;
// }
// @media (min-width:1280px) {
//     font-size: 20px;
// }