import styled from 'styled-components';

const OuterDiv = styled.div`
  background-color: rgb(172, 172, 192);
  color: #333;
`;

const ContentContainer = ({children}) => (
  <OuterDiv className="container-fluid sec padY40">
    <div className="container">{children}</div>
  </OuterDiv>
);

export default ContentContainer;
