
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hey there!");
});

Parse.Cloud.define("lyric", function(request, response) {
  var query = new Parse.Query("Lyrics");
	//query.equalTo('featured', true)
	query.exists('verse')
  query.find({
    success: function(results) {
    	var total = results.length;
    	function rand() {
    		return Math.floor((Math.random() * total));
    	}  
      response.success(results[rand()].attributes);
    },
    error: function() {
      response.error("lookup failed");
    }
  });
});


Parse.Cloud.define("gifs", function(request, response) {
  var query = new Parse.Query("Gifs");
	//query.equalTo('featured', true)
	query.exists('filePath')
  query.find({
    success: function(results) {
    	var total = results.length;
    	function rand() {
    		return Math.floor((Math.random() * total));
    	}  
      response.success(results[rand()].attributes);
    },
    error: function() {
      response.error("lookup failed");
    }
  });
});