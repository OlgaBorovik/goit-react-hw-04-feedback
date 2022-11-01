import styled from 'styled-components';

export const ButtonList = styled.ul`
display:flex;
padding: 0;
`
export const Button = styled.button`
margin-right: 16px;
width: 100px;
height: 30px;
border-radius: 4px;
text-transform: uppercase;
color: white;
background-color: grey;
border: none;
&:hover{
    background-color: blue;
}
`