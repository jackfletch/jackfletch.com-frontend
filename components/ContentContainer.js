import styled from 'styled-components';

const OuterDiv = styled.div`
  background-color: rgb(172, 172, 192);
  color: #333;
`;

const ContentContainer = ({innerStyle, outerStyle, children}) => (
  <OuterDiv className="container-fluid sec padY40" style={outerStyle}>
    <div className="container" style={innerStyle}>
      {children}
    </div>
  </OuterDiv>
);

export default ContentContainer;
