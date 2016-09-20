import React, { PropTypes } from 'react';
import { Base } from 'react-uikit-web';


const getStyles = ({
  src,
  width,
  aspectRatio = 1,
  backgroundSize,
  backgroundColor,
  rotation,
}) => ({
  wrapper: {
    width,
    overflow: 'hidden',
    backgroundColor,
  },
  root: {
    position: 'relative',
    width: '100%',
    paddingTop: `${100 / aspectRatio}%`,
  },
  content: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    backgroundSize: backgroundSize || 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: src ? `url(${src})` : 'none',
    transform: rotation ? `rotate(${rotation}deg)` : 'none',
  },
});

const Media = ({
  src,
  width,
  aspectRatio,
  backgroundSize,
  backgroundColor,
  rotation,
  style,
  ...props,
}) => {
  const styles = getStyles({
    src,
    width,
    aspectRatio,
    backgroundSize,
    backgroundColor,
    rotation,
  });
  const sx = { ...styles.wrapper, ...style };

  return (
    <Base style={sx} {...props}>
      <div style={styles.root}>
        <Base
          style={{ ...styles.content, ...styles.image }}
        />
      </div>
    </Base>
  );
};

Media.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  aspectRatio: PropTypes.number,
  backgroundSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  rotation: PropTypes.number,
};

export default Media;
