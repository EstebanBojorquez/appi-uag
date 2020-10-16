import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    <span className="bx--type-semibold">SIAUG</span>&nbsp;- Sistema de Investigación UAG
  </Header>
);

export default CustomHeader;
