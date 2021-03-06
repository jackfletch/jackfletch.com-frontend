import React from 'react';
import {forwardRef} from 'react';
import Link from 'next/link';

const Anchor = forwardRef(({children, className, href, style}, ref) => (
  <a
    ref={ref}
    href={href}
    style={{...style, color: 'inherit', textDecoration: 'none'}}
    className={className}
  >
    {children}
  </a>
));
Anchor.displayName = 'Anchor';

const ConditionalLink = ({as, children, className, href, style}) => {
  const anchor = (
    <Anchor className={className} style={style}>
      {children}
    </Anchor>
  );
  const externalUrl = href.indexOf('http') === 0;
  if (externalUrl) {
    return React.cloneElement(anchor, {href});
  } else {
    return (
      <Link href={href} as={as} passHref>
        {anchor}
      </Link>
    );
  }
};

export default ConditionalLink;
