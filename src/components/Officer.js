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
            <p className="body__title">{this.props.officer.name} - {this.props.officer.position}</p>
            <p className="body__sub-title">{this.props.officer.year} - {this.props.officer.major}</p>
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
