import styled from 'styled-components/macro'

export const Container = styled.div`
    display:flex;
    gap:10px;
    align-items: center;
    //flex-wrap: wrap;
    overflow: auto;
    overflow-y: hidden;
    width:100%;
    height:100px;
    //border:1px solid gray;
`;

export const Button = styled.button`
    position: relative;
    font-family:var(--font-family-poppins);
    font-size:1rem;
    font-weight:500;
    background:transparent;
    outline:none;
    border:none;
    cursor:pointer;
    color:var(--black);

    &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 4px;
        background-color: #3D3635;
        left:0;
        bottom: -2px;
        transition: all 0.2s ease-in-out;
        }
    
        &:hover {
            &::after {  
                color:#3D3635;
                width: 100%;
                left: 0;
            }
        } 
    
        &.active {
            font-weight: bold;

             &::after {
                width: 100%;
                left: 0;
                }
            }

`;