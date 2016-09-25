import React, { PropTypes } from 'react';
import {
  ThemeProvider,
  Base,
} from 'react-uikit-web';
import config from 'utils/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PhotoActions } from 'actions';


const styles = {
  root: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E8%83%8C%E6%99%AF%E5%8A%A0%E5%8F%B7.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  headerWrapper: {
    paddingTop: '14.667%',
    position: 'relative',
    marginRight: 10,
  },
  content: {
    zIndex: 100,
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
  overlay: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 500,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(10,37,77, 0.66)',
    overflowX: 'hidden',
    color: '#fff',
    fontSize: 20,
    lineHeight: 1.8,
    fontWeight: 500,
    textAlign: 'center',
  },
  arrow: {
    boxSizing: 'border-box',
    width: '100%',
    height: '140px',
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E7%AE%AD%E5%A4%B4.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  },
};

const App = ({
  showsShareOverlay,
  children,
  actions: { hideOverlay },
}) => (
  <ThemeProvider theme={config} style={styles.root}>
    <Base pt={1} pb={2}>
      <Base style={styles.headerWrapper}>
        <div style={styles.header} />
      </Base>
    </Base>
    <div style={styles.content}>{children}</div>
    <Base style={styles.footer} />
    {showsShareOverlay
      ? (<Base pr={2} pt={1} style={styles.overlay} onClick={hideOverlay}>
        <div style={styles.arrow} />
        <Base mt={3}>点击右上角分享朋友圈</Base>
      </Base>)
      : null}
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
  showsShareOverlay: PropTypes.bool,
  actions: PropTypes.object,
};

const mapStateToProps = ({
  photo: { showsShareOverlay } = {},
}) => ({
  showsShareOverlay,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(PhotoActions, dispatch),
  })
)(App);
