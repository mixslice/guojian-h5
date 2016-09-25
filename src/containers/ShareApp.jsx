import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';
import { Button } from 'components';
import { browserHistory } from 'react-router';


const styles = {
  img: {
    width: '100%',
    boxShadow: '5px 2.5px 30px rgba(0,0,0,0.32)',
  },
  center: {
    textAlign: 'center',
  },
};

const ShareApp = ({
  params: { uid },
}) => (
  <div>
    <Base mx={4} mb={3}>
      <img style={styles.img} src={`${__API_ROOT__}/image/${uid}.jpg`} alt="" />
    </Base>
    <Base mx={3} pb={3}>
      <Button onClick={() => browserHistory.push('/')}>回到首页</Button>
    </Base>
  </div>
);

ShareApp.propTypes = {
  params: PropTypes.object,
};

export default ShareApp;
