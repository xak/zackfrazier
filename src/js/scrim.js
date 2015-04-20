/** @jsx React.DOM */
var React = require('react');
var classnames = require('classnames');

var SatisfactionGuarantee = React.createClass({
  getDefaultProps:function(){
      return {
          backgroundUrl: ''
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
      'nomask': !this.state.mask
    });
    var styles = {
      //backgroundColor: 'transparent',
      backgroundImage: 'url(' + this.props.backgroundUrl + ')'
    };
    return (
			<div id="sg" className={classes} style={styles} onClick={this.handleClick}>
			  <div role="presentation" aria-hidden="true" />
				<strong>Satisfaction Guarantee</strong>
			</div>
    );
  }
});

var Scrim = React.createClass({
  getDefaultProps:function(){
    return {
      animUrl: 'http://38.media.tumblr.com/7f6c38418dadcc2851d17c859bbbdab5/tumblr_inline_nbk7zkS5FX1raprkq.gif'
    }
  },
  getInitialState:function(){
    return {
      visible: false,
      showAnim: false
    }
  },
  toggleAnim:function(){
    scrim.setState({ 'showAnim': !this.state.showAnim })
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

var AnimControl = React.createClass({
  getDefaultProps:function(){
    return {
      imageSrc: 'http://38.media.tumblr.com/7f6c38418dadcc2851d17c859bbbdab5/tumblr_inline_nbk7zkS5FX1raprkq.gif'
    }
  },
  handleClick:function () {
    toggleAnim();
  },
  render: function() {
    var styles = {
      backgroundColor: 'transparent',
      backgroundImage: 'url(' + this.props.imageSrc + ')'
    };
    var classes = classnames({
      'item': true,
      'visible': true
    });    
    return (
      <div className={classes} style={styles} onClick={this.handleClick}>
      </div>
    )
  }
});

var sg = React.render(<SatisfactionGuarantee/>, document.getElementById('badge'));
setTimeout(function() {
  //sg.setState({ 'visible' : true });
},0);

var scrim = React.render(<Scrim />, document.getElementById('scrim'));
var controls;
Parse.Cloud.run('gifs', { }, {
  success: function(data) { 
    scrim.setProps({ 'animUrl': data.filePath })
    setTimeout(function () {
      sg.setProps({ 'backgroundUrl': data.filePath })
      sg.setState({ 'visible' : true });
    },3000)
  //  controls = React.render(<AnimControl imageSrc={data.filePath} />, document.getElementById('scrimcontrols'));
  },
  error: function(error) { 
  }
});

setTimeout(function () {
	scrim.setState({ 'visible': true })
},1000)

function toggleAnim() {
  scrim.toggleAnim()
}



