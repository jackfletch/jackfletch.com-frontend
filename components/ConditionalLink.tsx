import React from 'react';
import Link from 'next/link';

interface AnchorProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  style?: React.CSSProperties;
}

const Anchor = ({children, className, href, style}: AnchorProps) => (
  <a
    href={href}
    style={{...style, color: 'inherit', textDecoration: 'none'}}
    className={className}
  >
    {children}
  </a>
);

interface ConditionalLinkProps {
  as?: string;
  children: React.ReactNode;
  className?: string;
  href: string;
  style?: React.CSSProperties;
}

const ConditionalLink = ({as, children, className, href, style}: ConditionalLinkProps) => {
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
