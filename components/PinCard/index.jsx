import arrowIcon from '../../src/assets/arrow-interface-send-svgrepo-com.svg';
import dotsIcon from '../../src/assets/three-small-dots-svgrepo-com.svg';
import './styles.css';

const PinCard = ( { title, image, description } ) => {
  return (
    <article className="card">
      <div className="card-image">
        <div className="card-top">
          <h4>{title}</h4>
          <button className="card-btn">Guardar</button>
        </div>
        <img className="image" src={image} alt={description} />
        <div className="card-bottom">
          <img className="icon-card" src={arrowIcon} alt="" />
          <img className="icon-card" src={dotsIcon} alt="" />
        </div>
      </div>
      <p className="card-p">{description}</p>
    </article>
  )
}

export default PinCard;