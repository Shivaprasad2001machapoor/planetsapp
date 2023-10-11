import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        <div>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
