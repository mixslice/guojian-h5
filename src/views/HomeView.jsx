import React from 'react';
import {
  Base,
  Media,
} from 'react-uikit-web';
import { Button } from 'components';
import { browserHistory } from 'react-router';

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
    fontSize: 20,
    lineHeight: 1.8,
    fontWeight: 500,
  },
};

const HomeView = () => (
  <div style={styles.root}>
    <Media
      mx={2}
      aspectRatio={2.396}
      backgroundColor="transparent"
      src="http://odoy4ypd7.bkt.clouddn.com/%E5%8D%81%E5%B9%B4logo.png"
    />
    <Base p={3} style={styles.text}>
      十年时光，我们格外珍惜你的陪伴！<br />
      重温与益赛普相遇的那一刻，<br />
      合影留下专属于你们的纪念吧！<br />
    </Base>
    <Button onClick={() => { browserHistory.push('/edit'); }}>拍摄照片</Button>
  </div>
);

export default HomeView;
