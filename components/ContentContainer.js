import PropTypes from 'prop-types';
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

ContentContainer.propTypes = {
  classNames: PropTypes.string,
  innerStyle: PropTypes.object,
  outerStyle: PropTypes.object,
  children: PropTypes.node,
};

export default ContentContainer;
