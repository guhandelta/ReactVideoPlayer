import styled from "styled-components";

const StyledNgpPlayer = styled.div`
  background: ${props => props.theme.bgcolor}; /* #353535; => Accessing the var in the theme, which are supplied as props */ 
  border: ${props => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  max-height: 863px;
  transition: all 0.5s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`;

export default StyledNgpPlayer;
