import styled from 'styled-components';

export const ImgProduct = styled.img`
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    src: url('${props => props.src}');
    margin: ${props => props.margin};
`