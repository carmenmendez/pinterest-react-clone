import PinterestLogo from '../PinterestLogo';
import Button from '../Button';
import SearchBar from '../SearchBar';
import Notification from '../Notification';
import Message from '../Message';
import Profile from '../Profile';
import './styles.css';

const NavBar = () => {
  return (
    <nav id="nav-bar-pinterest">
      <div className="nav-left">
        <PinterestLogo />
        <Button text='Inicio' isActive={true} isAnchor={true} />
        <Button text='Hoy' isAnchor={true} />
        <Button text='Crear' />
      </div>
      <SearchBar />
      <div className="nav-right">
        <Notification />
        <Message />
        <Profile />
      </div>
    </nav>
  )
}

export default NavBar;