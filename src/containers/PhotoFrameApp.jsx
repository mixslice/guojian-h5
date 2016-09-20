import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { PhotoFrame } from 'components';


const PhotoFrameApp = ({ localId, rotation, dispatch: _, ...props }) => (
  <PhotoFrame src={localId} rotation={rotation} {...props} />
);

PhotoFrameApp.propTypes = {
  localId: PropTypes.string.isRequired,
  rotation: PropTypes.number.isRequired,
  dispatch: PropTypes.any,
};

const mapStateToProps = ({
  photo: { localId, rotation } = {},
}) => ({
  localId,
  rotation,
});

export default connect(
  mapStateToProps
)(PhotoFrameApp);
