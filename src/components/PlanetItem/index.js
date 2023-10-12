import './index.css'

const PlanetItem = ({planetDetails}) => {
  const {name, imageUrl, description} = planetDetails

  return (
    <div>
      <img src={imageUrl} alt={name} className="pic" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
