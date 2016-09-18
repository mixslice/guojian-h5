import React from 'react';
import { Base } from 'react-uikit-web';
import {
  Button,
  PhotoFrame,
} from 'components';
import { browserHistory } from 'react-router';


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
  },
  right: {
    whiteSpace: 'nowrap',
    display: 'table-cell',
    width: '99%',
  },
};

const EditView = () => (
  <Base mx={3}>
    <PhotoFrame
      mb={3}
      src="http://img5.imgtn.bdimg.com/it/u=56657079,2159212880&fm=11&gp=0.jpg"
    />
    <div style={styles.table}>
      <div style={styles.left}><Button mb={2} mr={1}>旋转照片</Button></div>
      <div style={styles.right}><Button mb={2}>重拍</Button></div>
    </div>
    <div>
      <Button
        style={styles.next}
        onClick={() => { browserHistory.push('/form'); }}
      >下一步</Button>
    </div>
  </Base>
);

export default EditView;
