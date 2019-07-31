import {forwardRef} from 'react';
import Link from 'next/link';

const Anchor = forwardRef(({children, href, style}, ref) => (
  <a
    ref={ref}
    href={href}
    style={{...style, color: 'inherit', textDecoration: 'none'}}
  >
    {children}
  </a>
));

const ConditionalLink = ({children, href, style}) => {
  const anchor = (
    <Anchor href={href} style={style}>
      {children}
    </Anchor>
  );
  const externalUrl = href.indexOf('http') === 0;
  if (externalUrl) {
    return anchor;
  } else {
    return <Link href={href}>{anchor}</Link>;
  }
};

export default ConditionalLink;
