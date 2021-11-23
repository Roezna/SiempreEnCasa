import styled from 'styled-components';


export const Text = styled.span`
    text-align : center;
    font-size : ${props => props.size};
    margin : ${props => props.margin};
    font-weight: ${props => props.bold};
    color : ${props => props.color};
`