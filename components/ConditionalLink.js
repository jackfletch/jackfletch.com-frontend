import React from 'react';
import Link from 'next/link';

const Anchor = ({children, className, href, style}) => (
  <a
    href={href}
    style={{...style, color: 'inherit', textDecoration: 'none'}}
    className={className}
  >
    {children}
  </a>
);

const ConditionalLink = ({as, children, className, href, style}) => {
  const externalUrl = href.indexOf('http') === 0;
  if (externalUrl) {
    return (
      <Anchor className={className} style={style} href={href}>
        {children}
      </Anchor>
    );
  } else {
    return (
      <Link href={href} as={as} legacyBehavior passHref>
        <Anchor className={className} style={style}>
          {children}
        </Anchor>
      </Link>
    );
  }
};

export default ConditionalLink;
