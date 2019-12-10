import styled, {css} from 'styled-components';

import Container from '../Container';

export const A = styled.a`
  display: block;
  padding: 0.5rem 0;

  &:hover {
    color: ${props =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.blacks[0]};
  }

  & {
    color: ${props =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.grays[3]};
  }
  ${props =>
    props.selected &&
    css`
      font-weight: 600;
    `};

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const LogoImg = styled.img`
  display: inline-block;
  margin-right: 1rem;
  padding-top: 0;
  padding-bottom: 0;
  height: 3rem;
  line-height: inherit;
  white-space: nowrap;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export const Li = styled.li`
  padding: 0;
  transition: all 0.2s ease-out;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding-right: 10px;
    padding-left: 10px;
  }

  & > a:hover {
    text-decoration: none;
  }
`;

export const Navbar = styled.div`
  position: relative;
  padding: 0.5rem 0;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  transition: height 0.5s, line-height 0.5s;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    flex-wrap: nowrap;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0;
  list-style: none;
  font-size: 1.125rem;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;

export const CollapseWrapper = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  transition: all 0.2s ease 0s;

  &.collapse:not(.show) {
    display: none;
  }

  &.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    display: flex !important;
    flex-basis: auto;
  }
`;

export const Toggler = styled.button.attrs({
  type: 'button',
  'data-toggle': 'collapse',
  'aria-expanded': 'false',
  'aria-label': 'Toggle navigation',
})`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    display: none;
  }
`;

export const TogglerIcon = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  content: '';
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url('/img/toggle.svg');
`;
