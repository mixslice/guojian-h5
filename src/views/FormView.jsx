import React from 'react';
import {
  Base,
  TextField,
} from 'react-uikit-web';
import {
  PhotoFrame,
  Button,
} from 'components';
import { browserHistory } from 'react-router';


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

const FormView = () => (
  <div style={styles.root}>
    <Base px={4} mb={3}>
      <PhotoFrame src="http://img5.imgtn.bdimg.com/it/u=56657079,2159212880&fm=11&gp=0.jpg" />
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

export default FormView;
