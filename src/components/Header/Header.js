import Logo from '../Logo';
import Button from '../shared/Button';
import './Header.css';

const Header = () => {
  return (
    <header className='app__header'>
      <div className='header__upper-row'>
        <div className='logo__container'>
          <Logo text={'Logotype'} />
        </div>
        <div className='button__container'>
          <Button text={'Connect wallet'} />
        </div>
      </div>
      <div className='header__lower-row'>
        <h1>All Indeces</h1>
      </div>
    </header>
  );
};

export default Header;
