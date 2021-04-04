import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { text, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Button',
  className: 'button',
  onClick: () => null,
};

export default Button;
