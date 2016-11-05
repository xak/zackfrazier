/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-cssmask !*/
!function (e, n, t) {
  function r(e) {
    var n = g.className,
        t = Modernizr._config.classPrefix || "";if (Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");n = n.replace(r, "$1" + t + "js$2");
    }Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), g.className = n);
  }function o(e, n) {
    return typeof e === n;
  }function i() {
    var e, n, t, r, i, s, a;for (var f in C) {
      if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());for (r = o(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), h.push((r ? "" : "no-") + a.join("-"));
    }
  }function s(e, n) {
    return !!~("" + e).indexOf(n);
  }function a(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }function l(e, n, t) {
    var r;for (var i in e) if (e[i] in n) return t === !1 ? e[i] : (r = n[e[i]], o(r, "function") ? f(r, t || n) : r);return !1;
  }function u(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function d() {
    var e = n.body;return e || (e = b("body"), e.fake = !0), e;
  }function c(e, n, t, r) {
    var o,
        i,
        s,
        a,
        f = "modernizr",
        l = b("div"),
        u = d();if (parseInt(t, 10)) for (; t--;) s = b("div"), s.id = r ? r[t] : f + (t + 1), l.appendChild(s);return o = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), l.id = f, (u.fake ? u : l).innerHTML += o, u.appendChild(l), u.fake && (u.style.background = "", u.style.overflow = "hidden", a = g.style.overflow, g.style.overflow = "hidden", g.appendChild(u)), i = n(l, e), u.fake ? (u.parentNode.removeChild(u), g.style.overflow = a, g.offsetHeight) : l.parentNode.removeChild(l), !!i;
  }function p(n, r) {
    var o = n.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) if (e.CSS.supports(u(n[o]), r)) return !0;return !1;
    }if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + u(n[o]) + ":" + r + ")");return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }return t;
  }function m(e, n, r, i) {
    function f() {
      u && (delete E.style, delete E.modElem);
    }if (i = o(i, "undefined") ? !1 : i, !o(r, "undefined")) {
      var l = p(e, r);if (!o(l, "undefined")) return l;
    }var u, d, c, m, v;for (E.style || (u = !0, E.modElem = b("modernizr"), E.style = E.modElem.style), c = e.length, d = 0; c > d; d++) if (m = e[d], v = E.style[m], s(m, "-") && (m = a(m)), E.style[m] !== t) {
      if (i || o(r, "undefined")) return f(), "pfx" == n ? m : !0;try {
        E.style[m] = r;
      } catch (y) {}if (E.style[m] != v) return f(), "pfx" == n ? m : !0;
    }return f(), !1;
  }function v(e, n, t, r, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + S.join(s + " ") + s).split(" ");return o(n, "string") || o(n, "undefined") ? m(a, n, r, i) : (a = (e + " " + x.join(s + " ") + s).split(" "), l(a, n, t));
  }function y(e, n, r) {
    return v(e, t, t, n, r);
  }var h = [],
      g = n.documentElement,
      C = [],
      _ = { _version: "3.0.0-alpha.3", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) {
      var t = this;setTimeout(function () {
        n(t[e]);
      }, 0);
    }, addTest: function (e, n, t) {
      C.push({ name: e, fn: n, options: t });
    }, addAsyncTest: function (e) {
      C.push({ name: null, fn: e });
    } },
      Modernizr = function () {};Modernizr.prototype = _, Modernizr = new Modernizr();var w = "Moz O ms Webkit",
      S = _._config.usePrefixes ? w.split(" ") : [];_._cssomPrefixes = S;var x = _._config.usePrefixes ? w.toLowerCase().split(" ") : [];_._domPrefixes = x;var b = function () {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : n.createElement.apply(n, arguments);
  },
      z = { elem: b("modernizr") };Modernizr._q.push(function () {
    delete z.elem;
  });var E = { style: z.elem.style };Modernizr._q.unshift(function () {
    delete E.style;
  }), _.testAllProps = v, _.testAllProps = y, Modernizr.addTest("cssmask", y("maskRepeat", "repeat-x", !0)), i(), r(h), delete _.addTest, delete _.addAsyncTest;for (var P = 0; P < Modernizr._q.length; P++) Modernizr._q[P]();e.Modernizr = Modernizr;
}(window, document);
console.log('Follow the dev of this site at https://github.com/xak/zackfrazier');

