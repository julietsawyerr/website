import styled from 'styled-components/macro'
import {device} from '../../device';


export const Container = styled.div`
    display:flex;
    align-items:center;
    width: 90%;
    height:calc(100vh - 80px);
    margin:-20px auto 0;
    box-sizing: border-box;
    // border:1px solid gray; 


    @media ${device.tablet}{
        height:calc(100vh - 90px);
     }

    @media ${device.mobileM}{
          flex-direction:column;
          height:100%;
     }

     @media ${device.laptopXL}{
        transform:translateY(-50px);
        width:80vw;
     }
    
 `;

 export const RightCont = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:55%;
    height:100%;
    /* border:3px solid red; */

        @media ${device.mobileM}{
        order:1;
        width:100%;
    }


`;

export const LeftCont = styled.div`
        width:45%;
    height:100%;
    //border:3px solid green;

     @media ${device.mobileM}{
        order:2;
        width:100%;
        margin:0 auto;
 
    }
`;

 



// export const Container = styled.div`
//     position:relative;
//     width:100vw;
//     //min-height:calc(100vh - 80px); 
//     height: 100%; 
//     //transform:translateY(-80px)
//     box-sizing:border-box;
//     border:1px solid black;
// `;



// export const Main = styled.div`
//     //position:absolute;
//     //top:0;
//     width:100%;
//     height:100%;
//     //border:1px solid black;
//     //z-index:-1;
// `;

// export const SubMain = styled.div`
//     display:flex;
//     width:90%;
//     height:100%;
//     margin:0 auto;
//     border:1px solid gray;


//     @media ${device.mobileM}{
//         width:90%;
//         flex-direction:column;
//     }

// `;


// export const RightCont = styled.div`
//     //position:relative;
//     width:55%;
//     height:auto;
//     //border:1px solid red;

//     @media ${device.mobileM}{
//         order:1;
//         width:100%;

//     }
// `;

// export const LeftCont = styled.div`
//     //position:relative;
//     width:45%;
//     height:100%;
//     //border:1px solid green;

//      @media ${device.mobileM}{
//         order:2;
//         width:80%;
//         margin:0 auto;
 
//     }
// `;

// export const Container = styled.div`
//     position:relative;
//     width: 100%;
//     min-height:100vh;
//     height:100%;
//     border:1px solid gray;
// `;


// export const Main = styled.div`
//     position:absolute;
//     width:100%;
//     height: 100%;
//     border:1px solid gray;

// `;

// export const SubMain = styled.div`
//      display:flex;
//     width:90%;
//     height:100%;
//      margin:0 auto;
//   border:1px solid gray;


//     @media ${device.mobileM}{
//        width:90%;
//          flex-direction:column;
//     }
// `;

// export const RightCont = styled.div`
//     width:55%;
//     height:auto;
//     border:1px solid red;

//     @media ${device.mobileM}{
//         order:1;
//         width:100%;

//     }
// `;

// export const LeftCont = styled.div`
//     width:45%;
//     height:100%;
//     //border:1px solid green;

//      @media ${device.mobileM}{
//         order:2;
// //         width:100%;
 
//     }
//  `;
