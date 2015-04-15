/** @jsx React.DOM */
var React = require('react');

var SatisfactionGuarantee = React.createClass({
  render: function() {
    return (
			<div id="sg">
				<strong>Satisfaction Guarantee</strong>
			</div>
    );
  }
});

React.render(<SatisfactionGuarantee/>, document.getElementById('badge'));