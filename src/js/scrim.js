/** @jsx React.DOM */
var React = require('react');
var classnames = require('classnames');

var Scrim = React.createClass({
  getInitialState:function(){
    return {
      visible: false,
      showGifs: false,
      background: ''
    }
  },
  getStyle: function () {
    var styles = {
      backgroundColor: 'transparent',
      backgroundImage: 'url(' + this.state.background + ')'
    };
    return styles;
  },
  render: function() {
    var classes = classnames({
      'panel': true,
      'visible': this.state.visible,
      'gifs': this.state.showGifs
    });
    return (
			<div className={classes} id={this.props.id} style={this.getStyle()} />
    );
  }
});

var scrim = React.render(<Scrim id="color" />, document.getElementById('scrim'));
setTimeout(function () {
	scrim.setState({ 'visible': true })
},1500)

/*

Parse.Cloud.run('gifs', { }, {
  success: function(data) { 
    scrim.setState({ 'background': data.filePath, 'showGifs': true })
  },
  error: function(error) {
  
  }
});

*/
