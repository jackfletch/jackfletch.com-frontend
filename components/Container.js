import styled, {css} from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${props =>
    `${props.padding ? '4rem' : '0'} ${props.fullWidth ? '0' : '1rem'}`};
  max-width: ${props =>
    props.narrow ? '720px' : props.fullWidth ? '' : '1024px'};
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
  ${props =>
    props.dark &&
    css`
      background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);
      color: #f1f1f1;
    `}
  ${props =>
    props.gray &&
    css`
      background-color: #f6f6f6;
    `}
  ${props =>
    props.fullWidth &&
    !props.allowOverflow &&
    css`
      overflow: hidden;
    `}
  ${props =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
    `}
  ${props =>
    props.vCenter &&
    css`
      display: flex;
      align-items: center;
    `}
  ${props =>
    props.dotBackground &&
    css`
      background-image: radial-gradient(#d7d7d7 1px, transparent 1px),
        radial-gradient(#d7d7d7 1px, transparent 1px);
      background-position: 0 0, 25px 25px;
      background-size: 50px 50px;
    `}

  // CSS only media query for tablet
  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    & {
      padding: ${props =>
        `${props.padding ? '4rem' : '0'} ${props.fullWidth ? '0' : '2rem'}`};
    }
  }

  // CSS only media query for desktop
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    & {
      padding: ${props =>
        `${props.padding ? '6.25rem' : '0'} ${props.fullWidth ? '0' : '1rem'}`};
    }
  }
`;

export default Container;
