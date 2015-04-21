/** @jsx React.DOM */
var React = require('react');
var classnames = require('classnames');
React.initializeTouchEvents(true);

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

function rand(total) {
  return Math.floor((Math.random() * total));
}
var lyric = React.render(<Lyric />, document.getElementById('banner'));
var lyrics;
Parse.Cloud.run('lyrics', { }, {
  success: function(results) { 
    lyrics = results;
    var item = lyrics[rand(lyrics.length)].attributes;
    var data = {
      'link': item.spotifyURI,
      'title': item.song,
      'verse': item.verse,
      'artist': item.artist
    }
    lyric.setProps(data)
    setTimeout(function() {
    	lyric.setState({ 'visible': true })
    },2500);
  },
  error: function(error) {

  }
});

/*
setInterval(function () {
  var item = lyrics[rand(lyrics.length)].attributes;
  var data = {
    'link': item.spotifyURI,
    'title': item.song,
    'verse': item.verse,
    'artist': item.artist
  }
  lyric.setState({ 'visible': false })
  lyric.update(data); 
},15000)
*/
