import React, { PropTypes } from 'react';
import {
  Base,
  Media,
} from 'react-uikit-web';


const styles = {
  photoFrame: {
    boxShadow: '5px 2.5px 30px rgba(0,0,0,0.32)',
  },
  logo: {
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E7%9B%8A%E8%B5%9B%E6%99%AElogo%E5%AF%BC%E5%87%BA.png)',
    height: 30,
    backgroundSize: 'contain',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
  },
};

const PhotoFrame = ({ src }) => (
  <Base p={1} style={styles.photoFrame}>
    <Media
      mb={1}
      aspectRatio={1.5}
      src={src}
    />
    <Base style={styles.logo} />
  </Base>
);

PhotoFrame.propTypes = {
  src: PropTypes.string,
};

export default PhotoFrame;
