(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"force-ssl":{"force_ssl_both.js":function module(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/force-ssl/force_ssl_both.js                                                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
Object.assign(Meteor.absoluteUrl.defaultOptions, {
  secure: true
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"force_ssl_server.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/force-ssl/force_ssl_server.js                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
let isLocalConnection, isSslConnection;
module.link("meteor/force-ssl-common", {
  isLocalConnection(v) {
    isLocalConnection = v;
  },

  isSslConnection(v) {
    isSslConnection = v;
  }

}, 0);

var url = Npm.require("url");

// Unfortunately we can't use a connect middleware here since
// sockjs installs itself prior to all existing listeners
// (meaning prior to any connect middlewares) so we need to take
// an approach similar to overshadowListeners in
// https://github.com/sockjs/sockjs-node/blob/cf820c55af6a9953e16558555a31decea554f70e/src/utils.coffee
var httpServer = WebApp.httpServer;
var oldHttpServerListeners = httpServer.listeners('request').slice(0);
httpServer.removeAllListeners('request');
httpServer.addListener('request', function (req, res) {
  // allow connections if they have been handled w/ ssl already
  // (either by us or by a proxy) OR the connection is entirely over
  // localhost (development mode).
  //
  // Note: someone could trick us into serving over non-ssl by setting
  // x-forwarded-for, x-forwarded-proto, forwarded, etc. Not much we can do
  // there if we still want to operate behind proxies.
  if (!isLocalConnection(req) && !isSslConnection(req)) {
    // connection is not cool. send a 302 redirect!
    var host = url.parse(Meteor.absoluteUrl()).hostname; // strip off the port number. If we went to a URL with a custom
    // port, we don't know what the custom SSL port is anyway.

    host = host.replace(/:\d+$/, '');
    res.writeHead(302, {
      'Location': 'https://' + host + req.url,
      'Access-Control-Allow-Origin': '*'
    });
    res.end();
    return;
  } // connection is OK. Proceed normally.


  var args = arguments;
  oldHttpServerListeners.forEach(oldListener => {
    oldListener.apply(httpServer, args);
  });
}); // NOTE: this doesn't handle websockets!
//
// Websockets come in via the 'upgrade' request. We can override this,
// however the problem is we're not sure if the websocket is actually
// encrypted. We don't get x-forwarded-for, x-forwarded-proto, forwarded, etc.
// on websockets. It's possible the 'sec-websocket-origin' header does
// what we want, but that's not clear.
//
// For now, this package allows raw unencrypted DDP connections over
// websockets.
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/force-ssl/force_ssl_both.js");
var exports = require("/node_modules/meteor/force-ssl/force_ssl_server.js");

/* Exports */
Package._define("force-ssl", exports);

})();

//# sourceURL=meteor://💻app/packages/force-ssl.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZm9yY2Utc3NsL2ZvcmNlX3NzbF9ib3RoLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9mb3JjZS1zc2wvZm9yY2Vfc3NsX3NlcnZlci5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJNZXRlb3IiLCJhYnNvbHV0ZVVybCIsImRlZmF1bHRPcHRpb25zIiwic2VjdXJlIiwiaXNMb2NhbENvbm5lY3Rpb24iLCJpc1NzbENvbm5lY3Rpb24iLCJtb2R1bGUiLCJsaW5rIiwidiIsInVybCIsIk5wbSIsInJlcXVpcmUiLCJodHRwU2VydmVyIiwiV2ViQXBwIiwib2xkSHR0cFNlcnZlckxpc3RlbmVycyIsImxpc3RlbmVycyIsInNsaWNlIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJyZXEiLCJyZXMiLCJob3N0IiwicGFyc2UiLCJob3N0bmFtZSIsInJlcGxhY2UiLCJ3cml0ZUhlYWQiLCJlbmQiLCJhcmdzIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsIm9sZExpc3RlbmVyIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJDLGNBQWpDLEVBQWlEO0FBQUVDLFFBQU0sRUFBRTtBQUFWLENBQWpELEU7Ozs7Ozs7Ozs7O0FDQUEsSUFBSUMsaUJBQUosRUFBc0JDLGVBQXRCO0FBQXNDQyxNQUFNLENBQUNDLElBQVAsQ0FBWSx5QkFBWixFQUFzQztBQUFDSCxtQkFBaUIsQ0FBQ0ksQ0FBRCxFQUFHO0FBQUNKLHFCQUFpQixHQUFDSSxDQUFsQjtBQUFvQixHQUExQzs7QUFBMkNILGlCQUFlLENBQUNHLENBQUQsRUFBRztBQUFDSCxtQkFBZSxHQUFDRyxDQUFoQjtBQUFrQjs7QUFBaEYsQ0FBdEMsRUFBd0gsQ0FBeEg7O0FBQXRDLElBQUlDLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxPQUFKLENBQVksS0FBWixDQUFWOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0QsVUFBeEI7QUFDQSxJQUFJRSxzQkFBc0IsR0FBR0YsVUFBVSxDQUFDRyxTQUFYLENBQXFCLFNBQXJCLEVBQWdDQyxLQUFoQyxDQUFzQyxDQUF0QyxDQUE3QjtBQUNBSixVQUFVLENBQUNLLGtCQUFYLENBQThCLFNBQTlCO0FBQ0FMLFVBQVUsQ0FBQ00sV0FBWCxDQUF1QixTQUF2QixFQUFrQyxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFJLENBQUNoQixpQkFBaUIsQ0FBQ2UsR0FBRCxDQUFsQixJQUEyQixDQUFDZCxlQUFlLENBQUNjLEdBQUQsQ0FBL0MsRUFBc0Q7QUFDcEQ7QUFFQSxRQUFJRSxJQUFJLEdBQUdaLEdBQUcsQ0FBQ2EsS0FBSixDQUFVdEIsTUFBTSxDQUFDQyxXQUFQLEVBQVYsRUFBZ0NzQixRQUEzQyxDQUhvRCxDQUtwRDtBQUNBOztBQUNBRixRQUFJLEdBQUdBLElBQUksQ0FBQ0csT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBUDtBQUVBSixPQUFHLENBQUNLLFNBQUosQ0FBYyxHQUFkLEVBQW1CO0FBQ2pCLGtCQUFZLGFBQWFKLElBQWIsR0FBb0JGLEdBQUcsQ0FBQ1YsR0FEbkI7QUFFakIscUNBQStCO0FBRmQsS0FBbkI7QUFJQVcsT0FBRyxDQUFDTSxHQUFKO0FBQ0E7QUFDRCxHQXpCbUQsQ0EyQnBEOzs7QUFDQSxNQUFJQyxJQUFJLEdBQUdDLFNBQVg7QUFDQWQsd0JBQXNCLENBQUNlLE9BQXZCLENBQWdDQyxXQUFELElBQWlCO0FBQzlDQSxlQUFXLENBQUNDLEtBQVosQ0FBa0JuQixVQUFsQixFQUE4QmUsSUFBOUI7QUFDRCxHQUZEO0FBR0QsQ0FoQ0QsRSxDQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjIiwiZmlsZSI6Ii9wYWNrYWdlcy9mb3JjZS1zc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuYXNzaWduKE1ldGVvci5hYnNvbHV0ZVVybC5kZWZhdWx0T3B0aW9ucywgeyBzZWN1cmU6IHRydWUgfSk7XG4iLCJ2YXIgdXJsID0gTnBtLnJlcXVpcmUoXCJ1cmxcIik7XG5pbXBvcnQgeyBpc0xvY2FsQ29ubmVjdGlvbiwgaXNTc2xDb25uZWN0aW9uIH0gZnJvbSAnbWV0ZW9yL2ZvcmNlLXNzbC1jb21tb24nO1xuXG4vLyBVbmZvcnR1bmF0ZWx5IHdlIGNhbid0IHVzZSBhIGNvbm5lY3QgbWlkZGxld2FyZSBoZXJlIHNpbmNlXG4vLyBzb2NranMgaW5zdGFsbHMgaXRzZWxmIHByaW9yIHRvIGFsbCBleGlzdGluZyBsaXN0ZW5lcnNcbi8vIChtZWFuaW5nIHByaW9yIHRvIGFueSBjb25uZWN0IG1pZGRsZXdhcmVzKSBzbyB3ZSBuZWVkIHRvIHRha2Vcbi8vIGFuIGFwcHJvYWNoIHNpbWlsYXIgdG8gb3ZlcnNoYWRvd0xpc3RlbmVycyBpblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvY2tqcy9zb2NranMtbm9kZS9ibG9iL2NmODIwYzU1YWY2YTk5NTNlMTY1NTg1NTVhMzFkZWNlYTU1NGY3MGUvc3JjL3V0aWxzLmNvZmZlZVxuXG52YXIgaHR0cFNlcnZlciA9IFdlYkFwcC5odHRwU2VydmVyO1xudmFyIG9sZEh0dHBTZXJ2ZXJMaXN0ZW5lcnMgPSBodHRwU2VydmVyLmxpc3RlbmVycygncmVxdWVzdCcpLnNsaWNlKDApO1xuaHR0cFNlcnZlci5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlcXVlc3QnKTtcbmh0dHBTZXJ2ZXIuYWRkTGlzdGVuZXIoJ3JlcXVlc3QnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcblxuICAvLyBhbGxvdyBjb25uZWN0aW9ucyBpZiB0aGV5IGhhdmUgYmVlbiBoYW5kbGVkIHcvIHNzbCBhbHJlYWR5XG4gIC8vIChlaXRoZXIgYnkgdXMgb3IgYnkgYSBwcm94eSkgT1IgdGhlIGNvbm5lY3Rpb24gaXMgZW50aXJlbHkgb3ZlclxuICAvLyBsb2NhbGhvc3QgKGRldmVsb3BtZW50IG1vZGUpLlxuICAvL1xuICAvLyBOb3RlOiBzb21lb25lIGNvdWxkIHRyaWNrIHVzIGludG8gc2VydmluZyBvdmVyIG5vbi1zc2wgYnkgc2V0dGluZ1xuICAvLyB4LWZvcndhcmRlZC1mb3IsIHgtZm9yd2FyZGVkLXByb3RvLCBmb3J3YXJkZWQsIGV0Yy4gTm90IG11Y2ggd2UgY2FuIGRvXG4gIC8vIHRoZXJlIGlmIHdlIHN0aWxsIHdhbnQgdG8gb3BlcmF0ZSBiZWhpbmQgcHJveGllcy5cblxuICBpZiAoIWlzTG9jYWxDb25uZWN0aW9uKHJlcSkgJiYgIWlzU3NsQ29ubmVjdGlvbihyZXEpKSB7XG4gICAgLy8gY29ubmVjdGlvbiBpcyBub3QgY29vbC4gc2VuZCBhIDMwMiByZWRpcmVjdCFcblxuICAgIHZhciBob3N0ID0gdXJsLnBhcnNlKE1ldGVvci5hYnNvbHV0ZVVybCgpKS5ob3N0bmFtZTtcblxuICAgIC8vIHN0cmlwIG9mZiB0aGUgcG9ydCBudW1iZXIuIElmIHdlIHdlbnQgdG8gYSBVUkwgd2l0aCBhIGN1c3RvbVxuICAgIC8vIHBvcnQsIHdlIGRvbid0IGtub3cgd2hhdCB0aGUgY3VzdG9tIFNTTCBwb3J0IGlzIGFueXdheS5cbiAgICBob3N0ID0gaG9zdC5yZXBsYWNlKC86XFxkKyQvLCAnJyk7XG5cbiAgICByZXMud3JpdGVIZWFkKDMwMiwge1xuICAgICAgJ0xvY2F0aW9uJzogJ2h0dHBzOi8vJyArIGhvc3QgKyByZXEudXJsLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgIH0pO1xuICAgIHJlcy5lbmQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjb25uZWN0aW9uIGlzIE9LLiBQcm9jZWVkIG5vcm1hbGx5LlxuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgb2xkSHR0cFNlcnZlckxpc3RlbmVycy5mb3JFYWNoKChvbGRMaXN0ZW5lcikgPT4ge1xuICAgIG9sZExpc3RlbmVyLmFwcGx5KGh0dHBTZXJ2ZXIsIGFyZ3MpO1xuICB9KTtcbn0pO1xuXG5cbi8vIE5PVEU6IHRoaXMgZG9lc24ndCBoYW5kbGUgd2Vic29ja2V0cyFcbi8vXG4vLyBXZWJzb2NrZXRzIGNvbWUgaW4gdmlhIHRoZSAndXBncmFkZScgcmVxdWVzdC4gV2UgY2FuIG92ZXJyaWRlIHRoaXMsXG4vLyBob3dldmVyIHRoZSBwcm9ibGVtIGlzIHdlJ3JlIG5vdCBzdXJlIGlmIHRoZSB3ZWJzb2NrZXQgaXMgYWN0dWFsbHlcbi8vIGVuY3J5cHRlZC4gV2UgZG9uJ3QgZ2V0IHgtZm9yd2FyZGVkLWZvciwgeC1mb3J3YXJkZWQtcHJvdG8sIGZvcndhcmRlZCwgZXRjLlxuLy8gb24gd2Vic29ja2V0cy4gSXQncyBwb3NzaWJsZSB0aGUgJ3NlYy13ZWJzb2NrZXQtb3JpZ2luJyBoZWFkZXIgZG9lc1xuLy8gd2hhdCB3ZSB3YW50LCBidXQgdGhhdCdzIG5vdCBjbGVhci5cbi8vXG4vLyBGb3Igbm93LCB0aGlzIHBhY2thZ2UgYWxsb3dzIHJhdyB1bmVuY3J5cHRlZCBERFAgY29ubmVjdGlvbnMgb3ZlclxuLy8gd2Vic29ja2V0cy5cbiJdfQ==
