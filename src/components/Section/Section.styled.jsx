import styled from 'styled-components';

export const SectionContainer = styled.section`
max-width: 360;
padding: 25px;
text-align: center;
background-color: ${({theme: {colors}}) => colors.sectionCard};
    border-radius: 10px;
    box-shadow: ${({theme: {colors}}) => colors.shadow};
`;

export const Title = styled.h2`
margin-top: 0;
margin-bottom: 25px;
`;