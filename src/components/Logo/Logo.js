import PropTypes from 'prop-types';
import './Logo.css';

const Logo = (props) => {
  const { text, imageLink, className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      {imageLink ? <img src={imageLink} alt='' /> : text}
    </div>
  );
};

Logo.propTypes = {
  text: PropTypes.string,
  imageLink: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Logo.defaultProps = {
  text: 'Logotype',
  imageLink: null,
  className: 'logo',
  onClick: () => null,
};

export default Logo;
