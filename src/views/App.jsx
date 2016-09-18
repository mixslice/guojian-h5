import React, { PropTypes } from 'react';
import {
  ThemeProvider,
  Base,
} from 'react-uikit-web';
import config from 'utils/config';


const styles = {
  root: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E8%83%8C%E6%99%AF%E5%8A%A0%E5%8F%B7.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  headerWrapper: {
    paddingTop: '14.667%',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/logo%E6%A8%AA%E7%BB%84%E5%90%88.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'middle right',
    backgroundSize: 'contain',
  },
  footer: {
    pointerEvents: 'none',
    position: 'fixed',
    bottom: 0,
    height: '100%',
    width: '100%',
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E4%B8%8A%E6%B5%B7%E5%BA%95%E9%83%A8.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: 'contain',
  },
};

const App = props => (
  <ThemeProvider theme={config} style={styles.root}>
    <Base my={2} style={styles.headerWrapper}>
      <div style={styles.header} />
    </Base>
    {props.children}
    <Base style={styles.footer} />
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
