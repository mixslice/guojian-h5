import React from 'react';
import { Base } from 'react-uikit-web';
import {
  PhotoFrame,
  Button,
} from 'components';


const styles = {
  text: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 1.8,
    fontWeight: 500,
  },
  center: {
    textAlign: 'center',
  },
};

const ExportView = () => (
  <div>
    <p style={styles.text}>
      我们已经收到了您的回忆！<br />
      感谢您这些年的陪伴，<br />
      未来请继续与我们同行！
    </p>
    <Base mx={4} mb={3}>
      <PhotoFrame src="http://img5.imgtn.bdimg.com/it/u=56657079,2159212880&fm=11&gp=0.jpg" />
    </Base>
    <Base mx={3}>
      <Button mb={2}>分享照片</Button>
    </Base>
  </div>
);

export default ExportView;
