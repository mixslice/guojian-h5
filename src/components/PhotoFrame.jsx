import React, { PropTypes } from 'react';
import {
  Base,
  Media,
} from 'react-uikit-web';


const styles = {
  photoFrame: {
    boxShadow: '5px 2.5px 30px rgba(0,0,0,0.32)',
    backgroundColor: '#fff',
  },
  logo: {
    backgroundImage: 'url(http://odoy4ypd7.bkt.clouddn.com/%E7%9B%8A%E8%B5%9B%E6%99%AElogo%E5%AF%BC%E5%87%BA.png)',
    height: 30,
    backgroundSize: 'contain',
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
  },
};

const PhotoFrame = ({ src, isPortrait, ...props }) => (
  <Base p={1} style={styles.photoFrame} {...props}>
    <Media
      mb={1}
      aspectRatio={isPortrait ? 0.75 : 4 / 3}
      src={src}
      backgroundColor="#000"
    />
    <Base style={styles.logo} />
  </Base>
);

PhotoFrame.propTypes = {
  src: PropTypes.string,
  isPortrait: PropTypes.bool,
};

export default PhotoFrame;
