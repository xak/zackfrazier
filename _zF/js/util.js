/* Author: zack Frazier.

*/
jQuery.noConflict();
(function($){
	var _ns = 'zF',
		_ua = navigator.userAgent,
		_browserVersion = parseInt($.browser.version, 10),
		$html = $('html'),
		_stylePath = 'css/',
		_ddBelated = 'js/dd_belatedpng.js',
		_pngFixElems = '.pngfix_';
	function Util() {
		this.isIE = !$.support.htmlSerialize;
		this.isIE6 = this.isIE && _browserVersion === 6;
		this.isIPhone = _ua.match(/iPhone/i) || _ua.match(/iPod/i) ? true : false;
		this.isAndroid = _ua.match(/Android/i) ? true : false;
		this.isMobile = this.isAndroid || this.isIPhone;
		this.isIPad = _ua.match(/iPad/i) ? true : false;
		this.supportsAudio = !!document.createElement('audio').canPlayType;
		this.supportsVideo = !!document.createElement('video').canPlayType;
		//paths
		this.filePath = (function() {
			/* TODO: this should be more fool-proof without a hard-coded reference (RegEx it) */
			var path = $('link[href*='+_stylePath+']').eq(0).attr('href');
			return path.substring(0,path.indexOf('css'));
		})();
		this.basePath = this.filePath.replace('_files/','');
		this.addBasePath = function(args) {
				if(!args) { return; }
				return !$.isArray(args) ? this.basePath + args : (function(files,base) {
							var arr = $.map(files, function(n,i) {
								return (base + n);
							});
							return arr;	
						})(args,this.basePath);
		};
		//dom
		this.wrap = function(id,type) {
				var isEl = typeof id !== 'string',
						$el = isEl ? $(id) : $('#' + id),
						id = isEl ? $el.attr('id') : id,
						newId = (!$el.attr('id') ? 'wrap':id) + '-' + Math.floor(Math.random() * 100000),
						$newEl = $(document.createElement('div')).addClass('content').append($(document.createElement('div')).attr('id',newId));
				$el
					.addClass('enhanced_')
					.wrapInner('<div class="altcontent visuallyhidden"></div>')
					.append($newEl);				
				return newId;	
		};
		//IE6 transparency
		this.pngFix = (function(selectors,needsTransHelp,basePath) {
			if(!needsTransHelp) { return; }
			var _apply = function() {
				DD_belatedPNG.fix(selectors);
			}
			if(typeof DD_belatedPNG === 'undefined') {
				var url = basePath + _ddBelated;
				/* TODO: this RegEx only matchs the h of http */
				$.getScript(_ddBelated.match(/^[\/|http]/) ? _ddBelated : basePath + _ddBelated ,_apply);
			} else {
				_apply();
			}
		})(_pngFixElems,this.isIE6,this.basePath);

		//tracking
		this.trackPage = function (url) {
			//log('url = ' + url);
			try { _gaq.push(['_trackPageview',url]); } catch(err) { log(err) }
			return;
		};			
		this.trackEvent = function (category, action, label) {
			//log('category = ' + category + ' | action = ' + action +  ' | label = ' + label);
			try { _gaq.push(['_trackEvent',category,action,label]); } catch(err) { log(err) }	
			return;
		};
		
		//cookies
		this.setCookie = function(name,value,days) {
			var expires = '', date = new Date();
			if (days) {
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = '; expires=' + date.toGMTString();
			}
			document.cookie = name+'='+value+expires+'; path=/';
		};
		this.readCookie = function(name) {
			var nameEQ = name + '=',
				ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1, c.length)
				}
				if (c.indexOf(nameEQ) == 0) {
					return c.substring(nameEQ.length, c.length)
				}
			}
			return null;
		};
		this.eraseCookie = function(name) {
			this.setCookie(name,'',-1);
		};
	}
	window[_ns] = new Util;
})(jQuery);