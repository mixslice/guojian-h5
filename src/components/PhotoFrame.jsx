import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';
import { Media } from 'components';


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

const PhotoFrame = ({ src, rotation, ...props }) => (
  <Base p={1} style={styles.photoFrame} {...props}>
    <Media
      mb={1}
      aspectRatio={2 / 3}
      src={src || (__DEV__ && 'http://farm5.static.flickr.com/4123/4761632898_d861c88bb8_b.jpg')}
      backgroundColor="#000"
      backgroundSize="cover"
      rotation={rotation}
    />
    <Base style={styles.logo} />
  </Base>
);

PhotoFrame.propTypes = {
  src: PropTypes.string,
  rotation: PropTypes.number,
};

export default PhotoFrame;
