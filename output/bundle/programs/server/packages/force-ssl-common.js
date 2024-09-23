(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"force-ssl-common":{"force_ssl_common.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/force-ssl-common/force_ssl_common.js                                                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.export({
  isLocalConnection: () => isLocalConnection,
  isSslConnection: () => isSslConnection
});
let forwarded;
module.link("forwarded-http", {
  default(v) {
    forwarded = v;
  }

}, 0);

// Determine if the connection is only over localhost. Both we
// received it on localhost, and all proxies involved received on
// localhost (supports "forwarded" and "x-forwarded-for").
const isLocalConnection = req => {
  const localhostRegexp = /^\s*(.*127\.0\.0\.1|\[?::1\]?)\s*$/;
  const request = Object.create(req);
  request.connection = Object.assign({}, req.connection, {
    remoteAddress: req.connection.remoteAddress || req.socket.remoteAddress
  });
  const forwardedParams = forwarded(request);
  let isLocal = true;
  Object.keys(forwardedParams.for).forEach(forKey => {
    if (!localhostRegexp.test(forKey)) {
      isLocal = false;
    }
  });
  return isLocal;
}; // Determine if the connection was over SSL at any point. Either we
// received it as SSL, or a proxy did and translated it for us.


const isSslConnection = req => {
  const forwardedParams = forwarded(req);
  return req.connection.pair || forwardedParams.proto && forwardedParams.proto.indexOf('https') !== -1;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"forwarded-http":{"package.json":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// node_modules/meteor/force-ssl-common/node_modules/forwarded-http/package.json                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.exports = {
  "name": "forwarded-http",
  "version": "0.3.0",
  "main": "lib/index.js"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"index.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// node_modules/meteor/force-ssl-common/node_modules/forwarded-http/lib/index.js                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/force-ssl-common/force_ssl_common.js");

/* Exports */
Package._define("force-ssl-common", exports);

})();

