// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card_container`}>
      <div>
        <h1 className="card_heading">{title}</h1>
        <p className="card_discription">{description}</p>
        <img className="images" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
