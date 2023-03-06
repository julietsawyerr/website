import styled from 'styled-components/macro';
import {device} from '../../../device';


export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    
    // border:1px solid black;
    margin-top:20px;
`;

export const SubCont = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:space-between;
    // border-top: 1px solid gray;
    padding: 10px 0;
`;

export const Qty = styled.div`
    position:absolute;
    left:-10px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:20px;
    height:20px;
    color:var(--primary);
    background:#6c3926ea;;
    border-radius:50px;
    font-size:0.5rem;

`;

export const ItemCont = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`;

export const Item = styled.div`
    display:flex;
    justify-content:center;
    align-center;
    padding:10px 18px;
    background:rgba(225, 225, 225, 0.2);
    border-radius:3px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

export const Description = styled.div`
    display:flex;
    flex-direction:column;
    font-size:0.95rem;
`;

export const Price = styled.p`
    font-size:0.75rem;
    color:rgba(0, 0, 0, 0.65);
    padding:0;
    margin:0;

    span{
        color:var(--danger);
        font-weight:bold;
    }
`;

export const Image = styled.img`
    height:8vh;
`;

export const LineTotal = styled.div``;


export const LineTotalCont = styled.div`

    display:flex;
    flex-direction:column;
    gap:10px;
    border-top:1px solid rgba(0, 0, 0, 0.15);
    border-bottom:1px solid rgba(0, 0, 0, 0.15);
    margin-bottom:20px;
    padding:20px 0 10px 0;
    
`;


export const Cont = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    margin-bottom:10px;
    font-size:0.95rem;
`;

export const SubTotal = styled.div`
    
`;

export const Shipping = styled.div`
    display:flex;
    flex-direction:column;
    padding-right:80px;
   

    span{
        color:rgba(0, 0, 0, 0.65);
        font-size:0.75rem;
    }
`;

export const TotalDue = styled.div`
    font-weight:bold;
    font-size:1rem;
`;

export const Cost = styled.div`
display:flex;
justify-content: flex-end;


    span{
        transform:${({checkOpt}) => checkOpt ? 'translateX(0)' : 'translateX(25px)'};
        
    }

    @media ${device.mobileM}{
      overflow:none;

      span{
        transform:none;
        
    }
    }
    
`;


export const TotalCost = styled.div`
    font-weight:bold;
//     border-bottom:4px solid var(--gray);
//     border-bottom-style: double;
 `;