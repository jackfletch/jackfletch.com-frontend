import styled from 'styled-components';

const OuterDiv = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
`;

const InnerDiv = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
`;

const ContentContainer = ({innerStyle, outerStyle, children}) => (
  <OuterDiv className="container-fluid" style={outerStyle}>
    <InnerDiv className="container" style={innerStyle}>
      {children}
    </InnerDiv>
  </OuterDiv>
);

export default ContentContainer;
