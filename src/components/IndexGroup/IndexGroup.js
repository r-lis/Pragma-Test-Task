import PropTypes from 'prop-types';
import IndexItem from '../IndexItem';
import './IndexGroup.css';

const IndexGroup = (props) => {
  const { name, id, items } = props;

  if (!items.length) return null;

  return (
    <div className={`index-group ${id}`}>
      <div className='index-group__name'>
        <p>{name}</p>
      </div>
      <div className='index-items__container'>
        {items.map((item) => (
          <IndexItem key={item.name} name={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

IndexGroup.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

IndexGroup.defaultProps = {
  name: 'Group Name',
  items: [],
};

export default IndexGroup;
