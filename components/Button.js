import React from 'react';
import Link from 'next/link';
import styled, {css} from 'styled-components';

const hexa = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

const A = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: ${props => (props.invert ? '0 3.5rem' : '0.25rem 0.5rem')};
  margin: ${props => (props.invert ? '0' : '-0.25rem -0.5rem')};
  border-radius: 7px;
  color: ${props =>
    props.invert ? props.theme.colors.white : props.theme.colors.primary};
  background-color: ${props =>
    props.invert ? props.theme.colors.primary : 'transparent'};
  border: none;
  font-size: inherit;
  line-height: ${props => (props.invert ? '2.8rem' : 'inherit')};
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: ${props =>
      props.invert ? props.theme.colors.white : props.theme.colors.primary};
    background: ${props =>
      props.invert
        ? hexa(props.theme.colors.primary, 0.9)
        : hexa(props.theme.colors.primary, 0.1)};
    text-decoration: none;
  }

  ${props =>
    props.invert &&
    css`
      box-shadow: 0 4px 14px 0 ${hexa(props.theme.colors.primary, 0.4)};
      &:hover {
        box-shadow: 0 6px 20px ${hexa(props.theme.colors.primary, 0.2)};
      }
    `}
`;

const StyledButton = styled(A).attrs({as: 'button'});

const Button = ({children, href, as, amp, ...props}) => {
  const isExternal = href && href.startsWith('http');
  const a = (
    <A href={href} {...props}>
      {children}
    </A>
  );

  if (href) {
    return amp || isExternal ? (
      a
    ) : (
      <Link href={href} as={as}>
        {a}
      </Link>
    );
  }

  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
