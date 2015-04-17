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


var SpotifyLink = React.createClass({
  render: function() {
    return (
      <a className="spotify" href={this.props.url}>
        {this.props.title}
      </a>
    )
  }
});


var Lyric = React.createClass({

  render: function() {
    return (
      <div id="lyric">
        <SpotifyLink url={ this.props.data.spotifyURI } title={ this.props.data.song } />
        <p>
          <span className="verse">
            { this.props.data.verse }
          </span>
          <span className="artist">
            { this.props.data.artist }, "{ this.props.data.song }"
          </span>        
        </p>
      </div>
    );
  }
});

React.render(<SatisfactionGuarantee/>, document.getElementById('badge'));

console.log('Follow the dev of this site at https://github.com/xak/zackfrazier');

Parse.Cloud.run('lyric', { }, {
  success: function(data) { 
    React.render(
    	<Lyric data={data} />, 
    	document.getElementById('banner')
    );
  },
  error: function(error) {
    //console.log('nope');
  }
});