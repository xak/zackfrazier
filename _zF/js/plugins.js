
// remap jQuery to $
(function($){

	/*
	 * $.getCSS('foo.css',['bar.css','print']);
	 */
	$.getCSS = function(){
		if(!arguments[0]) { return;	}
		$.each(arguments, function() {
			var arg = this,
				isArray = $.isArray(arg),
				link = document.createElement('link'), 
				href = isArray ? arg[0] : arg,
				media = isArray && arg.length > 1 ? arg[1] : null;
			link.setAttribute('href', href)
			link.setAttribute('rel','stylesheet');
			if(media){link.setAttribute('media',media);}
			document.getElementsByTagName('head')[0].appendChild(link)
		});
	}
	
	jQuery.fn.extend({

		/*
		* $(document).queryParam("foo") || $('script[src*=plugins]').queryParam("v");
		* 	supports SRC, HREF, VALUE, window.location
		*/ 
		queryParam: function(pname){
			var query, $this = $(this), p = pname = escape(unescape(pname));
			//return null if no elem exists | use first elem if multiple
			if(!$this.length && $this.attr('nodeName')!=='#document') { return null; } else if ($this.length > 1) { $this = $this.eq(0) }
			//test src (img, js), href (link, a), value (param), otherwise return location.search
			query = $this.attr('src') ? $this.attr('src') : $this.attr('href') ? $this.attr('href') : $this.attr('value') ? '?' + $this.attr('value') : window.location.search;
			var	regex = new RegExp("[?&]" + p + "(?:=([^&]*))?","i"),
				match = regex.exec(query ? query : window.location.search);
			return match !== null ? match[1] : null;
		}
	
	
	});


 



})(window.jQuery);



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};



// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


