import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/opacity.css';
// https://codeconqueror.com/blog/image-optimization-with-next-js

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image = props => {
  const { src, srcSet, alt, lazy, className, ...rest } = props;

  const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx('image', classes.root, className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        width={'100%'}
        height={'100%'}
        {...rest}
      />
    );
  }

  return (
    <img
      className={clsx('image', classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...rest}
    />
  );
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
};

Image.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  srcSet: PropTypes.string,
  /**
   * Image title
   */
  alt: PropTypes.string,
  /**
   * Should lazy load the image
   */
  lazy: PropTypes.bool,
};

export default Image;
