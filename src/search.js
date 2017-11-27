// import React, { Component } from 'react';
//
//   class Search extends Component {
//     constructor(props) {
//       super(props);
//
//       this.state = {
//         searchString: ''
//       }
//     }
//
//     _handleChange(e) {
//       this.setState({
//         searchString: e.target.value
//       });
//     }
//
//     render() {
//       return (
//           <div className="search">
//         				<input type="text" value={this.state.searchString} onChange={this._handleChange.bind(this)} />
//         				<ul>
//               			{ Libraries.map(function(l){
//               				return <li>{l.name} <a href={l.url}>{l.url}</a></li>
//               			}) }
//         				</ul>
//         	</div>
//       );
//     }
//   }
//
//   export default Search;
