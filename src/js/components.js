/** @jsx React.DOM */
var React = require('react');

var SatisfactionGuarantee = React.createClass({
  render: function() {
    return (
			<div id="sg">
			  <span role="presentation" aria-hidden="true">g</span>
				<strong>Satisfaction Guarantee</strong>
			</div>
    );
  }
});
var Lyric = React.createClass({
  render: function() {
    return (
			<div id="lyric">
				"{ this.props.verse }" 
				— 
			  { this.props.artist }
			</div>
    );
  }
});

React.render(<SatisfactionGuarantee/>, document.getElementById('badge'));

console.log('Follow the dev of this site at https://github.com/xak/zackfrazier');

Parse.Cloud.run('lyric', { }, {
  success: function(data) { 
    React.render(
    	<Lyric verse={ data.verse } artist={ data.artist } song={ data.song } />, 
    	document.getElementById('banner')
    );
  },
  error: function(error) {
    console.log('nope');
  }
});