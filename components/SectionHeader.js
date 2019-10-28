import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0 0.5rem;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-bottom: 6.25rem;
  }
`;

const H2 = styled.h2`
  color: ${props => props.theme.colors.text.header};
  margin: 0;
  font-size: 3rem;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const SectionHeader = ({id, title, description}) => (
  <Div>
    <H2 id={id}>{title}</H2>
    {description && <h3>{description}</h3>}
  </Div>
);

export default SectionHeader;
