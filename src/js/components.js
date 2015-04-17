/** @jsx React.DOM */
var React = require('react');

var SatisfactionGuarantee = React.createClass({
  getInitialState:function(){
      return {
          visible: false
      }
  },
  render: function() {
    return (
			<div id="sg" className={this.state.visible ? 'show' : ''}>
			  <span role="presentation" aria-hidden="true">g</span>
				<strong>Satisfaction Guarantee</strong>
			</div>
    );
  }
});
var SpotifyLink = React.createClass({
  render: function() {
    return (
      <a className="spotify" href={this.props.url}>
        {this.props.title}
      </a>
    )
  }
});
var Verse = React.createClass({
  render: function() {
    return (
      <p>
        <span className="verse">
          { this.props.text }
        </span>
        <span className="artist">
          { this.props.artist }, "{ this.props.title }"
        </span>        
      </p>
    )
  }
});

var Lyric = React.createClass({
  getInitialState:function(){
      return {
        visible: false
      }
  },
  getDefaultProps: function() {
    return {
      link: '',
      title: '',
      verse: '',
      artist: ''
    };
  },
  update: function(data) {
    this.setProps(data);
    this.setState({ 'visible': true });
  },
  render: function() {
    return (
      <div id="lyric" className={this.state.visible ? 'show' : ''}>
        <SpotifyLink url={ this.props.link } title={ this.props.title } />
        <Verse text={ this.props.verse } artist={ this.props.artist } title={ this.props.title } />
      </div>
    );
  }
});

console.log('Oh, hey! Thanks for stopping by. Really appreciate it!');

var sg = React.render(<SatisfactionGuarantee/>, document.getElementById('badge'));
setTimeout(function() {
  sg.setState({ 'visible' : true });
},1000);

var lyric = React.render(<Lyric />, document.getElementById('banner'));
Parse.Cloud.run('lyric', { }, {
  success: function(data) { 

    setTimeout(function() {
      lyric.update({
        'link': data.spotifyURI,
        'title': data.song,
        'verse': data.verse,
        'artist': data.artist
      })
    },2500);



  },
  error: function(error) {
    //console.log('nope');
  }
});

