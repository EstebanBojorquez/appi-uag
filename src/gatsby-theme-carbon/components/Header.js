import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    <span className="custom-hide-mobile bx--type-light">Sistema de Información de la Coordinación de Investigación y Desarrollo Tecnológico&nbsp;<span className="bx--type-semibold">UAG</span></span><span className="custom-show-mobile"><span>SIAUG</span></span>
  </Header>
);

export default CustomHeader;
