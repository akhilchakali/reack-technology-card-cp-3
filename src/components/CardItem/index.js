// Write your code here.
const CardItem = props => {
  const {each} = props
  const {title, description, imgUrl, className} = each
  return (
    <li>
      <img src={imgUrl} alt={className} />
      <p>{title}</p>
      <p>{description}</p>
    </li>
  )
}
export default CardItem