//# sourceURL=meteor://💻app/packages/force-ssl-common.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZm9yY2Utc3NsLWNvbW1vbi9mb3JjZV9zc2xfY29tbW9uLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsImlzTG9jYWxDb25uZWN0aW9uIiwiaXNTc2xDb25uZWN0aW9uIiwiZm9yd2FyZGVkIiwibGluayIsImRlZmF1bHQiLCJ2IiwicmVxIiwibG9jYWxob3N0UmVnZXhwIiwicmVxdWVzdCIsIk9iamVjdCIsImNyZWF0ZSIsImNvbm5lY3Rpb24iLCJhc3NpZ24iLCJyZW1vdGVBZGRyZXNzIiwic29ja2V0IiwiZm9yd2FyZGVkUGFyYW1zIiwiaXNMb2NhbCIsImtleXMiLCJmb3IiLCJmb3JFYWNoIiwiZm9yS2V5IiwidGVzdCIsInBhaXIiLCJwcm90byIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxtQkFBaUIsRUFBQyxNQUFJQSxpQkFBdkI7QUFBeUNDLGlCQUFlLEVBQUMsTUFBSUE7QUFBN0QsQ0FBZDtBQUE2RixJQUFJQyxTQUFKO0FBQWNKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLGdCQUFaLEVBQTZCO0FBQUNDLFNBQU8sQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNILGFBQVMsR0FBQ0csQ0FBVjtBQUFZOztBQUF4QixDQUE3QixFQUF1RCxDQUF2RDs7QUFFM0c7QUFDQTtBQUNBO0FBQ0EsTUFBTUwsaUJBQWlCLEdBQUlNLEdBQUQsSUFBUztBQUNqQyxRQUFNQyxlQUFlLEdBQUcsb0NBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osR0FBZCxDQUFoQjtBQUNBRSxTQUFPLENBQUNHLFVBQVIsR0FBcUJGLE1BQU0sQ0FBQ0csTUFBUCxDQUNuQixFQURtQixFQUVuQk4sR0FBRyxDQUFDSyxVQUZlLEVBR25CO0FBQUVFLGlCQUFhLEVBQUVQLEdBQUcsQ0FBQ0ssVUFBSixDQUFlRSxhQUFmLElBQWdDUCxHQUFHLENBQUNRLE1BQUosQ0FBV0Q7QUFBNUQsR0FIbUIsQ0FBckI7QUFLQSxRQUFNRSxlQUFlLEdBQUdiLFNBQVMsQ0FBQ00sT0FBRCxDQUFqQztBQUNBLE1BQUlRLE9BQU8sR0FBRyxJQUFkO0FBQ0FQLFFBQU0sQ0FBQ1EsSUFBUCxDQUFZRixlQUFlLENBQUNHLEdBQTVCLEVBQWlDQyxPQUFqQyxDQUEwQ0MsTUFBRCxJQUFZO0FBQ25ELFFBQUksQ0FBQ2IsZUFBZSxDQUFDYyxJQUFoQixDQUFxQkQsTUFBckIsQ0FBTCxFQUFtQztBQUNqQ0osYUFBTyxHQUFHLEtBQVY7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUFPQSxPQUFQO0FBQ0QsQ0FoQkQsQyxDQWtCQTtBQUNBOzs7QUFDQSxNQUFNZixlQUFlLEdBQUlLLEdBQUQsSUFBUztBQUMvQixRQUFNUyxlQUFlLEdBQUdiLFNBQVMsQ0FBQ0ksR0FBRCxDQUFqQztBQUNBLFNBQU9BLEdBQUcsQ0FBQ0ssVUFBSixDQUFlVyxJQUFmLElBQ0FQLGVBQWUsQ0FBQ1EsS0FBaEIsSUFBeUJSLGVBQWUsQ0FBQ1EsS0FBaEIsQ0FBc0JDLE9BQXRCLENBQThCLE9BQTlCLE1BQTJDLENBQUMsQ0FENUU7QUFFRCxDQUpELEMiLCJmaWxlIjoiL3BhY2thZ2VzL2ZvcmNlLXNzbC1jb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9yd2FyZGVkIGZyb20gJ2ZvcndhcmRlZC1odHRwJztcblxuLy8gRGV0ZXJtaW5lIGlmIHRoZSBjb25uZWN0aW9uIGlzIG9ubHkgb3ZlciBsb2NhbGhvc3QuIEJvdGggd2Vcbi8vIHJlY2VpdmVkIGl0IG9uIGxvY2FsaG9zdCwgYW5kIGFsbCBwcm94aWVzIGludm9sdmVkIHJlY2VpdmVkIG9uXG4vLyBsb2NhbGhvc3QgKHN1cHBvcnRzIFwiZm9yd2FyZGVkXCIgYW5kIFwieC1mb3J3YXJkZWQtZm9yXCIpLlxuY29uc3QgaXNMb2NhbENvbm5lY3Rpb24gPSAocmVxKSA9PiB7XG4gIGNvbnN0IGxvY2FsaG9zdFJlZ2V4cCA9IC9eXFxzKiguKjEyN1xcLjBcXC4wXFwuMXxcXFs/OjoxXFxdPylcXHMqJC87XG4gIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuY3JlYXRlKHJlcSk7XG4gIHJlcXVlc3QuY29ubmVjdGlvbiA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgcmVxLmNvbm5lY3Rpb24sXG4gICAgeyByZW1vdGVBZGRyZXNzOiByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8IHJlcS5zb2NrZXQucmVtb3RlQWRkcmVzcyB9XG4gICk7XG4gIGNvbnN0IGZvcndhcmRlZFBhcmFtcyA9IGZvcndhcmRlZChyZXF1ZXN0KTtcbiAgbGV0IGlzTG9jYWwgPSB0cnVlO1xuICBPYmplY3Qua2V5cyhmb3J3YXJkZWRQYXJhbXMuZm9yKS5mb3JFYWNoKChmb3JLZXkpID0+IHtcbiAgICBpZiAoIWxvY2FsaG9zdFJlZ2V4cC50ZXN0KGZvcktleSkpIHtcbiAgICAgIGlzTG9jYWwgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNMb2NhbDtcbn07XG5cbi8vIERldGVybWluZSBpZiB0aGUgY29ubmVjdGlvbiB3YXMgb3ZlciBTU0wgYXQgYW55IHBvaW50LiBFaXRoZXIgd2Vcbi8vIHJlY2VpdmVkIGl0IGFzIFNTTCwgb3IgYSBwcm94eSBkaWQgYW5kIHRyYW5zbGF0ZWQgaXQgZm9yIHVzLlxuY29uc3QgaXNTc2xDb25uZWN0aW9uID0gKHJlcSkgPT4ge1xuICBjb25zdCBmb3J3YXJkZWRQYXJhbXMgPSBmb3J3YXJkZWQocmVxKTtcbiAgcmV0dXJuIHJlcS5jb25uZWN0aW9uLnBhaXJcbiAgICAgIHx8IGZvcndhcmRlZFBhcmFtcy5wcm90byAmJiBmb3J3YXJkZWRQYXJhbXMucHJvdG8uaW5kZXhPZignaHR0cHMnKSAhPT0gLTE7XG59O1xuXG5leHBvcnQgeyBpc0xvY2FsQ29ubmVjdGlvbiwgaXNTc2xDb25uZWN0aW9uIH07XG4iXX0=
