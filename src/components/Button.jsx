import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';


const styles = {
  root: {
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '1.6em',
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: 16,
    paddingBottom: 16,
    color: '#0166B6',
    backgroundImage: 'linear-gradient(#fff 50%, #E7F1FB)',
    boxShadow: '5px 2.5px 27px rgba(0,0,0,0.32)',
  },
};

const MXButton = ({ children, style, ...props }) => (
  <Base
    rounded
    style={{ ...styles.root, ...style }}
    {...props}
  >
    {children}
  </Base>
);

MXButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default MXButton;
