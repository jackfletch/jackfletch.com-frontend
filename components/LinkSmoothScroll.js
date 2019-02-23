import React, {Children} from 'react';
// import Router from 'next/router';
import smoothScroll from '../lib/smoothScroll';

// originally from https://gist.github.com/vinaypuppal/b7271ad84a0d69c9cfafaaa83afed199
// Next.js smooth scroll

// this HOC is taken from https://github.com/zeit/next.js/blob/master/lib/link.js and modified
export default class LinkSmoothScroll extends React.Component {
  constructor (props) {
    super(props);
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(e) {
    e.preventDefault();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    // Router
    //   .push(this.props.href)
    //   .then(() => {
    //     window.scrollTo(scrollX, scrollY);
    //     return smoothScroll(this.props.href);
    //   })
    //   .then(() => {
    //     if (this.props.done) {
    //       this.props.done();
    //     }
    //   })
    //   .catch(err => {
    //     if (this.props.onError) {
    //       this.props.onError(err);
    //     }
    //     console.error(err);
    //   });
    window.scrollTo(scrollX, scrollY);
    return smoothScroll(this.props.href);
  }

  render () {
    let {children} = this.props;
    if (typeof children === 'string') {
      children = <a>{children}</a>;
    }
    const child = Children.only(children);
    const props = {onClick: this.linkClicked};
    if (child.type === 'a' && !('href' in child.props)) {
      props.href = this.props.href;
    }
    return React.cloneElement(child, props);
  }
}
