import './index.css'

const PlantItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div>
      <img src={imageUrl} alt={name} className="pic" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}
export default PlantItem
