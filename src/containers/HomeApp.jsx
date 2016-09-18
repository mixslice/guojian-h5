import React, { PropTypes } from 'react';
import {
  Base,
  Media,
} from 'react-uikit-web';
import { Button } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PhotoActions } from 'actions';


const styles = {
  root: {
    textAlign: 'center',
  },
  brand: {
    height: 250,
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E5%8D%81%E5%B9%B4logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 1.8,
    fontWeight: 500,
  },
};


const HomeApp = ({ actions: { choosePhoto } }) => (
  <div style={styles.root}>
    <Media
      mx={2}
      mb={3}
      aspectRatio={2.396}
      backgroundColor="transparent"
      src="http://odoy4ypd7.bkt.clouddn.com/%E5%8D%81%E5%B9%B4logo.png"
    />
    <Base mb={3} style={styles.text}>
      十年时光，我们格外珍惜你的陪伴！<br />
      重温与益赛普相遇的那一刻，<br />
      合影留下专属于你们的纪念吧！
    </Base>
    <Base px={3} pb={3}>
      <Button
        mb={2}
        onClick={choosePhoto}
      >拍摄照片</Button>
    </Base>
  </div>
);

HomeApp.propTypes = {
  actions: PropTypes.object,
};


const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(PhotoActions, dispatch),
  })
)(HomeApp);
