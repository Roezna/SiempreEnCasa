import styled from 'styled-components';
import { colors } from './colors';

export const Button = styled.button`
    padding: ${props => props.padding ? props.padding : '0px 10px'};
    background-color: ${props => props.bg ? props.bg : colors.primary};
    color:${props => props.color ? props.color : 'white'};
    font-size:1.5em;
    border : ${props => props.border ? props.border : 'none'};
    border-radius: 3px;
    cursor: pointer;
    margin : ${props => props.margin};
    font-size : ${props => props.size};



    &:hover{
        background-color: ${props => props.hoverColor ? props.hoverColor : colors.secondary};
        color : ${props => props.hoverTextColor};
    }

`
