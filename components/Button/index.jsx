import './styles.css';

const Button = ({ text, isActive = false, isAnchor = false }) => {
  const activeClass = isActive ? 'active' : '';
  return (
    <>
    {isAnchor && <a className={`nav-button ${activeClass}`} href="">{text}</a>}
    {!isAnchor && <button className={`nav-button ${activeClass}`}>{text}</button>}
    </>
  )
}

export default Button;