import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';
import { Button } from 'components';
import { PhotoFrameApp } from 'containers';
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
  actions: { choosePhoto, rotatePhoto },
}) => (
  <Base mx={3}>
    <PhotoFrameApp mb={3} />
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
  actions: PropTypes.object,
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(PhotoActions, dispatch),
  })
)(EditApp);
