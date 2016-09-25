import React, { PropTypes } from 'react';
import {
  Base,
  TextField,
} from 'react-uikit-web';
import { Button } from 'components';
import { PhotoFrameApp } from 'containers';
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
  userName,
  mobile,
  isUploading,
  actions: { submitPhoto, updateName, updateMobile },
}) => (
  <div style={styles.root}>
    <Base px={4} mb={3}>
      <PhotoFrameApp />
    </Base>
    {isUploading
      ? '正在上传'
      : (<Base px={3}>
        <p style={styles.text}>
          填写个人信息并提交，即可在服务台领取合影相片，留作纪念！
        </p>
        <TextField
          placeholder="姓名"
          value={userName}
          onChange={(e) => { updateName(e.target.value); }}
        />
        <TextField
          placeholder="手机"
          value={mobile}
          onChange={(e) => { updateMobile(e.target.value); }}
        />
        <Base pb={3}>
          <Button
            style={styles.button}
            onClick={submitPhoto}
          >提交</Button>
        </Base>
      </Base>)}
  </div>
);

FormApp.propTypes = {
  actions: PropTypes.object,
  mobile: PropTypes.string,
  userName: PropTypes.string,
  isUploading: PropTypes.bool,
};

const mapStateToProps = ({
  photo: { mobile, userName, isUploading } = {},
}) => ({
  mobile,
  userName,
  isUploading,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(PhotoActions, dispatch),
  })
)(FormApp);
