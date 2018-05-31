// @flow
import React from 'react';

const SectionHeader = (props: { title: string }) => {
  const { title } = props;
  return (
    <header className="cfa-block__header">
      <h2 className="cfa-block__title">{title}</h2>
    </header>
  );
};

export default SectionHeader;
