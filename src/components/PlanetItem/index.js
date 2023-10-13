import './index.css'

const PlanetItem = ({planetDetails}) => {
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="container" data-testid="planets">
      <img src={imageUrl} alt={`planet ${name}`} className="pic" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem

/* import './index.css'

const PlanetItem = ({planetDetails}) => {
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="container">
      <img src={imageUrl} alt={`planet ${name}`} className="pic" />
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}

export default PlanetItem
*/
