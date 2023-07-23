import React from 'react';
import '../styles.scss';
const Backdrop = ({ click }) => (
  <div className="backdrop backdrop-blur-sm" onClick={click} />
);

export default Backdrop;
