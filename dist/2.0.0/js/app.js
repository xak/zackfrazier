console.log('Follow the dev of this site at https://github.com/xak/zackfrazier');

/*
 * - smooth-scroll.js -
 * Licence MIT
 * Written by Gabriel Delépine
 * Version 1.0.1 (2013-11-08)
 * Requirement : No one, it is a framework-free fonction (ie : You do not need to include any other file in your page such as jQuery)
 * Fork-me in github : https://github.com/Yappli/smooth-scroll/
 * */
(function () // Code in a function to create an isolate scope
{
    var speed = 250,
        moving_frequency = 15,
        // Affects performance !
    height_fixed_header = 0,
        // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
    links = document.getElementsByTagName('a'),
        href;
    for (var i = 0; i < links.length; i++) {
        href = links[i].attributes.href === undefined ? null : links[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
            links[i].onclick = function () {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if (element = document.getElementById(href.substr(1))) {
                    var hop_count = speed / moving_frequency;
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin - height_fixed_header) / hop_count;

                    for (var i = 1; i <= hop_count; i++) {
                        (function () {
                            var hop_top_position = gap * i;
                            setTimeout(function () {
                                window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                            }, moving_frequency * i);
                        })();
                    }
                }

                return false;
            };
        }
    }

    var getScrollTopElement = function (e) {
        var top = 0;

        while (e.offsetParent != undefined && e.offsetParent != null) {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function () {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic3BlZWQiLCJtb3ZpbmdfZnJlcXVlbmN5IiwiaGVpZ2h0X2ZpeGVkX2hlYWRlciIsImxpbmtzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhyZWYiLCJpIiwibGVuZ3RoIiwiYXR0cmlidXRlcyIsInVuZGVmaW5lZCIsIm5vZGVWYWx1ZSIsInRvU3RyaW5nIiwic3Vic3RyIiwib25jbGljayIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhvcF9jb3VudCIsImdldFNjcm9sbFRvcERvY3VtZW50QXRCZWdpbiIsImdldFNjcm9sbFRvcERvY3VtZW50IiwiZ2FwIiwiZ2V0U2Nyb2xsVG9wRWxlbWVudCIsImhvcF90b3BfcG9zaXRpb24iLCJzZXRUaW1lb3V0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJlIiwidG9wIiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVFDLEdBQVIsQ0FBWSxtRUFBWjs7QUFFQTs7Ozs7Ozs7QUFRQSxDQUFDLFlBQVc7QUFDWjtBQUNJLFFBQUlDLFFBQVEsR0FBWjtBQUFBLFFBQ0lDLG1CQUFtQixFQUR2QjtBQUFBLFFBQzJCO0FBQ3ZCQywwQkFBc0IsQ0FGMUI7QUFBQSxRQUU2QjtBQUN6QkMsWUFBUUMsU0FBU0Msb0JBQVQsQ0FBOEIsR0FBOUIsQ0FIWjtBQUFBLFFBSUlDLElBSko7QUFLQSxTQUFJLElBQUlDLElBQUUsQ0FBVixFQUFhQSxJQUFFSixNQUFNSyxNQUFyQixFQUE2QkQsR0FBN0IsRUFDQTtBQUNJRCxlQUFRSCxNQUFNSSxDQUFOLEVBQVNFLFVBQVQsQ0FBb0JILElBQXBCLEtBQTZCSSxTQUE5QixHQUEyQyxJQUEzQyxHQUFrRFAsTUFBTUksQ0FBTixFQUFTRSxVQUFULENBQW9CSCxJQUFwQixDQUF5QkssU0FBekIsQ0FBbUNDLFFBQW5DLEVBQXpEO0FBQ0EsWUFBR04sU0FBUyxJQUFULElBQWlCQSxLQUFLRSxNQUFMLEdBQWMsQ0FBL0IsSUFBb0NGLEtBQUtPLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixLQUFxQixHQUE1RCxFQUNBO0FBQ0lWLGtCQUFNSSxDQUFOLEVBQVNPLE9BQVQsR0FBbUIsWUFDbkI7QUFDSSxvQkFBSUMsT0FBSjtBQUNBLG9CQUFJVCxPQUFPLEtBQUtHLFVBQUwsQ0FBZ0JILElBQWhCLENBQXFCSyxTQUFyQixDQUErQkMsUUFBL0IsRUFBWDtBQUNBLG9CQUFHRyxVQUFVWCxTQUFTWSxjQUFULENBQXdCVixLQUFLTyxNQUFMLENBQVksQ0FBWixDQUF4QixDQUFiLEVBQ0E7QUFDSSx3QkFBSUksWUFBWWpCLFFBQU1DLGdCQUF0QjtBQUNBLHdCQUFJaUIsOEJBQThCQyxzQkFBbEM7QUFDQSx3QkFBSUMsTUFBTSxDQUFDQyxvQkFBb0JOLE9BQXBCLElBQStCRywyQkFBL0IsR0FBNkRoQixtQkFBOUQsSUFBcUZlLFNBQS9GOztBQUVBLHlCQUFJLElBQUlWLElBQUksQ0FBWixFQUFlQSxLQUFLVSxTQUFwQixFQUErQlYsR0FBL0IsRUFDQTtBQUNJLHlCQUFDLFlBQ0Q7QUFDSSxnQ0FBSWUsbUJBQW1CRixNQUFJYixDQUEzQjtBQUNBZ0IsdUNBQVcsWUFBVTtBQUFHQyx1Q0FBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQkgsbUJBQW1CSiwyQkFBdEM7QUFBcUUsNkJBQTdGLEVBQStGakIsbUJBQWlCTSxDQUFoSDtBQUNILHlCQUpEO0FBS0g7QUFDSjs7QUFFRCx1QkFBTyxLQUFQO0FBQ0gsYUFyQkQ7QUFzQkg7QUFDSjs7QUFFRCxRQUFJYyxzQkFBdUIsVUFBVUssQ0FBVixFQUMzQjtBQUNJLFlBQUlDLE1BQU0sQ0FBVjs7QUFFQSxlQUFPRCxFQUFFRSxZQUFGLElBQWtCbEIsU0FBbEIsSUFBK0JnQixFQUFFRSxZQUFGLElBQWtCLElBQXhELEVBQ0E7QUFDSUQsbUJBQU9ELEVBQUVHLFNBQUYsSUFBZUgsRUFBRUksU0FBRixJQUFlLElBQWYsR0FBc0JKLEVBQUVJLFNBQXhCLEdBQW9DLENBQW5ELENBQVA7QUFDQUosZ0JBQUlBLEVBQUVFLFlBQU47QUFDSDs7QUFFRCxlQUFPRCxHQUFQO0FBQ0gsS0FYRDs7QUFhQSxRQUFJUix1QkFBdUIsWUFDM0I7QUFDSSxlQUFPZixTQUFTMkIsZUFBVCxDQUF5QkMsU0FBekIsR0FBcUM1QixTQUFTNkIsSUFBVCxDQUFjRCxTQUExRDtBQUNILEtBSEQ7QUFJSCxDQXRERCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnRm9sbG93IHRoZSBkZXYgb2YgdGhpcyBzaXRlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS94YWsvemFja2ZyYXppZXInKTtcblxuLypcbiAqIC0gc21vb3RoLXNjcm9sbC5qcyAtXG4gKiBMaWNlbmNlIE1JVFxuICogV3JpdHRlbiBieSBHYWJyaWVsIERlbMOpcGluZVxuICogVmVyc2lvbiAxLjAuMSAoMjAxMy0xMS0wOClcbiAqIFJlcXVpcmVtZW50IDogTm8gb25lLCBpdCBpcyBhIGZyYW1ld29yay1mcmVlIGZvbmN0aW9uIChpZSA6IFlvdSBkbyBub3QgbmVlZCB0byBpbmNsdWRlIGFueSBvdGhlciBmaWxlIGluIHlvdXIgcGFnZSBzdWNoIGFzIGpRdWVyeSlcbiAqIEZvcmstbWUgaW4gZ2l0aHViIDogaHR0cHM6Ly9naXRodWIuY29tL1lhcHBsaS9zbW9vdGgtc2Nyb2xsL1xuICogKi9cbihmdW5jdGlvbigpIC8vIENvZGUgaW4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gaXNvbGF0ZSBzY29wZVxue1xuICAgIHZhciBzcGVlZCA9IDI1MCxcbiAgICAgICAgbW92aW5nX2ZyZXF1ZW5jeSA9IDE1LCAvLyBBZmZlY3RzIHBlcmZvcm1hbmNlICFcbiAgICAgICAgaGVpZ2h0X2ZpeGVkX2hlYWRlciA9IDAsIC8vIEZvciBsYXlvdXQgd2l0aCBoZWFkZXIgd2l0aCBwb3NpdGlvbjpmaXhlZC4gV3JpdGUgaGVyZSB0aGUgaGVpZ2h0IG9mIHlvdXIgaGVhZGVyIGZvciB5b3VyIGFuY2hvciBkb24ndCBiZSBoaWRlbiBiZWhpbmRcbiAgICAgICAgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpLFxuICAgICAgICBocmVmO1xuICAgIGZvcih2YXIgaT0wOyBpPGxpbmtzLmxlbmd0aDsgaSsrKVxuICAgIHsgICBcbiAgICAgICAgaHJlZiA9IChsaW5rc1tpXS5hdHRyaWJ1dGVzLmhyZWYgPT09IHVuZGVmaW5lZCkgPyBudWxsIDogbGlua3NbaV0uYXR0cmlidXRlcy5ocmVmLm5vZGVWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICBpZihocmVmICE9PSBudWxsICYmIGhyZWYubGVuZ3RoID4gMSAmJiBocmVmLnN1YnN0cigwLCAxKSA9PSAnIycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpbmtzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGhyZWYgPSB0aGlzLmF0dHJpYnV0ZXMuaHJlZi5ub2RlVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHIoMSkpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvcF9jb3VudCA9IHNwZWVkL21vdmluZ19mcmVxdWVuY3lcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdldFNjcm9sbFRvcERvY3VtZW50QXRCZWdpbiA9IGdldFNjcm9sbFRvcERvY3VtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnYXAgPSAoZ2V0U2Nyb2xsVG9wRWxlbWVudChlbGVtZW50KSAtIGdldFNjcm9sbFRvcERvY3VtZW50QXRCZWdpbiAtIGhlaWdodF9maXhlZF9oZWFkZXIpIC8gaG9wX2NvdW50O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSBob3BfY291bnQ7IGkrKylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG9wX3RvcF9wb3NpdGlvbiA9IGdhcCppO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgIHdpbmRvdy5zY3JvbGxUbygwLCBob3BfdG9wX3Bvc2l0aW9uICsgZ2V0U2Nyb2xsVG9wRG9jdW1lbnRBdEJlZ2luKTsgfSwgbW92aW5nX2ZyZXF1ZW5jeSppKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB2YXIgZ2V0U2Nyb2xsVG9wRWxlbWVudCA9ICBmdW5jdGlvbiAoZSlcbiAgICB7XG4gICAgICAgIHZhciB0b3AgPSAwO1xuXG4gICAgICAgIHdoaWxlIChlLm9mZnNldFBhcmVudCAhPSB1bmRlZmluZWQgJiYgZS5vZmZzZXRQYXJlbnQgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdG9wICs9IGUub2Zmc2V0VG9wICsgKGUuY2xpZW50VG9wICE9IG51bGwgPyBlLmNsaWVudFRvcCA6IDApO1xuICAgICAgICAgICAgZSA9IGUub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdG9wO1xuICAgIH07XG4gICAgXG4gICAgdmFyIGdldFNjcm9sbFRvcERvY3VtZW50ID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICB9O1xufSkoKTtcblxuXG5cbiJdfQ==
