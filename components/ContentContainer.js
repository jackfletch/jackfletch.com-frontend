import styled from 'styled-components';

const OuterDiv = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
`;

const InnerDiv = styled.div`
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const ContentContainer = ({className, innerStyle, outerStyle, children}) => {
  const defaultClassName = ['container', 'content'];
  if (className !== undefined) {
    defaultClassName.push(className.split(' '));
  }

  return (
    <OuterDiv className="container-fluid" style={outerStyle}>
      <InnerDiv className={defaultClassName.join(' ')} style={innerStyle}>
        {children}
      </InnerDiv>
    </OuterDiv>
  );
};

export default ContentContainer;
