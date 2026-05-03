import styled from 'styled-components';

const Div = styled.div`
  background-color: ${props => props.theme.colors.blacks[1]};
  padding: 1rem;
`;

const Copyright = ({date, owner}) => (
  <Div>
    <small id="copyright">
      &copy; {date} {owner}
    </small>
  </Div>
);

export default Copyright;
