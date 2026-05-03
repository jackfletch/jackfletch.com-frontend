import React from 'react';
import Link from 'next/link';

interface ConditionalLinkProps {
  as?: string;
  children: React.ReactNode;
  className?: string;
  href: string;
  style?: React.CSSProperties;
}

const linkStyle: React.CSSProperties = {color: 'inherit', textDecoration: 'none'};

const ConditionalLink = ({as, children, className, href, style}: ConditionalLinkProps) => {
  const mergedStyle = {...linkStyle, ...style};
  const externalUrl = href.indexOf('http') === 0;

  if (externalUrl) {
    return (
      <a href={href} className={className} style={mergedStyle}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} as={as} className={className} style={mergedStyle}>
      {children}
    </Link>
  );
};

export default ConditionalLink;
