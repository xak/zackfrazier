/** @jsx React.DOM */
var React = require('react');
React.initializeTouchEvents(true)

var classnames = require('classnames');

var SatisfactionGuarantee = React.createClass({
  getDefaultProps:function(){
    return {
      animUrl: ''
    }
  },
  getInitialState:function(){
    return {
      visible: false,
      mask: true
    }
  },
  handleClick:function(){
    toggleAnim();
    this.toggleMask();
  },
  toggleMask:function(){
    this.setState({ 'mask': !this.state.mask })
  },
  render: function() {
    var classes = classnames({
      'visible': this.state.visible,
      'fadeInLeft': this.state.visible,
      'nomask': !this.state.mask
    });
    var styles = {
      //backgroundColor: 'transparent',
      backgroundImage: 'url(' + this.props.animUrl + ')'
    };
    return (
			<div id="sg" className={classes} style={styles} onClick={this.handleClick} onTouchEnd={this.handleClick}>
			  <div role="presentation" aria-hidden="true" />
				<strong>Satisfaction Guarantee</strong>
			</div>
    );
  }
});

var Scrim = React.createClass({
  getDefaultProps:function(){
    return {
      animUrl: '',
      nextAnimUrl: ''
    }
  },
  getInitialState:function(){
    return {
      visible: false,
      showAnim: false
    }
  },
  toggleAnim:function(){
		if (!this.state.showAnim && this.props.nextAnimUrl) {
  		this.setProps({ 'animUrl': this.props.nextAnimUrl });
		}		
    this.setState({ 'showAnim': !this.state.showAnim })
  },
  render: function() {
    return (
			<div>
        <ColorPanel visible={this.state.visible && !this.state.showAnim} />
        <AnimPanel animUrl={this.props.animUrl} visible={this.state.showAnim} />        
			</div>
    );
  }
});

var ColorPanel = React.createClass({
  render: function() {
    var classes = classnames({
      'panel': true,
      'visible': this.props.visible
    });
    return (
      <div id="color" className={classes}>
      </div>
    )
  }
});
var AnimPanel = React.createClass({
  render: function() {
    var styles = {
      backgroundColor: 'transparent',
      backgroundImage: 'url(' + this.props.animUrl + ')'
    };
    var classes = classnames({
      'panel': true,
      'visible': this.props.visible
    });
    return (
      <div id="anim" className={classes} style={styles}>
      </div>
    )
  }
});




function rand(total) {
  return Math.floor((Math.random() * total));
}
var sg = React.render(<SatisfactionGuarantee/>, document.getElementById('badge'));
var scrim = React.render(<Scrim />, document.getElementById('scrim'));
var gifs;
Parse.Cloud.run('gifs', { }, {
  success: function(data) { 
    gifs = data;
    var filePath = gifs[rand(gifs.length)].attributes.filePath;
    scrim.setProps({ 'animUrl': filePath })
    sg.setProps({ 'animUrl': filePath })
    setTimeout(function () {
       sg.setState({ 'visible' : true });
    },3000)
  },
  error: function(error) { 
  }
});

setTimeout(function () {
	scrim.setState({ 'visible': true })
},1000)

function toggleAnim() {
  var filePath = gifs[rand(gifs.length)].attributes.filePath;
  scrim.setProps({ 'nextAnimUrl': filePath })
  sg.setProps({ 'animUrl': filePath })
  scrim.toggleAnim();
}



