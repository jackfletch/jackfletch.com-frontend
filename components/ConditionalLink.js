import Link from 'next/link';

const Anchor = ({children, href, style}) => (
  <a href={href} style={{...style, color: 'inherit', textDecoration: 'none'}}>
    {children}
  </a>
);

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
