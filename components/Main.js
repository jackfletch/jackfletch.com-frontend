import styled, {css} from 'styled-components';

const Main = styled.main`
  min-height: ${props => css`calc(100vh - ${props.mobileHeightOffset || 0}px)`};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    min-height: ${props =>
      css`calc(100vh - ${props.desktopHeightOffset || 0}px)`};
  }
`;

export default Main;
