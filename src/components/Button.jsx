import React, { PropTypes } from 'react';
import { Button } from 'react-uikit-web';


const styles = {
  root: {
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '1.6em',
    padding: '16px 36px',
    color: '#0166B6',
    background: 'linear-gradient(#fff 50%, #E7F1FB)',
    boxShadow: '5px 2.5px 27px rgba(0,0,0,0.32)',
  },
};

const MXButton = ({ children, style }) => (
  <Button
    size="large"
    rounded
    style={{ ...style, ...styles.root }}
  >
    {children}
  </Button>
);

MXButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default MXButton;
