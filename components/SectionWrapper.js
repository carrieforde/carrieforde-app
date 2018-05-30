// @flow
import React, { Component } from 'react';

type Props = {
  className: string,
  children: Array<string>,
  wrapper?: boolean
};

class SectionWrapper extends Component<Props> {
  render() {
    const { className, children, wrapper } = this.props;

    let content;

    if (wrapper) {
      content = <div className="wrapper">{children}</div>;
    } else {
      content = children;
    }

    return <section className={`cfa-block ${className}`}>{content}</section>;
  }
}

export default SectionWrapper;
