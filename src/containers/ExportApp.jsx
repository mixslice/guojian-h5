import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';
import {
  PhotoFrame,
  Button,
} from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PhotoActions } from 'actions';


const styles = {
  text: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 1.8,
    fontWeight: 500,
  },
  center: {
    textAlign: 'center',
  },
};

const ExportApp = ({
  localId,
  isPortrait,
  actions,
}) => (
  <div>
    <p style={styles.text}>
      我们已经收到了您的回忆！<br />
      感谢您这些年的陪伴，<br />
      未来请继续与我们同行！
    </p>
    <Base mx={4} mb={3}>
      <PhotoFrame src={localId} isPortrait={isPortrait} />
    </Base>
    <Base mx={3} pb={3}>
      <Button>分享照片</Button>
    </Base>
  </div>
);

ExportApp.propTypes = {
  localId: PropTypes.string.isRequired,
  isPortrait: PropTypes.bool.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = ({
    photo: { localId, isPortrait } = {},
  }) => ({
    localId,
    isPortrait,
  });

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(PhotoActions, dispatch),
  })
)(ExportApp);
