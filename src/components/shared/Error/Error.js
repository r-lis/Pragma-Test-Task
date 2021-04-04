import PropTypes from 'prop-types';
import './Error.css';

const Error = (props) => {
  const { message, className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span>{message}</span>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Error.defaultProps = {
  message: 'Error!',
  className: 'error',
  onClick: () => null,
};

export default Error;
