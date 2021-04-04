import PropTypes from 'prop-types';
import './IndexItem.css';

const IndexItem = (props) => {
  const {
    name,
    ethPriceInWei,
    usdPriceInCents,
    usdCapitalization,
    percentageChange,
    onClick,
  } = props;

  const percentColor = () => {
    if (percentageChange < 0) return 'red';
    if (percentageChange > 0) return 'green';
    if (percentageChange === 0) return '';
  };

  return (
    <div className='index-item' onClick={onClick}>
      <div className='index-item__inner'>
        <span className='index-item__name'>{name}</span>
        <span className='index-item__usd-wei'>
          ${usdPriceInCents} / {ethPriceInWei} ETH
        </span>
        <div className='index-item__bottom'>
          <span className='index-item__usd-cap'>${usdCapitalization}</span>
          <span className={`index-item__percentage ${percentColor()}`}>
            {percentageChange > 0 ? `+${percentageChange}` : percentageChange}%
          </span>
        </div>
      </div>
    </div>
  );
};

IndexItem.propTypes = {
  name: PropTypes.string,
  ethPriceInWei: PropTypes.string,
  usdPriceInCents: PropTypes.number,
  usdCapitalization: PropTypes.string,
  percentageChange: PropTypes.number,
};

IndexItem.defaultProps = {
  name: 'Index',
  ethPriceInWei: '0.00',
  usdPriceInCents: 100,
  usdCapitalization: '2,456,235.00',
  percentageChange: 0,
  onClick: () => null,
};

export default IndexItem;
