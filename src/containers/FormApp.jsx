import React, { PropTypes } from 'react';
import {
  Base,
  TextField,
} from 'react-uikit-web';
import { Button } from 'components';
import { PhotoFrameApp } from 'containers';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PhotoActions } from 'actions';


const styles = {
  root: {
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
  },
  button: {
    width: '100%',
  },
};

const FormApp = ({
  localId,
  actions,
}) => (
  <div style={styles.root}>
    <Base px={4} mb={3}>
      <PhotoFrameApp />
    </Base>
    <Base px={3}>
      <p style={styles.text}>
        填写个人信息并提交，即可在服务台领取合影相片，留作纪念！
      </p>
      <TextField
        placeholder="姓名"
      />
      <TextField
        placeholder="手机"
      />
      <Base pb={3}>
        <Button
          style={styles.button}
          onClick={() => { browserHistory.push('/export'); }}
        >提交</Button>
      </Base>
    </Base>
  </div>
);

FormApp.propTypes = {
  localId: PropTypes.string.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = ({
  photo: { localId } = {},
}) => ({
  localId,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(PhotoActions, dispatch),
  })
)(FormApp);
