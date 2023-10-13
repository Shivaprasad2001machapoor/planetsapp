import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = ({planetsList}) => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <div>
      <h1 data-testid="main-heading" className="main-heading">
        PLANETS
      </h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem key={planet.id} planetDetails={planet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
/* import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = ({planetsList}) => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <div className="slider-container">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem key={planet.id} planetDetails={planet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
*/
