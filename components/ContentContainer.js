import styled from 'styled-components';

const OuterDiv = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
`;

const ContentContainer = ({innerStyle, outerStyle, children}) => (
  <OuterDiv className="container-fluid sec" style={outerStyle}>
    <div className="container" style={innerStyle}>
      {children}
    </div>
  </OuterDiv>
);

export default ContentContainer;
