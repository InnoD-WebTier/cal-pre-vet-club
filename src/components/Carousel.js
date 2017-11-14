import React, { Component } from 'react';
import '../styles/css/Carousel.css';
import 'font-awesome/css/font-awesome.min.css';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    index = (index - 1 + this.props.slides.length) % this.props.slides.length;
    this.goToSlide(index)
  }

  goToNextSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    index = (index + 1) % this.props.slides.length;
    this.goToSlide(index)
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="carousel">
          <a href="#"
             className="carousel__arrow carousel__arrow--left"
             onClick={e => this.goToPrevSlide(e)}
          >
            <span className="fa fa-angle-left fa-3x" />
          </a>

          <ul className="carousel__slides">
            {this.props.slides.map((slide, index) =>
              <li
                className={
                  index === this.state.activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
                }
                key={index}
              >
                <img src={slide} alt="" />
              </li>
            )}
          </ul>

          <a href="#"
             className="carousel__arrow carousel__arrow--right"
             onClick={e => this.goToNextSlide(e)}
          >
            <span className="fa fa-angle-right fa-3x" />
          </a>

          <ul className="carousel__indicators">
            {this.props.slides.map((slide, index) =>
              <li key={index}>
                <a
                  className={
                    index === this.state.activeIndex
                      ? "carousel__indicator carousel__indicator--active"
                      : "carousel__indicator"
                  }
                  onClick={e => this.goToSlide(index)}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  slides: ["https://masonchanscott.files.wordpress.com/2017/01/nye_nyc-25.jpg",
           "https://masonchanscott.files.wordpress.com/2017/01/nye_nyc-20.jpg",
           "https://masonchanscott.files.wordpress.com/2017/01/nye_nyc-34.jpg",
           "https://masonchanscott.files.wordpress.com/2017/01/nye_nyc-45.jpg"]
}

export default Carousel;
