import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';
import {
  Button,
  PhotoFrame,
} from 'components';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PhotoActions } from 'actions';


const styles = {
  next: {
    width: '100%',
  },
  table: {
    width: '100%',
    display: 'table',
  },
  left: {
    whiteSpace: 'nowrap',
    display: 'table-cell',
    width: '49%',
  },
  right: {
    whiteSpace: 'nowrap',
    display: 'table-cell',
    width: '49%',
  },
};

const EditApp = ({
  localId,
  isPortrait,
  actions: { choosePhoto, rotatePhoto },
}) => (
  <Base mx={3}>
    <PhotoFrame
      mb={3}
      src={localId}
      isPortrait={isPortrait}
    />
    <div style={styles.table}>
      <div style={styles.left}>
        <Button
          mb={2}
          mr={1}
          nopadding
          onClick={rotatePhoto}
        >旋转照片</Button>
      </div>
      <div style={styles.right}>
        <Button
          mb={2}
          nopadding
          onClick={choosePhoto}
        >重拍</Button>
      </div>
    </div>
    <Base pb={3}>
      <Button
        style={styles.next}
        onClick={() => { browserHistory.push('/form'); }}
      >下一步</Button>
    </Base>
  </Base>
);


EditApp.propTypes = {
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
)(EditApp);
