import React from 'react';
import { Base } from 'react-uikit-web';
import {
  Button,
  PhotoFrame,
} from 'components';


const styles = {
  next: {
    width: '100%',
  },
};

const EditView = () => (
  <Base px={3}>
    <PhotoFrame src="http://img5.imgtn.bdimg.com/it/u=56657079,2159212880&fm=11&gp=0.jpg" />
    <Button>旋转照片</Button>
    <Button>重拍</Button>
    <Button style={styles.next}>下一步</Button>
  </Base>
);

export default EditView;
