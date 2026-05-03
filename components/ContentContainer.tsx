import React from 'react';
import styled, {css} from 'styled-components';

import Container from './Container';

interface OuterDivProps {
  $divider?: boolean;
  $highlight?: boolean;
  $transition?: boolean;
}

const OuterDiv = styled(Container)<OuterDivProps>`
  color: ${props => props.theme.colors.text.prose};
  padding: 1.5rem 0;
  ${props =>
    props.$divider &&
    css`
      margin-bottom: -1px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    `}
  ${props =>
    props.$highlight &&
    css`
      @media screen and (min-width: ${props.theme.breakpoints[1]}) {
        &:hover {
          box-shadow: 0 5px 40px rgba(0, 0, 0, 0.05);
        }
      }
    `}
  ${props =>
    props.$transition &&
    css`
      transition: all 0.2s ease;
    `}

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 2.5rem 0;
  }
`;

const InnerDiv = styled(Container)`
  padding-right: 1rem;
  padding-left: 1rem;
`;

interface ContentContainerProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

const ContentContainer = ({children, ...props}: ContentContainerProps) => (
  <OuterDiv {...props} $fullWidth>
    <InnerDiv $narrow>{children}</InnerDiv>
  </OuterDiv>
);

export default ContentContainer;
