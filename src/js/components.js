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
        <div className="spotify" aria-hidden="true" role="presentation"/>
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


/*
var Lyric = React.createClass({
  render: function() {
    return (
			<a id="lyric" href={this.props.spotify}>
        <span class="verse">
          "{ this.props.verse }"
        </span>
        <br/> 
        — 
        <span class="artist">
          { this.props.artist }
        </span>        
			</a>
    );
  }
});

var Link = React.createClass({
  render: function() {
    return (
      <a href={ this.props.url }>

      </a>
    )
  }
});
*/

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