setTimeout(function () {
  //  var cls = document.getElementById('main').className
  //	document.getElementById('main').className = cls + ' ready';
}, 1500);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJlIiwibiIsInQiLCJyIiwiZyIsImNsYXNzTmFtZSIsIk1vZGVybml6ciIsIl9jb25maWciLCJjbGFzc1ByZWZpeCIsImVuYWJsZUpTQ2xhc3MiLCJSZWdFeHAiLCJyZXBsYWNlIiwiZW5hYmxlQ2xhc3NlcyIsImpvaW4iLCJvIiwiaSIsInMiLCJhIiwiZiIsIkMiLCJuYW1lIiwicHVzaCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImFsaWFzZXMiLCJsZW5ndGgiLCJmbiIsInNwbGl0IiwiQm9vbGVhbiIsImgiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsImwiLCJ1IiwiZCIsImJvZHkiLCJiIiwiZmFrZSIsImMiLCJwYXJzZUludCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm9mZnNldEhlaWdodCIsInAiLCJDU1MiLCJzdXBwb3J0cyIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsIm0iLCJFIiwibW9kRWxlbSIsInYiLCJ5IiwiY2hhckF0Iiwic2xpY2UiLCJTIiwieCIsImRvY3VtZW50RWxlbWVudCIsIl8iLCJfdmVyc2lvbiIsInVzZVByZWZpeGVzIiwiX3EiLCJvbiIsInNldFRpbWVvdXQiLCJhZGRUZXN0IiwiYWRkQXN5bmNUZXN0IiwicHJvdG90eXBlIiwidyIsIl9jc3NvbVByZWZpeGVzIiwiX2RvbVByZWZpeGVzIiwiY3JlYXRlRWxlbWVudCIsInoiLCJlbGVtIiwidW5zaGlmdCIsInRlc3RBbGxQcm9wcyIsIlAiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDLFdBQVNDLENBQVQsQ0FBV0gsQ0FB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LEVBQXNDN0UsVUFBVStELEVBQVYsQ0FBYWMsQ0FBYixJQUFrQm5GLEVBQUVNLFNBQUYsR0FBWUEsU0FBWjtBQUFzQixDQUFueUgsQ0FBb3lIOEUsTUFBcHlILEVBQTJ5SEMsUUFBM3lILENBQUQ7QUFDQUMsUUFBUUMsR0FBUixDQUFZLG1FQUFaOztBQUVBaEIsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQyxDQUhELEVBR0UsSUFIRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbW9kZXJuaXpyIDMuMC4wLWFscGhhLjMgKEN1c3RvbSBCdWlsZCkgfCBNSVQgKlxuICogaHR0cDovL3YzLm1vZGVybml6ci5jb20vZG93bmxvYWQvIy1jc3NtYXNrICEqL1xuIWZ1bmN0aW9uKGUsbix0KXtmdW5jdGlvbiByKGUpe3ZhciBuPWcuY2xhc3NOYW1lLHQ9TW9kZXJuaXpyLl9jb25maWcuY2xhc3NQcmVmaXh8fFwiXCI7aWYoTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlSlNDbGFzcyl7dmFyIHI9bmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK3QrXCJuby1qcyhcXFxcc3wkKVwiKTtuPW4ucmVwbGFjZShyLFwiJDFcIit0K1wianMkMlwiKX1Nb2Rlcm5penIuX2NvbmZpZy5lbmFibGVDbGFzc2VzJiYobis9XCIgXCIrdCtlLmpvaW4oXCIgXCIrdCksZy5jbGFzc05hbWU9bil9ZnVuY3Rpb24gbyhlLG4pe3JldHVybiB0eXBlb2YgZT09PW59ZnVuY3Rpb24gaSgpe3ZhciBlLG4sdCxyLGkscyxhO2Zvcih2YXIgZiBpbiBDKXtpZihlPVtdLG49Q1tmXSxuLm5hbWUmJihlLnB1c2gobi5uYW1lLnRvTG93ZXJDYXNlKCkpLG4ub3B0aW9ucyYmbi5vcHRpb25zLmFsaWFzZXMmJm4ub3B0aW9ucy5hbGlhc2VzLmxlbmd0aCkpZm9yKHQ9MDt0PG4ub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDt0KyspZS5wdXNoKG4ub3B0aW9ucy5hbGlhc2VzW3RdLnRvTG93ZXJDYXNlKCkpO2ZvcihyPW8obi5mbixcImZ1bmN0aW9uXCIpP24uZm4oKTpuLmZuLGk9MDtpPGUubGVuZ3RoO2krKylzPWVbaV0sYT1zLnNwbGl0KFwiLlwiKSwxPT09YS5sZW5ndGg/TW9kZXJuaXpyW2FbMF1dPXI6KCFNb2Rlcm5penJbYVswXV18fE1vZGVybml6clthWzBdXWluc3RhbmNlb2YgQm9vbGVhbnx8KE1vZGVybml6clthWzBdXT1uZXcgQm9vbGVhbihNb2Rlcm5penJbYVswXV0pKSxNb2Rlcm5penJbYVswXV1bYVsxXV09ciksaC5wdXNoKChyP1wiXCI6XCJuby1cIikrYS5qb2luKFwiLVwiKSl9fWZ1bmN0aW9uIHMoZSxuKXtyZXR1cm4hIX4oXCJcIitlKS5pbmRleE9mKG4pfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGUucmVwbGFjZSgvKFthLXpdKS0oW2Etel0pL2csZnVuY3Rpb24oZSxuLHQpe3JldHVybiBuK3QudG9VcHBlckNhc2UoKX0pLnJlcGxhY2UoL14tLyxcIlwiKX1mdW5jdGlvbiBmKGUsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkobixhcmd1bWVudHMpfX1mdW5jdGlvbiBsKGUsbix0KXt2YXIgcjtmb3IodmFyIGkgaW4gZSlpZihlW2ldaW4gbilyZXR1cm4gdD09PSExP2VbaV06KHI9bltlW2ldXSxvKHIsXCJmdW5jdGlvblwiKT9mKHIsdHx8bik6cik7cmV0dXJuITF9ZnVuY3Rpb24gdShlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oZSxuKXtyZXR1cm5cIi1cIituLnRvTG93ZXJDYXNlKCl9KS5yZXBsYWNlKC9ebXMtLyxcIi1tcy1cIil9ZnVuY3Rpb24gZCgpe3ZhciBlPW4uYm9keTtyZXR1cm4gZXx8KGU9YihcImJvZHlcIiksZS5mYWtlPSEwKSxlfWZ1bmN0aW9uIGMoZSxuLHQscil7dmFyIG8saSxzLGEsZj1cIm1vZGVybml6clwiLGw9YihcImRpdlwiKSx1PWQoKTtpZihwYXJzZUludCh0LDEwKSlmb3IoO3QtLTspcz1iKFwiZGl2XCIpLHMuaWQ9cj9yW3RdOmYrKHQrMSksbC5hcHBlbmRDaGlsZChzKTtyZXR1cm4gbz1bXCImIzE3MztcIiwnPHN0eWxlIGlkPVwicycsZiwnXCI+JyxlLFwiPC9zdHlsZT5cIl0uam9pbihcIlwiKSxsLmlkPWYsKHUuZmFrZT91OmwpLmlubmVySFRNTCs9byx1LmFwcGVuZENoaWxkKGwpLHUuZmFrZSYmKHUuc3R5bGUuYmFja2dyb3VuZD1cIlwiLHUuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixhPWcuc3R5bGUub3ZlcmZsb3csZy5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGcuYXBwZW5kQ2hpbGQodSkpLGk9bihsLGUpLHUuZmFrZT8odS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHUpLGcuc3R5bGUub3ZlcmZsb3c9YSxnLm9mZnNldEhlaWdodCk6bC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpLCEhaX1mdW5jdGlvbiBwKG4scil7dmFyIG89bi5sZW5ndGg7aWYoXCJDU1NcImluIGUmJlwic3VwcG9ydHNcImluIGUuQ1NTKXtmb3IoO28tLTspaWYoZS5DU1Muc3VwcG9ydHModShuW29dKSxyKSlyZXR1cm4hMDtyZXR1cm4hMX1pZihcIkNTU1N1cHBvcnRzUnVsZVwiaW4gZSl7Zm9yKHZhciBpPVtdO28tLTspaS5wdXNoKFwiKFwiK3UobltvXSkrXCI6XCIrcitcIilcIik7cmV0dXJuIGk9aS5qb2luKFwiIG9yIFwiKSxjKFwiQHN1cHBvcnRzIChcIitpK1wiKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKGUpe3JldHVyblwiYWJzb2x1dGVcIj09Z2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLnBvc2l0aW9ufSl9cmV0dXJuIHR9ZnVuY3Rpb24gbShlLG4scixpKXtmdW5jdGlvbiBmKCl7dSYmKGRlbGV0ZSBFLnN0eWxlLGRlbGV0ZSBFLm1vZEVsZW0pfWlmKGk9byhpLFwidW5kZWZpbmVkXCIpPyExOmksIW8ocixcInVuZGVmaW5lZFwiKSl7dmFyIGw9cChlLHIpO2lmKCFvKGwsXCJ1bmRlZmluZWRcIikpcmV0dXJuIGx9dmFyIHUsZCxjLG0sdjtmb3IoRS5zdHlsZXx8KHU9ITAsRS5tb2RFbGVtPWIoXCJtb2Rlcm5penJcIiksRS5zdHlsZT1FLm1vZEVsZW0uc3R5bGUpLGM9ZS5sZW5ndGgsZD0wO2M+ZDtkKyspaWYobT1lW2RdLHY9RS5zdHlsZVttXSxzKG0sXCItXCIpJiYobT1hKG0pKSxFLnN0eWxlW21dIT09dCl7aWYoaXx8byhyLFwidW5kZWZpbmVkXCIpKXJldHVybiBmKCksXCJwZnhcIj09bj9tOiEwO3RyeXtFLnN0eWxlW21dPXJ9Y2F0Y2goeSl7fWlmKEUuc3R5bGVbbV0hPXYpcmV0dXJuIGYoKSxcInBmeFwiPT1uP206ITB9cmV0dXJuIGYoKSwhMX1mdW5jdGlvbiB2KGUsbix0LHIsaSl7dmFyIHM9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLGE9KGUrXCIgXCIrUy5qb2luKHMrXCIgXCIpK3MpLnNwbGl0KFwiIFwiKTtyZXR1cm4gbyhuLFwic3RyaW5nXCIpfHxvKG4sXCJ1bmRlZmluZWRcIik/bShhLG4scixpKTooYT0oZStcIiBcIit4LmpvaW4ocytcIiBcIikrcykuc3BsaXQoXCIgXCIpLGwoYSxuLHQpKX1mdW5jdGlvbiB5KGUsbixyKXtyZXR1cm4gdihlLHQsdCxuLHIpfXZhciBoPVtdLGc9bi5kb2N1bWVudEVsZW1lbnQsQz1bXSxfPXtfdmVyc2lvbjpcIjMuMC4wLWFscGhhLjNcIixfY29uZmlnOntjbGFzc1ByZWZpeDpcIlwiLGVuYWJsZUNsYXNzZXM6ITAsZW5hYmxlSlNDbGFzczohMCx1c2VQcmVmaXhlczohMH0sX3E6W10sb246ZnVuY3Rpb24oZSxuKXt2YXIgdD10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtuKHRbZV0pfSwwKX0sYWRkVGVzdDpmdW5jdGlvbihlLG4sdCl7Qy5wdXNoKHtuYW1lOmUsZm46bixvcHRpb25zOnR9KX0sYWRkQXN5bmNUZXN0OmZ1bmN0aW9uKGUpe0MucHVzaCh7bmFtZTpudWxsLGZuOmV9KX19LE1vZGVybml6cj1mdW5jdGlvbigpe307TW9kZXJuaXpyLnByb3RvdHlwZT1fLE1vZGVybml6cj1uZXcgTW9kZXJuaXpyO3ZhciB3PVwiTW96IE8gbXMgV2Via2l0XCIsUz1fLl9jb25maWcudXNlUHJlZml4ZXM/dy5zcGxpdChcIiBcIik6W107Xy5fY3Nzb21QcmVmaXhlcz1TO3ZhciB4PV8uX2NvbmZpZy51c2VQcmVmaXhlcz93LnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpOltdO18uX2RvbVByZWZpeGVzPXg7dmFyIGI9ZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBuLmNyZWF0ZUVsZW1lbnQ/bi5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSk6bi5jcmVhdGVFbGVtZW50LmFwcGx5KG4sYXJndW1lbnRzKX0sej17ZWxlbTpiKFwibW9kZXJuaXpyXCIpfTtNb2Rlcm5penIuX3EucHVzaChmdW5jdGlvbigpe2RlbGV0ZSB6LmVsZW19KTt2YXIgRT17c3R5bGU6ei5lbGVtLnN0eWxlfTtNb2Rlcm5penIuX3EudW5zaGlmdChmdW5jdGlvbigpe2RlbGV0ZSBFLnN0eWxlfSksXy50ZXN0QWxsUHJvcHM9dixfLnRlc3RBbGxQcm9wcz15LE1vZGVybml6ci5hZGRUZXN0KFwiY3NzbWFza1wiLHkoXCJtYXNrUmVwZWF0XCIsXCJyZXBlYXQteFwiLCEwKSksaSgpLHIoaCksZGVsZXRlIF8uYWRkVGVzdCxkZWxldGUgXy5hZGRBc3luY1Rlc3Q7Zm9yKHZhciBQPTA7UDxNb2Rlcm5penIuX3EubGVuZ3RoO1ArKylNb2Rlcm5penIuX3FbUF0oKTtlLk1vZGVybml6cj1Nb2Rlcm5penJ9KHdpbmRvdyxkb2N1bWVudCk7XG5jb25zb2xlLmxvZygnRm9sbG93IHRoZSBkZXYgb2YgdGhpcyBzaXRlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS94YWsvemFja2ZyYXppZXInKTtcblxuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgdmFyIGNscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuY2xhc3NOYW1lXG4vL1x0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5jbGFzc05hbWUgPSBjbHMgKyAnIHJlYWR5Jztcbn0sMTUwMClcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=