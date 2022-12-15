import './styles.css'
import pinterestIcon from '../../src/assets/pinterest-icon.svg'

const PinterestLogo = () => {
  return (
    <a href="https://www.pinterest.com">
      <img id="pinterest-icon" src={pinterestIcon} alt="" />
    </a>
  )
}

export default PinterestLogo;