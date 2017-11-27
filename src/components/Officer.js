import React, { Component } from 'react';
import '../styles/css/Officers.css';


class Officer extends Component {
  render() {
    return (
      <div className="officer">
        <div className={"officer__img-container officer__img-container--" + this.props.ordering} ref="imgContainer">
          <img src={this.props.officer.url} alt="" />
        </div>
        <div className={"officer__body-container officer__body-container--" + this.props.ordering} ref="bodyContainer">
          <div className="body">
            <p className="body__title">
              <span className="body__name">{this.props.officer.name + " "}</span>
              &bull;
              <span className="body__position">{" " + this.props.officer.position}</span>
             </p>
            <p className="body__sub-title">
              <span className="body__year">{this.props.officer.year + " "}</span>
              &bull;
              <span>{" " + this.props.officer.major}</span>
            </p>
            <div className="body__text">
              {this.props.officer.bio}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Officer;
