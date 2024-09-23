var require = meteorInstall({"imports":{"startup":{"both":{"index.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/both/index.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("./nodes.js");
// Define amount of SHOR contained per QUANTA (10^9)
SHOR_PER_QUANTA = 1000000000; // qrl-wallet Version

WALLET_VERSION = '1.8.1'; // qrl.proto sha256 sum for each release of QRL Node

QRLPROTO_SHA256 = [{
  version: '1.0.0',
  protoSha256: '4565ecb1a7e3852bd46a8e357bbcc95dfc7a81bec761df50550d567a71bf6ed6',
  objectSha256: 'd538cc0164f26cdda4e082cca548f531038d70a4b879495a4483f66e4c53cae9'
}, {
  version: '1.1.0',
  protoSha256: '9daaa59da125167ae825bf182a65c7f12a3af78f2cc351991a5faae03fb99892',
  objectSha256: '7e841e796be583d30066e33f8d9b344ffe8160eb02fecc6cb4df80f7823e932c'
}, {
  version: '1.1.1',
  protoSha256: '9daaa59da125167ae825bf182a65c7f12a3af78f2cc351991a5faae03fb99892',
  objectSha256: '7e841e796be583d30066e33f8d9b344ffe8160eb02fecc6cb4df80f7823e932c'
}, {
  version: '1.1.2',
  protoSha256: '9daaa59da125167ae825bf182a65c7f12a3af78f2cc351991a5faae03fb99892',
  objectSha256: '7e841e796be583d30066e33f8d9b344ffe8160eb02fecc6cb4df80f7823e932c'
}, {
  version: '1.1.3',
  protoSha256: '9daaa59da125167ae825bf182a65c7f12a3af78f2cc351991a5faae03fb99892',
  objectSha256: '7e841e796be583d30066e33f8d9b344ffe8160eb02fecc6cb4df80f7823e932c'
}, {
  version: '1.1.4',
  protoSha256: '71a51e5222c50a7575f1a92c365f6674bae938cebae678416da80f22fa8327b9',
  objectSha256: '6589d425a16741104bbeceaa9ab2a1dbb33ff47453b90e29c3ee540dbad22df5'
}, {
  version: '1.1.5',
  protoSha256: '71a51e5222c50a7575f1a92c365f6674bae938cebae678416da80f22fa8327b9',
  objectSha256: '6589d425a16741104bbeceaa9ab2a1dbb33ff47453b90e29c3ee540dbad22df5'
}, {
  version: '1.1.6',
  protoSha256: '71a51e5222c50a7575f1a92c365f6674bae938cebae678416da80f22fa8327b9',
  objectSha256: '6589d425a16741104bbeceaa9ab2a1dbb33ff47453b90e29c3ee540dbad22df5'
}, {
  version: '1.1.7 python',
  protoSha256: '71a51e5222c50a7575f1a92c365f6674bae938cebae678416da80f22fa8327b9',
  objectSha256: '6589d425a16741104bbeceaa9ab2a1dbb33ff47453b90e29c3ee540dbad22df5'
}, {
  version: '1.1.8 python',
  protoSha256: '71a51e5222c50a7575f1a92c365f6674bae938cebae678416da80f22fa8327b9',
  objectSha256: '6589d425a16741104bbeceaa9ab2a1dbb33ff47453b90e29c3ee540dbad22df5'
}, {
  version: '1.1.9 python',
  protoSha256: '71a51e5222c50a7575f1a92c365f6674bae938cebae678416da80f22fa8327b9',
  objectSha256: '6589d425a16741104bbeceaa9ab2a1dbb33ff47453b90e29c3ee540dbad22df5'
}, {
  version: '1.1.10 python',
  protoSha256: '00032d07d4b4637103db15b3d68ae019c14988e870475832af6eb5bd390e04f5',
  objectSha256: '8c31491c3f6f7c3df96228644ded4ae5f3848fa74a971f3dfc8e4db684701dca'
}, {
  version: '1.1.11 python',
  protoSha256: '00032d07d4b4637103db15b3d68ae019c14988e870475832af6eb5bd390e04f5',
  objectSha256: '8c31491c3f6f7c3df96228644ded4ae5f3848fa74a971f3dfc8e4db684701dca'
}, {
  version: '1.1.13 python',
  protoSha256: 'df0f718b6a8a31ff3b746e74bcf461fe48c6d9ddac604826aa2b2891b4a7ed2a',
  objectSha256: 'a985aee431dae781576e3237f1a47d23ad579eacd5b9f4a6fddf6fd3833f1e12'
}, {
  version: '1.1.15 python',
  protoSha256: 'df0f718b6a8a31ff3b746e74bcf461fe48c6d9ddac604826aa2b2891b4a7ed2a',
  objectSha256: 'a985aee431dae781576e3237f1a47d23ad579eacd5b9f4a6fddf6fd3833f1e12'
}, {
  version: '1.1.15+65.gf434f320.dirty python',
  protoSha256: '9c273e5aa3c88c8a225dd16a76203a95ca23f737599ebab991e1087badec7598',
  objectSha256: 'ffab214fb7f1497209b6a513c5a9053a0c5566741a91c836482e1057c0e57773'
}, {
  version: '2.0.0+0.gbcf7644.dirty python',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: 'f6d7eb01dbb38707bb39d760619d05de01ae456a95060cb4849eafc3c358d12c'
}, {
  version: '2.0.1+0.gf457b3a.dirty python',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: '693b179b68016896c80d1b3660354549706d70e24d97240ce0aa7e9416c2b4aa'
}, {
  version: '2.0.1+0.gf457b3a.dirty python (null)',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: 'f6b06eac25bd5740fe6877d5e604429e6aadd93dee668e7412051decbf34add2'
}, {
  version: '2.0.0+0.gbcf7644.dirty python (null)',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: 'f6d7eb01dbb38707bb39d760619d05de01ae456a95060cb4849eafc3c358d12c'
}, {
  version: '2.0.0 python',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: 'f6d7eb01dbb38707bb39d760619d05de01ae456a95060cb4849eafc3c358d12c'
}, {
  version: '2.0.0 python (null)',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: 'f6d7eb01dbb38707bb39d760619d05de01ae456a95060cb4849eafc3c358d12c'
}, {
  version: '2.0.1 python',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: '693b179b68016896c80d1b3660354549706d70e24d97240ce0aa7e9416c2b4aa'
}, {
  version: '2.0.1 python (null)',
  protoSha256: 'b24a5c41468610914da57ac92f3cc2f74d89575f2626d5968f84ca211f55410c',
  objectSha256: '693b179b68016896c80d1b3660354549706d70e24d97240ce0aa7e9416c2b4aa'
}, {
  version: '2.0.7 python',
  protoSha256: '0d70a3372c4668a1bf4fd42983ae01f2e0fb54b4030b808bbea78e5adadb23f0',
  objectSha256: '31aecf09345df75e08f2bb406df3f06dc6e438ab85989ed213884f040ca8c8d9'
}, // development .proto
{
  version: '0+unknown python',
  protoSha256: '9d035851c76143621960c858d064489838f6eef664930257946a4b23d70bcc6c',
  objectSha256: '7e062340104109d2206017bbdb5cddf45386f77d8dd169d08fa9624b5c6b2934'
}, {
  version: '0.2.0 python (null)',
  protoSha256: 'ab168a46875c6dc41000080804c858b9039aae977dfd5503d9eb234ece4e3510',
  objectSha256: '0ead495c340fd331b28e325166ffe162a0f7cc3929b559f47d3691aeb0541bae'
}, {
  version: '2.0.6 python',
  protoSha256: '0d70a3372c4668a1bf4fd42983ae01f2e0fb54b4030b808bbea78e5adadb23f0',
  objectSha256: '2899c2d79b287e75b9ecc3aaa2fd63ec3ebd5455b7e0883528ef5425121c6a27'
}, {
  version: '2.0.7 python (null)',
  protoSha256: '0d70a3372c4668a1bf4fd42983ae01f2e0fb54b4030b808bbea78e5adadb23f0',
  objectSha256: '7fe0b06018c4b455dcf45ee573d6307d470814d7fc469e735144959a034f1bce'
}, {
  version: '2.1.2 python (null)',
  protoSha256: '0d70a3372c4668a1bf4fd42983ae01f2e0fb54b4030b808bbea78e5adadb23f0',
  objectSha256: '31aecf09345df75e08f2bb406df3f06dc6e438ab85989ed213884f040ca8c8d9'
}, {
  version: '2.1.2 python',
  protoSha256: '0d70a3372c4668a1bf4fd42983ae01f2e0fb54b4030b808bbea78e5adadb23f0',
  objectSha256: '31aecf09345df75e08f2bb406df3f06dc6e438ab85989ed213884f040ca8c8d9'
}, // testnet public release
{
  version: '0.2.0 python',
  protoSha256: 'ab168a46875c6dc41000080804c858b9039aae977dfd5503d9eb234ece4e3510',
  objectSha256: '90c1889997dc7ab0cde21beb3fb558f91bde0a8587981d78fa9ec39a79f58f9d'
}]; // function to get shasum of qrl node version

getQrlProtoShasum = (nodeVersion, callback) => {
  let itemsProcessed = 0;
  QRLPROTO_SHA256.forEach((qrlnode, index, array) => {
    itemsProcessed += 1; // Only look at health of userNetwork

    if (qrlnode.version === nodeVersion) {
      //eslint-disable-line
      callback(qrlnode);
    } // If we got to the end, and didn't callback above, the version was not found.
    // Return null


    if (itemsProcessed === array.length) {
      callback(null);
    }
  });
}; // Function to cleanly represent large decimal numbers without exponentional formatting.


numberToString = num => {
  const math = require('mathjs'); //eslint-disable-line


  return math.format(num, {
    notation: 'fixed',
    lowerExp: 1e-100,
    upperExp: Infinity
  }); //eslint-disable-line
}; // Convert decimal value to binary


decimalToBinary = decimalNumber => {
  const binaryArray = [];

  while (decimalNumber >= 1) {
    binaryArray.unshift(decimalNumber % 2);
    decimalNumber = Math.floor(decimalNumber / 2); //eslint-disable-line
  } // Pad start of array with 0s if not a full byte


  while (binaryArray.length < 8) {
    binaryArray.unshift(0);
  }

  return binaryArray;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"nodes.js":function module(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/both/nodes.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Defines Default QRL Node Details
// Additional user defined node can be stored in session.
// All functions and variables are here are not defined by 'let' or 'const'
// so that they can be utilised in other files within Meteor.

/* global LocalStore */
// Define the default networks available in the UI.
// eslint-disable-next-line no-unused-vars, no-undef
DEFAULT_NETWORKS = [{
  id: 'mainnet',
  name: 'Mainnet',
  disabled: '',
  explorerUrl: 'https://xmsscan.com',
  type: 'both',
  healthy: false,
  nodes: [{
    id: 'mainnet-1',
    grpc: 'mainnet-1.automated.theqrl.org:19009',
    state: false,
    height: 0
  }, {
    id: 'mainnet-3',
    grpc: 'mainnet-3.automated.theqrl.org:19009',
    state: false,
    height: 0
  }]
}, {
  id: 'testnet',
  name: 'Testnet',
  disabled: '',
  explorerUrl: 'https://testnet-xmsscan.com',
  type: 'both',
  healthy: false,
  nodes: [{
    id: 'testnet-1',
    grpc: 'testnet-1.automated.theqrl.org:19009',
    state: false,
    height: 0
  }, {
    id: 'testnet-2',
    grpc: 'testnet-2.automated.theqrl.org:19009',
    state: false,
    height: 0
  }, {
    id: 'testnet-4',
    grpc: 'testnet-4.automated.theqrl.org:19009',
    state: false,
    height: 0
  }]
}, {
  id: 'localhost',
  name: 'Localhost (Desktop App Only)',
  disabled: '',
  explorerUrl: 'http://xmsscan.com',
  type: 'desktop',
  healthy: false,
  nodes: [{
    id: 'localhost',
    grpc: 'localhost:19009',
    state: false,
    height: 0
  }]
}]; // disable during network upgrade
// Override DEFAULT_NETWORKS if provided in settings file

try {
  if (Meteor.settings.public.defaultNetworks.length > 0) {
    // Reset DEFAULT_NETWORKS
    // eslint-disable-next-line no-unused-vars, no-undef
    DEFAULT_NETWORKS = []; // Set DEFAULT_NETWORKS from Meteor settings
    // eslint-disable-next-line no-unused-vars, no-undef

    DEFAULT_NETWORKS = Meteor.settings.public.defaultNetworks;
  }
} catch (e) {// no configuration file used
} // Function to search through the DEFAULT_NETWORKS array and identify and return an
// object based on its 'id' value.
// eslint-disable-next-line no-unused-vars, no-undef


findNetworkData = (array, key) => {
  if (LocalStore.get('nodeId') === 'custom' && LocalStore.get('nodeStatus') !== 'connecting') {
    const nodeData = {
      id: 'custom',
      name: LocalStore.get('customNodeName'),
      disabled: '',
      explorerUrl: LocalStore.get('customNodeExplorerUrl'),
      type: 'both',
      nodes: [{
        id: 'custom',
        grpc: LocalStore.get('customNodeGrpc'),
        state: false,
        height: 0
      }]
    };
    return nodeData;
  }

  const objFound = _.find(array, obj => {
    if (obj.id === key) {
      return obj;
    }

    return null;
  });

  if (objFound) {
    return objFound;
  }

  return null;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"index.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/server/index.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 1);
let BrowserPolicy;
module.link("meteor/browser-policy-common", {
  BrowserPolicy(v) {
    BrowserPolicy = v;
  }

}, 2);
let helpers;
module.link("@theqrl/explorer-helpers", {
  default(v) {
    helpers = v;
  }

}, 3);
let grpc;
module.link("@grpc/grpc-js", {
  default(v) {
    grpc = v;
  }

}, 4);
let protoloader;
module.link("@grpc/proto-loader", {
  default(v) {
    protoloader = v;
  }

}, 5);
let tmp;
module.link("tmp", {
  default(v) {
    tmp = v;
  }

}, 6);
let fs;
module.link("fs", {
  default(v) {
    fs = v;
  }

}, 7);
let async;
module.link("async", {
  default(v) {
    async = v;
  }

}, 8);
let CryptoJS;
module.link("crypto-js", {
  default(v) {
    CryptoJS = v;
  }

}, 9);
let util;
module.link("util", {
  default(v) {
    util = v;
  }

}, 10);
let TransportNodeHid;
module.link("@ledgerhq/hw-transport-node-hid", {
  default(v) {
    TransportNodeHid = v;
  }

}, 11);
let Qrl;
module.link("@theqrl/hw-app-qrl/lib/Qrl", {
  default(v) {
    Qrl = v;
  }

}, 12);
let QRLPROTO_SHA256;
module.link("@theqrl/qrl-proto-sha256", {
  QRLPROTO_SHA256(v) {
    QRLPROTO_SHA256 = v;
  }

}, 13);
const PROTO_PATH = Assets.absoluteFilePath('qrlbase.proto').split('qrlbase.proto')[0]; // Apply BrowserPolicy

BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.allowStyleOrigin('fonts.googleapis.com');
BrowserPolicy.content.allowFontOrigin('cdn.jsdelivr.net');
BrowserPolicy.content.allowStyleOrigin('cdn.jsdelivr.net');
BrowserPolicy.content.allowFontOrigin('fonts.gstatic.com');
BrowserPolicy.content.allowFontOrigin('fonts.cdnfonts.com');
BrowserPolicy.content.allowStyleOrigin('fonts.cdnfonts.com');
BrowserPolicy.content.allowFontDataUrl();
BrowserPolicy.content.allowDataUrlForAll(); // An array of grpc connections and associated proto file paths

const qrlClient = [];

function toBuffer(ab) {
  const buffer = Buffer.from(ab);
  return buffer;
}

const errorCallback = (error, message, alert) => {
  const d = new Date();
  const getTime = d.toUTCString();
  console.log("".concat(alert, " [Timestamp: ").concat(getTime, "] ").concat(error));
  const meteorError = new Meteor.Error(500, "[".concat(getTime, "] ").concat(message, " (").concat(error, ")"));
  return meteorError;
}; // Load the qrl.proto gRPC client into qrlClient from a remote node.


const loadGrpcClient = (endpoint, callback) => {
  const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_PATH]
  };

  try {
    // Load qrlbase.proto and fetch current qrl.proto from node
    protoloader.load("".concat(PROTO_PATH, "qrlbase.proto")).then(packageDefinitionBase => {
      const baseGrpcObject = grpc.loadPackageDefinition(packageDefinitionBase);
      const client = new baseGrpcObject.qrl.Base(endpoint, grpc.credentials.createInsecure());
      client.getNodeInfo({}, (err, res) => {
        if (err) {
          console.log("Error fetching qrl.proto from ".concat(endpoint));
          callback(err, null);
        } else {
          // Write a new temp file for this grpc connection
          const qrlProtoFilePath = tmp.fileSync({
            mode: '0644',
            prefix: 'qrl-',
            postfix: '.proto'
          }).name;
          fs.writeFile(qrlProtoFilePath, res.grpcProto, fsErr => {
            if (fsErr) {
              console.log(fsErr);
              throw fsErr;
            }

            let {
              allowUnchecksummedNodes
            } = Meteor.settings;

            if (allowUnchecksummedNodes !== true) {
              allowUnchecksummedNodes = false;
            } // Now read the saved qrl.proto file so we can calculate a hash from it


            fs.readFile(qrlProtoFilePath, (errR, contents) => {
              if (fsErr) {
                console.log(fsErr);
                throw fsErr;
              } // Calculate the hash of the qrl.proto file contents


              const protoFileWordArray = CryptoJS.lib.WordArray.create(contents);
              const calculatedProtoHash = CryptoJS.SHA256(protoFileWordArray).toString(CryptoJS.enc.Hex); // If the calculated qrl.proto hash matches the verified one for this version,
              // continue to verify the grpc object loaded from the proto also matches the correct
              // shasum.

              console.log('proto: checking that calc of ' + calculatedProtoHash + ' is valid');
              let verified = false;
              QRLPROTO_SHA256.forEach(value => {
                if (value.protoSha256) {
                  if (value.protoSha256 === calculatedProtoHash) {
                    verified = true;
                  }
                }

                if (value.walletProto) {
                  if (value.walletProto === calculatedProtoHash) {
                    verified = true;
                  }
                }
              });

              if (verified === true || allowUnchecksummedNodes === true) {
                protoloader.load(qrlProtoFilePath, options).then(packageDefinition => {
                  const grpcObject = grpc.loadPackageDefinition(packageDefinition); // Inspect the object and convert to string.

                  const grpcObjectString = JSON.stringify(util.inspect(grpcObject, {
                    showHidden: true,
                    depth: 4
                  })); // Calculate the hash of the grpc object string returned

                  const protoObjectWordArray = CryptoJS.lib.WordArray.create(grpcObjectString);
                  const calculatedObjectHash = CryptoJS.SHA256(protoObjectWordArray).toString(CryptoJS.enc.Hex); // If the grpc object shasum matches, establish the grpc connection.

                  console.log('object: checking that calc of ' + calculatedObjectHash + ' is valid');
                  let verifiedObject = false;
                  QRLPROTO_SHA256.forEach(value => {
                    if (value.objectSha256) {
                      if (value.objectSha256 === calculatedObjectHash) {
                        verifiedObject = true;
                      }
                    }

                    if (value.walletProto) {
                      if (value.walletProto === calculatedObjectHash) {
                        verifiedObject = true;
                      }
                    }
                  });

                  if (verifiedObject === true || allowUnchecksummedNodes === true) {
                    // Create the gRPC Connection
                    console.log('Making GRPC PublicAPI connection to ' + endpoint);
                    qrlClient[endpoint] = new grpcObject.qrl.PublicAPI(endpoint, grpc.credentials.createInsecure());
                    console.log("qrlClient loaded for ".concat(endpoint));
                    callback(null, true);
                  } else {
                    // grpc object shasum does not match verified known shasum
                    // Could be local side attack changing the proto file in between validation
                    // and grpc connection establishment
                    console.log("Invalid qrl.proto grpc object shasum - node version: ".concat(res.version, ", qrl.proto object sha256: ").concat(calculatedObjectHash));
                    const myError = errorCallback(err, "Invalid qrl.proto grpc object shasum - node version: ".concat(res.version, ", qrl.proto object sha256: ").concat(calculatedObjectHash), '**ERROR/connect**');
                    callback(myError, null);
                  }
                });
              } else {
                // qrl.proto file shasum does not match verified known shasum
                // Could be node acting in bad faith.
                console.log("Invalid qrl.proto shasum - node version: ".concat(res.version, ", qrl.proto sha256: ").concat(calculatedProtoHash));
                const myError = errorCallback(err, "Invalid qrl.proto shasum - node version: ".concat(res.version, ", qrl.proto sha256: ").concat(calculatedProtoHash), '**ERROR/connect**');
                callback(myError, null);
              }
            });
          });
        }
      });
    });
  } catch (err) {
    console.log('node connection error exception');
    const myError = errorCallback(err, "Cannot access node: ".concat(endpoint), '**ERROR/connect**');
    callback(myError, null);
  }
}; // Establish a connection with a remote node.
// If there is no active server side connection for the requested node,
// this function will call loadGrpcClient to establish one.


const connectToNode = (endpoint, callback) => {
  // First check if there is an existing object to store the gRPC connection
  if (qrlClient.hasOwnProperty(endpoint) === true) {
    // eslint-disable-line
    // eslint-disable-line
    console.log('Existing connection found for ', endpoint, ' - attempting getNodeState'); // There is already a gRPC object for this server stored.
    // Attempt to connect to it.

    try {
      qrlClient[endpoint].getNodeState({}, (err, response) => {
        if (err) {
          console.log('Error fetching node state for ', endpoint); // If it errors, we're going to remove the object and attempt to connect again.

          delete qrlClient[endpoint];
          console.log('Attempting re-connection to ', endpoint);
          loadGrpcClient(endpoint, (loadErr, loadResponse) => {
            if (loadErr) {
              console.log("Failed to re-connect to node ".concat(endpoint));
              const myError = errorCallback(err, 'Cannot connect to remote node', '**ERROR/connection** ');
              callback(myError, null);
            } else {
              console.log("Connected to ".concat(endpoint));
              callback(null, loadResponse);
            }
          });
        } else {
          console.log("Node state for ".concat(endpoint, " ok"));
          callback(null, response);
        }
      });
    } catch (err) {
      console.log('node state error exception');
      const myError = errorCallback(err, 'Cannot access API/getNodeState', '**ERROR/getNodeState**');
      callback(myError, null);
    }
  } else {
    console.log("Establishing new connection to ".concat(endpoint)); // We've not connected to this node before, let's establish a connection to it.

    loadGrpcClient(endpoint, err => {
      if (err) {
        console.log("Failed to connect to node ".concat(endpoint));
        const myError = errorCallback(err, 'Cannot connect to remote node', '**ERROR/connection** ');
        callback(myError, null);
      } else {
        console.log("Connected to ".concat(endpoint));
        qrlClient[endpoint].getNodeState({}, (errState, response) => {
          if (errState) {
            console.log("Failed to query node state ".concat(endpoint));
            const myError = errorCallback(err, 'Cannot connect to remote node', '**ERROR/connection** ');
            callback(myError, null);
          } else {
            callback(null, response);
          }
        });
      }
    });
  }
};

const checkNetworkHealth = (userNetwork, callback) => {
  try {
    let networkHealthy = false; // Determine current active nodes

    DEFAULT_NETWORKS.forEach(network => {
      // Only look at health of userNetwork
      if (network.id === userNetwork) {
        if (network.healthy === true) {
          networkHealthy = true;
        }
      }
    });

    if (networkHealthy === true) {
      callback(null, true);
    } else {
      callback(true, {
        error: 'Network unhealthy'
      });
    }
  } catch (err) {
    console.log('Exception in checkNetworkHealth');
    console.log(err);
  }
}; // Connect to all nodes


const connectNodes = () => {
  // Establish gRPC connections with all enabled DEFAULT_NETWORKS
  DEFAULT_NETWORKS.forEach((network, networkIndex) => {
    if (network.disabled === '') {
      console.log("Attempting to create gRPC connections to network: ".concat(network.name, " ...")); // Loop each node in the network and establish a gRPC connection.

      const networkNodes = network.nodes;
      networkNodes.forEach((node, nodeIndex) => {
        console.log("Attempting to create gRPC connection to network: ".concat(network.name, ", node: ").concat(node.id, " (").concat(node.grpc, ") ..."));
        const endpoint = node.grpc;
        connectToNode(endpoint, (err, res) => {
          if (err) {
            console.log("Failed to connect to node ".concat(endpoint));
            DEFAULT_NETWORKS[networkIndex].nodes[nodeIndex].state = false;
            DEFAULT_NETWORKS[networkIndex].nodes[nodeIndex].height = 0;
          } else {
            console.log("Connected to ".concat(endpoint));
            DEFAULT_NETWORKS[networkIndex].nodes[nodeIndex].state = true;
            DEFAULT_NETWORKS[networkIndex].nodes[nodeIndex].height = parseInt(res.info.block_height, 10); // At least one node in the network is online, set network as healthy

            DEFAULT_NETWORKS[networkIndex].healthy = true;
          }
        });
      });
    }
  });
}; // Wrapper to provide highly available API results in the event
// the primary or secondary nodes go offline


const qrlApi = (api, request, callback) => {
  // Handle multi node network api requests
  if (request.network === 'devnet' || request.network === 'testnet' || request.network === 'mainnet') {
    // Store active nodes
    const activeNodes = []; // Determine current active nodes

    DEFAULT_NETWORKS.forEach(network => {
      // Only get nodes from user selected network
      if (network.id === request.network) {
        const networkNodes = network.nodes;
        networkNodes.forEach(node => {
          if (node.state === true) {
            activeNodes.push(node);
          }
        });
      }
    }); // Determine node with highest block height and set as bestNode

    const bestNode = {};
    bestNode.grpc = '';
    bestNode.height = 0;
    activeNodes.forEach(node => {
      if (node.height > bestNode.height) {
        bestNode.grpc = node.grpc;
        bestNode.height = node.height;
      }
    });
    console.log('bestNode:', bestNode); // If all nodes are offline, fail

    if (activeNodes.length === 0) {
      const myError = errorCallback('The wallet server cannot connect to any API node', 'Cannot connect to API', '**ERROR/noActiveNodes/b**');
      callback(myError, null);
    } else {
      // Make the API call
      // Delete network from request object
      delete request.network;
      console.log('Making', api, 'request to', bestNode.grpc);
      qrlClient[bestNode.grpc][api](request, (error, response) => {
        if (api === 'pushTransaction') {
          response.relayed = bestNode.grpc;
        }

        if (error) {
          const myError = new Meteor.Error(500, error.details);
          callback(myError, null);
        } else {
          callback(null, response);
        }
      });
    }
  } else {
    // Handle custom and localhost connections
    console.log('Handling custom API call');
    const apiEndpoint = request.network; // Delete network from request object

    delete request.network;
    console.log('Making', api, 'request to', apiEndpoint);
    qrlClient[apiEndpoint][api](request, (error, response) => {
      if (api === 'pushTransaction') {
        response.relayed = apiEndpoint;
      }

      if (error) {
        const myError = new Meteor.Error(500, error.details);
        callback(myError, null);
      } else {
        callback(null, response);
      }
    });
  }
}; // Function to call getKnownPeers API.


const getKnownPeers = (request, callback) => {
  qrlApi('getKnownPeers', request, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const getStats = (request, callback) => {
  try {
    qrlApi('getStats', request, (err, response) => {
      if (err) {
        const myError = errorCallback(err, 'Cannot access API/GetStats', '**ERROR/getStats** ');
        callback(myError, null);
      } else {
        callback(null, response);
      }
    });
  } catch (err) {
    const myError = errorCallback(err, 'Cannot access API/GetStats', '**ERROR/GetStats**');
    callback(myError, null);
  }
};

const getObject = (request, callback) => {
  try {
    qrlApi('GetObject', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetObject', '**ERROR/GetObject**');
        callback(myError, null);
      } else {
        // console.log(response)
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetObject', '**ERROR/GetObject**');
    callback(myError, null);
  }
};

const helpersaddressTransactions = response => {
  const output = []; // console.log(response)

  _.each(response.transactions_detail, tx => {
    const txEdited = tx;

    if (tx.tx.transfer) {
      const hexlified = [];

      _.each(tx.tx.transfer.addrs_to, txOutput => {
        hexlified.push("Q".concat(Buffer.from(txOutput).toString('hex')));
      });

      txEdited.tx.transfer.addrs_to = hexlified;
    }

    if (tx.tx.token) {
      console.log(tx.tx.token);

      if (Buffer.from(tx.tx.token.symbol).toString('hex').slice(0, 8) !== '00ff00ff') {
        txEdited.tx.token.name = Buffer.from(tx.tx.token.name).toString();
        txEdited.tx.token.symbol = Buffer.from(tx.tx.token.symbol).toString();
        txEdited.tx.token.owner = "Q".concat(Buffer.from(tx.tx.token.owner).toString('hex'));
      } else {
        txEdited.tx.token.name = Buffer.from(tx.tx.token.name).toString('hex');
        txEdited.tx.token.symbol = Buffer.from(tx.tx.token.symbol).toString('hex');
        txEdited.tx.token.owner = "Q".concat(Buffer.from(tx.tx.token.owner).toString('hex'));
      }
    }

    if (tx.tx.transfer_token) {
      const hexlified = [];
      txEdited.tx.transfer_token.token_txhash = Buffer.from(tx.tx.transfer_token.token_txhash).toString('hex');

      _.each(tx.tx.transfer_token.addrs_to, txOutput => {
        hexlified.push("Q".concat(Buffer.from(txOutput).toString('hex')));
      });

      txEdited.tx.transfer_token.addrs_to = hexlified;
    }

    if (tx.tx.coinbase) {
      if (tx.tx.coinbase.addr_to) {
        txEdited.tx.coinbase.addr_to = "Q".concat(Buffer.from(txEdited.tx.coinbase.addr_to).toString('hex'));
      }
    }

    if (tx.tx.transaction_hash) {
      txEdited.tx.transaction_hash = Buffer.from(txEdited.tx.transaction_hash).toString('hex');
    }

    if (tx.tx.master_addr) {
      txEdited.tx.master_addr = Buffer.from(txEdited.tx.master_addr).toString('hex');
    }

    if (tx.tx.public_key) {
      txEdited.tx.public_key = Buffer.from(txEdited.tx.public_key).toString('hex');
    }

    if (tx.tx.signature) {
      txEdited.tx.signature = Buffer.from(txEdited.tx.signature).toString('hex');
    }

    if (tx.block_header_hash) {
      txEdited.block_header_hash = Buffer.from(txEdited.block_header_hash).toString('hex');
    }

    txEdited.addr_from = "Q".concat(Buffer.from(txEdited.addr_from).toString('hex'));
    output.push(txEdited);
  });

  return response;
};

const getTransactionsByAddress = (request, callback) => {
  try {
    qrlApi('GetTransactionsByAddress', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetTransactionsByAddress', '**ERROR/GetTransactionsByAddress**');
        callback(myError, null);
      } else {
        // console.log(response)
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetTransactionsByAddress', '**ERROR/GetTransactionsByAddress**');
    callback(myError, null);
  }
};

const getTokensByAddress = (request, callback) => {
  try {
    qrlApi('GetTokensByAddress', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetTokensByAddress', '**ERROR/GetTokensByAddress**');
        callback(myError, null);
      } else {
        // console.log(response)
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetTokensByAddress', '**ERROR/GetTokensByAddress**');
    callback(myError, null);
  }
};

const getMultiSigAddressesByAddress = (request, callback) => {
  try {
    qrlApi('GetMultiSigAddressesByAddress', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetMultiSigAddressesByAddress', '**ERROR/GetMultiSigAddressesByAddress**');
        callback(myError, null);
      } else {
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetMultiSigAddressesByAddress', '**ERROR/GetMultiSigAddressesByAddress**');
    callback(myError, null);
  }
};

const getMultiSigSpendTxsByAddress = (request, callback) => {
  try {
    qrlApi('GetMultiSigSpendTxsByAddress', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetMultiSigSpendTxsByAddress', '**ERROR/GetMultiSigSpendTxsByAddress**');
        callback(myError, null);
      } else {
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetMultiSigSpendTxsByAddress', '**ERROR/GetMultiSigSpendTxsByAddress**');
    callback(myError, null);
  }
};

const getOTS = (request, callback) => {
  try {
    qrlApi('GetOTS', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetOTS', '**ERROR/getOTS** ');
        callback(myError, null);
      } else {
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetOTS', '**ERROR/GetOTS**');
    callback(myError, null);
  }
};

const getFullAddressState = (request, callback) => {
  try {
    qrlApi('GetAddressState', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetOptimizedAddressState', '**ERROR/getAddressState** ');
        callback(myError, null);
      } else {
        if (response.state.address) {
          response.state.address = "Q".concat(Buffer.from(response.state.address).toString('hex'));
        }

        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetAddressState', '**ERROR/GetAddressState**');
    callback(myError, null);
  }
}; // Function to call getAddressState API


const getAddressState = (request, callback) => {
  try {
    qrlApi('GetOptimizedAddressState', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetOptimizedAddressState', '**ERROR/getAddressState** ');
        callback(myError, null);
      } else {
        // Parse OTS Bitfield, and grab the lowest unused key
        const newOtsBitfield = {};
        let lowestUnusedOtsKey = -1;
        let otsBitfieldLength = 0;
        let thisOtsBitfield = [];

        if (response.state.ots_bitfield !== undefined) {
          thisOtsBitfield = response.state.ots_bitfield;
        }

        thisOtsBitfield.forEach((item, index) => {
          const thisDecimal = new Uint8Array(item)[0];
          const thisBinary = decimalToBinary(thisDecimal).reverse();
          const startIndex = index * 8;

          for (let i = 0; i < 8; i += 1) {
            const thisOtsIndex = startIndex + i; // Add to parsed array

            newOtsBitfield[thisOtsIndex] = thisBinary[i]; // Check if this is lowest unused key

            if (thisBinary[i] === 0 && (thisOtsIndex < lowestUnusedOtsKey || lowestUnusedOtsKey === -1)) {
              lowestUnusedOtsKey = thisOtsIndex;
            } // Increment otsBitfieldLength


            otsBitfieldLength += 1;
          }
        }); // If all keys in bitfield are used, lowest key will be what is shown in ots_counter + 1

        if (lowestUnusedOtsKey === -1) {
          if (response.state.ots_counter === '0') {
            lowestUnusedOtsKey = otsBitfieldLength;
          } else {
            lowestUnusedOtsKey = parseInt(response.state.ots_counter, 10) + 1;
          }
        } // Calculate number of keys that are consumed


        let totalKeysConsumed = 0; // First add all tracked keys from bitfield

        for (let i = 0; i < otsBitfieldLength; i += 1) {
          if (newOtsBitfield[i] === 1) {
            totalKeysConsumed += 1;
          }
        } // Then add any extra from `otsBitfieldLength` to `ots_counter`


        if (response.state.ots_counter !== '0') {
          totalKeysConsumed += parseInt(response.state.ots_counter, 10) - (otsBitfieldLength - 1);
        } // Add in OTS fields to response


        response.ots = {};
        response.ots.keys = newOtsBitfield;
        response.ots.nextKey = lowestUnusedOtsKey;
        response.ots.keysConsumed = totalKeysConsumed;

        if (response.state.address) {
          response.state.address = "Q".concat(Buffer.from(response.state.address).toString('hex'));
        }

        console.table(response);
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetAddressState', '**ERROR/GetAddressState**');
    callback(myError, null);
  }
};

const getMultiSigAddressState = (request, callback) => {
  try {
    qrlApi('GetMultiSigAddressState', request, (error, response) => {
      if (error) {
        const myError = errorCallback(error, 'Cannot access API/GetMultiSigAddressState', '**ERROR/getMultiSigAddressState** ');
        callback(myError, null);
      } else {
        callback(null, response);
      }
    });
  } catch (error) {
    const myError = errorCallback(error, 'Cannot access API/GetMultiSigAddressState', '**ERROR/GetMultiSigAddressState**');
    callback(myError, null);
  }
}; // Function to call getObject API and extract a txn Hash..


const getTxnHash = (request, callback) => {
  const txnHash = Buffer.from(request.query, 'hex');

  try {
    qrlApi('getObject', {
      query: txnHash,
      network: request.network
    }, (err, response) => {
      if (err) {
        console.log("Error: ".concat(err.message));
        callback(err, null);
      } else {
        callback(null, response);
      }
    });
  } catch (err) {
    callback("Caught Error: ".concat(err), null);
  }
}; // Function to call transferCoins API


const transferCoins = (request, callback) => {
  const tx = {
    // master_addr: request.fromAddress,
    addresses_to: request.addresses_to,
    amounts: request.amounts,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    network: request.network,
    message_data: request.message_data
  };
  qrlApi('transferCoins', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        response
      };
      callback(null, transferResponse);
    }
  });
};

const createMultiSig = (request, callback) => {
  const tx = {
    master_addr: request.fromAddress,
    signatories: request.signatories,
    weights: request.weights,
    threshold: request.threshold,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    network: request.network
  };
  qrlApi('GetMultiSigCreateTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        response
      };
      callback(null, transferResponse);
    }
  });
};

const spendMultiSig = (request, callback) => {
  const tx = {
    // master_addr: request.master_addr,
    multi_sig_address: request.multi_sig_address,
    addrs_to: request.addrs_to,
    amounts: request.amounts,
    expiry_block_number: request.expiry_block_number,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    network: request.network
  };
  console.log('About to call GRPC GetMultiSigSpendTxn with tx = ');
  console.log(tx);
  qrlApi('GetMultiSigSpendTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        response
      };
      callback(null, transferResponse);
    }
  });
};

const voteMultiSig = (request, callback) => {
  const tx = {
    // master_addr: request.master_addr,
    shared_key: request.shared_key,
    unvote: request.unvote,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    network: request.network
  };
  console.log('About to call GRPC GetMultiSigVoteTxn with tx = ');
  console.log(tx);
  qrlApi('GetMultiSigVoteTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        response
      };
      callback(null, transferResponse);
    }
  });
};

const getHeight = (request, callback) => {
  const tx = {
    network: request.network
  };
  qrlApi('GetHeight', tx, (err, response) => {
    console.log('response:', response);

    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      callback(null, response);
    }
  });
};

const confirmTransaction = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change Uint8Arrays to Buffers

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  const addrsTo = confirmTxn.transaction_signed.transfer.addrs_to;
  const addrsToFormatted = [];
  addrsTo.forEach(item => {
    const bufItem = toBuffer(item);
    addrsToFormatted.push(bufItem);
  }); // Overwrite addrs_to with our updated one

  confirmTxn.transaction_signed.transfer.addrs_to = addrsToFormatted;
  confirmTxn.network = request.network; // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        console.log('Relayed Txn: ', Buffer.from(res.tx_hash).toString('hex'));

        if (err) {
          console.log("Error:  ".concat(err.message));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Error: Failed to send transaction - ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try {
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Transfer Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch(err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All transfer txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const confirmMultiSigCreate = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change Uint8Arrays to Buffers

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  const {
    signatories
  } = confirmTxn.transaction_signed.multi_sig_create;
  const signatoriesFormatted = [];
  signatories.forEach(function (item) {
    const i = toBuffer(item);
    signatoriesFormatted.push(i);
  }); // Overwrite signatories with our updated one

  confirmTxn.transaction_signed.multi_sig_create.signatories = signatoriesFormatted; // // tx.multi_sig_create.threshold

  confirmTxn.network = request.network;
  console.log('confirmed + signed tx for push', confirmTxn);
  console.log(confirmTxn.transaction_signed.multi_sig_create.signatories); // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        console.log('Relayed Txn: ', Buffer.from(res.tx_hash).toString('hex'));

        if (err) {
          console.log("Error:  ".concat(err.message));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Error: Failed to send transaction: ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try {
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Transfer Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch(err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All transfer txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const confirmMultiSigSpend = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change Uint8Arrays to Buffers

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  const addrsTo = confirmTxn.transaction_signed.multi_sig_spend.addrs_to;
  const signatoriesFormatted = [];
  addrsTo.forEach(item => {
    const i = toBuffer(item);
    signatoriesFormatted.push(i);
  }); // Overwrite signatories with our updated one

  confirmTxn.transaction_signed.multi_sig_spend.addrs_to = signatoriesFormatted; // multi_sig_address & master_addr as Buffer
  // confirmTxn.transaction_signed.master_addr = toBuffer(confirmTxn.transaction_signed.master_addr)

  confirmTxn.transaction_signed.multi_sig_spend.multi_sig_address = toBuffer(confirmTxn.transaction_signed.multi_sig_spend.multi_sig_address); // // tx.multi_sig_create.threshold

  confirmTxn.network = request.network;
  console.log('confirmed + signed tx for push', confirmTxn); // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        console.log('Relayed Txn: ', Buffer.from(res.tx_hash).toString('hex'));

        if (err) {
          console.log("Error:  ".concat(err.message));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Error: Failed to send transaction: ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try {
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Transfer Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch(err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All transfer txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const confirmMultiSigVote = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change Uint8Arrays to Buffers

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature); // multi_sig_address & master_addr as Buffer
  // confirmTxn.transaction_signed.master_addr = toBuffer(confirmTxn.transaction_signed.master_addr)

  confirmTxn.transaction_signed.multi_sig_vote.shared_key = toBuffer(confirmTxn.transaction_signed.multi_sig_vote.shared_key); // // tx.multi_sig_create.threshold

  confirmTxn.network = request.network;
  console.log('confirmed + signed tx for push', confirmTxn); // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        console.log('Relayed Txn: ', Buffer.from(res.tx_hash).toString('hex'));

        if (err) {
          console.log("Error:  ".concat(err.message));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Error: Failed to send transaction: ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try {
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Transfer Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch(err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All transfer txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
}; // Function to call GetTokenTxn API


const createTokenTxn = (request, callback) => {
  const tx = {
    // master_addr: request.addressFrom,
    symbol: request.symbol,
    name: request.name,
    owner: request.owner,
    decimals: request.decimals,
    initial_balances: request.initialBalances,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    xmss_ots_index: request.xmssOtsKey,
    network: request.network
  };
  qrlApi('getTokenTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        txnHash: Buffer.from(response.extended_transaction_unsigned.tx.transaction_hash).toString('hex'),
        response
      };
      callback(null, transferResponse);
    }
  });
}; // Function to call GetMessageTxn API


const createMessageTxn = (request, callback) => {
  const tx = {
    // master_addr: request.addressFrom,
    message: request.message,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    xmss_ots_index: request.xmssOtsKey,
    network: request.network
  };
  qrlApi('getMessageTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        txnHash: Buffer.from(response.extended_transaction_unsigned.tx.transaction_hash).toString('hex'),
        response
      };
      callback(null, transferResponse);
    }
  });
}; // Create Keybase Txn


const createKeybaseTxn = (request, callback) => {
  const tx = {
    // master_addr: request.addressFrom,
    message: request.message,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    xmss_ots_index: request.xmssOtsKey,
    network: request.network
  }; // uses message transaction internally

  qrlApi('getMessageTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        txnHash: Buffer.from(response.extended_transaction_unsigned.tx.transaction_hash).toString('hex'),
        response
      };
      callback(null, transferResponse);
    }
  });
}; // Create Github Txn


const createGithubTxn = (request, callback) => {
  const tx = {
    // master_addr: request.addressFrom,
    message: request.message,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    xmss_ots_index: request.xmssOtsKey,
    network: request.network
  }; // uses message transaction internally

  qrlApi('getMessageTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        txnHash: Buffer.from(response.extended_transaction_unsigned.tx.transaction_hash).toString('hex'),
        response
      };
      callback(null, transferResponse);
    }
  });
};

const confirmTokenCreation = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change ArrayBuffer

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.transaction_hash = toBuffer(confirmTxn.transaction_signed.transaction_hash);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  confirmTxn.transaction_signed.token.symbol = toBuffer(confirmTxn.transaction_signed.token.symbol);
  confirmTxn.transaction_signed.token.name = toBuffer(confirmTxn.transaction_signed.token.name);
  confirmTxn.transaction_signed.token.owner = toBuffer(confirmTxn.transaction_signed.token.owner);
  const initialBalances = confirmTxn.transaction_signed.token.initial_balances;
  const initialBalancesFormatted = [];
  initialBalances.forEach(item => {
    const itemFormatted = item;
    itemFormatted.address = toBuffer(item.address);
    initialBalancesFormatted.push(itemFormatted);
  }); // Overwrite initial_balances with our updated one

  confirmTxn.transaction_signed.token.initial_balances = initialBalancesFormatted;
  confirmTxn.network = request.network; // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        if (err) {
          console.log("Error: Failed to send transaction through ".concat(res.relayed, " - ").concat(err));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Caught Error:  ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try{
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Token Creation Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch (err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All token creation txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const confirmMessageCreation = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change ArrayBuffer

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.transaction_hash = toBuffer(confirmTxn.transaction_signed.transaction_hash);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  confirmTxn.transaction_signed.message.message_hash = toBuffer(confirmTxn.transaction_signed.message.message_hash);
  confirmTxn.network = request.network; // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        if (err) {
          console.log("Error: Failed to send transaction through ".concat(res.relayed, " - ").concat(err));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Caught Error:  ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try{
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Token Creation Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch (err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All token creation txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const confirmKeybaseCreation = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change ArrayBuffer

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.transaction_hash = toBuffer(confirmTxn.transaction_signed.transaction_hash);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  confirmTxn.transaction_signed.message.message_hash = toBuffer(confirmTxn.transaction_signed.message.message_hash);
  confirmTxn.network = request.network; // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        if (err) {
          console.log("Error: Failed to send transaction through ".concat(res.relayed, " - ").concat(err));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Caught Error:  ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try{
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Token Creation Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch (err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All token creation txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const confirmGithubCreation = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change ArrayBuffer

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.transaction_hash = toBuffer(confirmTxn.transaction_signed.transaction_hash);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  confirmTxn.transaction_signed.message.message_hash = toBuffer(confirmTxn.transaction_signed.message.message_hash);
  confirmTxn.network = request.network; // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        if (err) {
          console.log("Error: Failed to send transaction through ".concat(res.relayed, " - ").concat(err));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Caught Error:  ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try{
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Token Creation Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch (err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All token creation txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
}; // Function to call GetTransferTokenTxn API


const createTokenTransferTxn = (request, callback) => {
  const tx = {
    // master_addr: request.addressFrom,
    addresses_to: request.addresses_to,
    amounts: request.amounts,
    token_txhash: request.tokenHash,
    fee: request.fee,
    xmss_pk: request.xmssPk,
    network: request.network
  };
  qrlApi('getTransferTokenTxn', tx, (err, response) => {
    if (err) {
      console.log("Error:  ".concat(err.message));
      callback(err, null);
    } else {
      const transferResponse = {
        response
      };
      callback(null, transferResponse);
    }
  });
};

const confirmTokenTransfer = (request, callback) => {
  const confirmTxn = {
    transaction_signed: request.extended_transaction_unsigned.tx
  };
  const relayedThrough = []; // change ArrayBuffer

  confirmTxn.transaction_signed.public_key = toBuffer(confirmTxn.transaction_signed.public_key);
  confirmTxn.transaction_signed.transaction_hash = toBuffer(confirmTxn.transaction_signed.transaction_hash);
  confirmTxn.transaction_signed.signature = toBuffer(confirmTxn.transaction_signed.signature);
  confirmTxn.transaction_signed.transfer_token.token_txhash = toBuffer(confirmTxn.transaction_signed.transfer_token.token_txhash);
  const addrsTo = confirmTxn.transaction_signed.transfer_token.addrs_to;
  const addrsToFormatted = [];
  addrsTo.forEach(item => {
    const Fitem = toBuffer(item);
    addrsToFormatted.push(Fitem);
  }); // Overwrite addrs_to with our updated one

  confirmTxn.transaction_signed.transfer_token.addrs_to = addrsToFormatted;
  confirmTxn.network = request.network; // Relay transaction through user node, then all default nodes.

  let txnResponse;
  async.waterfall([// Relay through user node.
  function (wfcb) {
    try {
      qrlApi('pushTransaction', confirmTxn, (err, res) => {
        if (err) {
          console.log("Error: Failed to send transaction through ".concat(res.relayed, " - ").concat(err));
          txnResponse = {
            error: err.message,
            response: err.message
          };
          wfcb();
        } else {
          const hashResponse = {
            txnHash: Buffer.from(confirmTxn.transaction_signed.transaction_hash).toString('hex'),
            signature: Buffer.from(confirmTxn.transaction_signed.signature).toString('hex')
          };
          txnResponse = {
            error: null,
            response: hashResponse
          };
          relayedThrough.push(res.relayed);
          console.log("Transaction sent via ".concat(res.relayed));
          wfcb();
        }
      });
    } catch (err) {
      console.log("Caught Error:  ".concat(err));
      txnResponse = {
        error: err,
        response: err
      };
      wfcb();
    }
  }
  /*
  // Now relay through all default nodes that we have a connection too
  function(wfcb) {
  async.eachSeries(DEFAULT_NODES, (node, cb) => {
    if ((qrlClient.hasOwnProperty(node.grpc) === true) && (node.grpc !== request.grpc)) {
      try{
        // Push the transaction - we don't care for its response
        qrlClient[node.grpc].pushTransaction(confirmTxn, (err) => {
          if (err) {
            console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
            cb()
          } else {
            console.log(`Token transfer Transaction sent via ${node.grpc}`)
            relayedThrough.push(node.grpc)
            cb()
          }
        })
      } catch (err) {
        console.log(`Error: Failed to send transaction through ${node.grpc} - ${err}`)
        cb()
      }
    } else {
      cb()
    }
  }, (err) => {
    if (err) console.error(err.message)
    console.log('All token transfer txns sent')
    wfcb()
  })
  },
  */
  ], () => {
    // All done, send txn response
    txnResponse.relayed = relayedThrough;
    callback(null, txnResponse);
  });
};

const apiCall = (apiUrl, callback) => {
  try {
    const response = HTTP.get(apiUrl).data; // Successful call

    callback(null, response);
  } catch (error) {
    const myError = new Meteor.Error(500, 'Cannot access the API');
    callback(myError, null);
  }
}; // Ledger Nano S Integration for Electron Desktop Apps


let transport = null;

function createTransport() {
  return Promise.asyncApply(() => {
    transport = Promise.await(TransportNodeHid.create(10));
    const qrl = Promise.await(new Qrl(transport));
    return qrl;
  });
}

const ledgerGetState = (request, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.get_state().then(data => Promise.asyncApply(() => {
    console.log(data);
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerPublicKey = (request, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.publickey().then(data => Promise.asyncApply(() => {
    console.log(data);
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerAppVersion = (request, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.get_version().then(data => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerLibraryVersion = (request, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.library_version().then(data => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerVerifyAddress = (request, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.viewAddress().then(data => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerCreateTx = (sourceAddr, fee, destAddr, destAmount, cb) => Promise.asyncApply(() => {
  const sourceAddrBuffer = Buffer.from(sourceAddr);
  const feeBuffer = Buffer.from(fee);
  const destAddrFinal = [];
  const destAmountFinal = [];

  for (let i = 0; i < destAddr.length; i += 1) {
    destAddrFinal.push(Buffer.from(destAddr[i]));
    destAmountFinal.push(Buffer.from(destAmount[i]));
  }

  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.createTx(sourceAddrBuffer, feeBuffer, destAddrFinal, destAmountFinal).then(data => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerRetrieveSignature = (txn, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.retrieveSignature(txn).then(data => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
});

const ledgerSetIdx = (otsKey, cb) => Promise.asyncApply(() => {
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.setIdx(otsKey).then(idxResponse => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, idxResponse);
    }));
  })));
});

const ledgerCreateMessageTx = (sourceAddr, fee, message, cb) => Promise.asyncApply(() => {
  const sourceAddrBuffer = Buffer.from(sourceAddr);
  const feeBuffer = Buffer.from(fee);
  const messageBuffer = Buffer.from(message);
  const QrlLedger = Promise.await(createTransport());
  Promise.await(QrlLedger.createMessageTx(sourceAddrBuffer, feeBuffer, messageBuffer).then(data => Promise.asyncApply(() => {
    Promise.await(transport.close().then(() => {
      cb(null, data);
    }));
  })));
}); // Define Meteor Methods


Meteor.methods({
  connectToNode(request) {
    this.unblock();
    check(request, String);
    const response = Meteor.wrapAsync(connectToNode)(request);
    return response;
  },

  checkNetworkHealth(request) {
    this.unblock();
    check(request, String);
    const response = Meteor.wrapAsync(checkNetworkHealth)(request);
    return response;
  },

  status(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(getStats)(request);
    return response;
  },

  getPeers(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(getKnownPeers)(request);
    return response;
  },

  getHeight(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(getHeight)(request);
    return response;
  },

  getObject(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getObject)(request);
    return response;
  },

  getAddressState(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(getAddressState)(request);
    return response;
  },

  getFullAddressState(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getFullAddressState)(request);
    return response;
  },

  getMultiSigAddressState(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(getMultiSigAddressState)(request);
    return response;
  },

  getTransactionsByAddress(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getTransactionsByAddress)(request);
    return helpersaddressTransactions(response);
  },

  getTokensByAddress(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getTokensByAddress)(request);
    return response;
  },

  getMultiSigAddressesByAddress(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getMultiSigAddressesByAddress)(request);
    console.table(response);
    return response;
  },

  getMultiSigSpendTxsByAddress(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getMultiSigSpendTxsByAddress)(request);
    console.table(response);
    return response;
  },

  getTxnHash(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(getTxnHash)(request);
    return response;
  },

  txhash(request) {
    this.unblock();
    check(request, Object);
    let output; // asynchronous call to API

    const response = Meteor.wrapAsync(getTxnHash)(request);

    if (response.transaction.tx.transactionType === 'transfer_token') {
      // Request Token Decimals / Symbol
      const symbolRequest = {
        query: Buffer.from(response.transaction.tx.transfer_token.token_txhash).toString('hex'),
        network: request.network
      };
      const thisSymbolResponse = Meteor.wrapAsync(getTxnHash)(symbolRequest);
      output = helpers.parseTokenAndTransferTokenTx(thisSymbolResponse, response);
    } else {
      output = helpers.txhash(response);
    }

    return output;
  },

  transferCoins(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(transferCoins)(request);
    return response;
  },

  createMultiSig(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(createMultiSig)(request);
    return response;
  },

  spendMultiSig(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(spendMultiSig)(request);
    return response;
  },

  voteMultiSig(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(voteMultiSig)(request);
    return response;
  },

  getOTS(request) {
    check(request, Object);
    this.unblock();
    const response = Meteor.wrapAsync(getOTS)(request);
    return response;
  },

  addressTransactions(request) {
    check(request, Object);
    const targets = request.tx;
    const result = [];
    targets.forEach(arr => {
      const thisRequest = {
        query: arr.txhash,
        network: request.network
      };

      try {
        const thisTxnHashResponse = Meteor.wrapAsync(getTxnHash)(thisRequest);
        const output = helpers.txhash(thisTxnHashResponse);
        let thisTxn = {};

        if (output.transaction.tx.transactionType === 'transfer') {
          thisTxn = {
            type: output.transaction.tx.transactionType,
            txhash: arr.txhash,
            totalTransferred: output.transaction.explorer.totalTransferred,
            outputs: output.transaction.explorer.outputs,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            ots_key: parseInt(output.transaction.tx.signature.substring(0, 8), 16),
            fee: output.transaction.tx.fee,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (output.transaction.tx.transactionType === 'token') {
          thisTxn = {
            type: output.transaction.tx.transactionType,
            txhash: arr.txhash,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            symbol: output.transaction.tx.token.symbol,
            name: output.transaction.tx.token.name,
            decimals: output.transaction.tx.token.decimals,
            ots_key: parseInt(output.transaction.tx.signature.substring(0, 8), 16),
            fee: output.transaction.tx.fee,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (thisTxnHashResponse.transaction.tx.transactionType === 'transfer_token') {
          // Request Token Symbol
          const symbolRequest = {
            query: Buffer.from(Buffer.from(thisTxnHashResponse.transaction.tx.transfer_token.token_txhash).toString('hex'), 'hex'),
            network: request.network
          };
          const thisSymbolResponse = Meteor.wrapAsync(getTxnHash)(symbolRequest);
          const helpersResponse = helpers.parseTokenAndTransferTokenTx(thisSymbolResponse, thisTxnHashResponse);
          thisTxn = {
            type: helpersResponse.transaction.tx.transactionType,
            txhash: arr.txhash,
            symbol: helpersResponse.transaction.explorer.symbol,
            // eslint-disable-next-line
            totalTransferred: helpersResponse.transaction.explorer.totalTransferred,
            outputs: helpersResponse.transaction.explorer.outputs,
            from_hex: helpersResponse.transaction.explorer.from_hex,
            from_b32: helpersResponse.transaction.explorer.from_b32,
            ots_key: parseInt(helpersResponse.transaction.tx.signature.substring(0, 8), 16),
            fee: helpersResponse.transaction.tx.fee / SHOR_PER_QUANTA,
            block: helpersResponse.transaction.header.block_number,
            timestamp: helpersResponse.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (output.transaction.tx.transactionType === 'coinbase') {
          thisTxn = {
            type: output.transaction.tx.transactionType,
            txhash: arr.txhash,
            amount: output.transaction.tx.coinbase.amount / SHOR_PER_QUANTA,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            to: output.transaction.tx.coinbase.addr_to,
            ots_key: '',
            fee: output.transaction.tx.fee / SHOR_PER_QUANTA,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (output.transaction.tx.transactionType === 'slave') {
          thisTxn = {
            type: output.transaction.tx.transactionType,
            txhash: arr.txhash,
            amount: 0,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            to: '',
            ots_key: parseInt(output.transaction.tx.signature.substring(0, 8), 16),
            fee: output.transaction.tx.fe,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (output.transaction.tx.transactionType === 'latticePK') {
          thisTxn = {
            type: output.transaction.tx.transactionType,
            txhash: arr.txhash,
            amount: 0,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            to: '',
            ots_key: parseInt(output.transaction.tx.signature.substring(0, 8), 16),
            fee: output.transaction.tx.fee,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (output.transaction.explorer.type === 'MESSAGE') {
          thisTxn = {
            type: output.transaction.explorer.type,
            txhash: arr.txhash,
            amount: 0,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            to: '',
            ots_key: parseInt(output.transaction.tx.signature.substring(0, 8), 16),
            fee: output.transaction.tx.fee,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        } else if (output.transaction.explorer.type === 'DOCUMENT_NOTARISATION') {
          thisTxn = {
            type: output.transaction.explorer.type,
            txhash: arr.txhash,
            amount: 0,
            from_hex: output.transaction.explorer.from_hex,
            from_b32: output.transaction.explorer.from_b32,
            to: '',
            ots_key: parseInt(output.transaction.tx.signature.substring(0, 8), 16),
            fee: output.transaction.tx.fee,
            block: output.transaction.header.block_number,
            timestamp: output.transaction.header.timestamp_seconds
          };
          result.push(thisTxn);
        }
      } catch (err) {
        console.log("Error fetching transaction hash in addressTransactions '".concat(arr.txhash, "' - ").concat(err));
      }
    });
    return result;
  },

  confirmTransaction(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmTransaction)(request);
    return response;
  },

  confirmMultiSigCreate(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmMultiSigCreate)(request);
    return response;
  },

  confirmMultiSigSpend(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmMultiSigSpend)(request);
    return response;
  },

  confirmMultiSigVote(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmMultiSigVote)(request);
    return response;
  },

  createMessageTxn(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(createMessageTxn)(request);
    return response;
  },

  createKeybaseTxn(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(createKeybaseTxn)(request);
    return response;
  },

  createGithubTxn(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(createGithubTxn)(request);
    return response;
  },

  confirmMessageCreation(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmMessageCreation)(request);
    return response;
  },

  confirmKeybaseCreation(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmKeybaseCreation)(request);
    return response;
  },

  confirmGithubCreation(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmGithubCreation)(request);
    return response;
  },

  createTokenTxn(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(createTokenTxn)(request);
    return response;
  },

  confirmTokenCreation(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmTokenCreation)(request);
    return response;
  },

  createTokenTransferTxn(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(createTokenTransferTxn)(request);
    return response;
  },

  confirmTokenTransfer(request) {
    this.unblock();
    check(request, Object);
    const response = Meteor.wrapAsync(confirmTokenTransfer)(request);
    return response;
  },

  QRLvalue() {
    this.unblock();
    const apiUrl = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-qrl';
    const apiUrlUSD = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=usdt-btc'; // asynchronous call to API

    const response = Meteor.wrapAsync(apiCall)(apiUrl);
    const responseUSD = Meteor.wrapAsync(apiCall)(apiUrlUSD);
    const usd = response.result[0].Last * responseUSD.result[0].Last;
    return usd;
  },

  ledgerGetState(request) {
    this.unblock();
    check(request, Array);
    const response = Meteor.wrapAsync(ledgerGetState)(request);
    console.log('res');
    console.log(response);
    return response;
  },

  ledgerPublicKey(request) {
    this.unblock();
    check(request, Array);
    const response = Meteor.wrapAsync(ledgerPublicKey)(request);
    return response;
  },

  ledgerAppVersion(request) {
    this.unblock();
    check(request, Array);
    const response = Meteor.wrapAsync(ledgerAppVersion)(request);
    return response;
  },

  ledgerLibraryVersion(request) {
    this.unblock();
    check(request, Array);
    const response = Meteor.wrapAsync(ledgerLibraryVersion)(request);
    return response;
  },

  ledgerVerifyAddress(request) {
    this.unblock();
    check(request, Array);
    const response = Meteor.wrapAsync(ledgerVerifyAddress)(request);
    return response;
  },

  ledgerCreateTx(sourceAddr, fee, destAddr, destAmount) {
    this.unblock();
    check(sourceAddr, Match.Any);
    check(fee, Match.Any);
    check(destAddr, Match.Any);
    check(destAmount, Match.Any);
    console.log('2: sourceAddr: ', sourceAddr, ' - fee: ', fee, ' - destAddr: ', destAddr, ' - destAmount: ', destAmount);
    const response = Meteor.wrapAsync(ledgerCreateTx)(sourceAddr, fee, destAddr, destAmount);
    return response;
  },

  ledgerCreateMessageTx(sourceAddr, fee, message) {
    this.unblock();
    check(sourceAddr, Match.Any);
    check(fee, Match.Any);
    check(message, Match.Any);
    const response = Meteor.wrapAsync(ledgerCreateMessageTx)(sourceAddr, fee, message);
    return response;
  },

  ledgerRetrieveSignature(request) {
    this.unblock();
    check(request, Match.Any);
    const response = Meteor.wrapAsync(ledgerRetrieveSignature)(request);
    return response;
  },

  ledgerSetIdx(request) {
    this.unblock();
    check(request, Match.Any);
    const response = Meteor.wrapAsync(ledgerSetIdx)(request);
    return response;
  }

}); // Server Startup commands

if (Meteor.isServer) {
  Meteor.startup(() => {
    console.log("QRL Wallet Starting - Version: ".concat(WALLET_VERSION)); // Attempt to create connections with all nodes

    connectNodes();
  });
} // Maintain node connection status


Meteor.setInterval(() => {
  console.log('Refreshing node connection status'); // Maintain state of connections to all nodes

  connectNodes();
}, 60000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"chimp.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// chimp.js                                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
!function (module1) {
  module.exports = {
    // - - - - WEBDRIVER-IO  - - - -
    webdriverio: {
      desiredCapabilities: {
        chromeOptions: {
          args: ["headless", "disable-gpu", "no-sandbox"]
        },
        isHeadless: true
      }
    }
  };
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server":{"main.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.link("/imports/startup/both");
module.link("/imports/startup/server");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".mjs"
  ]
});

require("/chimp.js");
require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL2JvdGgvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9ib3RoL25vZGVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9jaGltcC5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwibGluayIsIlNIT1JfUEVSX1FVQU5UQSIsIldBTExFVF9WRVJTSU9OIiwiUVJMUFJPVE9fU0hBMjU2IiwidmVyc2lvbiIsInByb3RvU2hhMjU2Iiwib2JqZWN0U2hhMjU2IiwiZ2V0UXJsUHJvdG9TaGFzdW0iLCJub2RlVmVyc2lvbiIsImNhbGxiYWNrIiwiaXRlbXNQcm9jZXNzZWQiLCJmb3JFYWNoIiwicXJsbm9kZSIsImluZGV4IiwiYXJyYXkiLCJsZW5ndGgiLCJudW1iZXJUb1N0cmluZyIsIm51bSIsIm1hdGgiLCJyZXF1aXJlIiwiZm9ybWF0Iiwibm90YXRpb24iLCJsb3dlckV4cCIsInVwcGVyRXhwIiwiSW5maW5pdHkiLCJkZWNpbWFsVG9CaW5hcnkiLCJkZWNpbWFsTnVtYmVyIiwiYmluYXJ5QXJyYXkiLCJ1bnNoaWZ0IiwiTWF0aCIsImZsb29yIiwiREVGQVVMVF9ORVRXT1JLUyIsImlkIiwibmFtZSIsImRpc2FibGVkIiwiZXhwbG9yZXJVcmwiLCJ0eXBlIiwiaGVhbHRoeSIsIm5vZGVzIiwiZ3JwYyIsInN0YXRlIiwiaGVpZ2h0IiwiTWV0ZW9yIiwic2V0dGluZ3MiLCJwdWJsaWMiLCJkZWZhdWx0TmV0d29ya3MiLCJlIiwiZmluZE5ldHdvcmtEYXRhIiwia2V5IiwiTG9jYWxTdG9yZSIsImdldCIsIm5vZGVEYXRhIiwib2JqRm91bmQiLCJfIiwiZmluZCIsIm9iaiIsInYiLCJjaGVjayIsIkJyb3dzZXJQb2xpY3kiLCJoZWxwZXJzIiwiZGVmYXVsdCIsInByb3RvbG9hZGVyIiwidG1wIiwiZnMiLCJhc3luYyIsIkNyeXB0b0pTIiwidXRpbCIsIlRyYW5zcG9ydE5vZGVIaWQiLCJRcmwiLCJQUk9UT19QQVRIIiwiQXNzZXRzIiwiYWJzb2x1dGVGaWxlUGF0aCIsInNwbGl0IiwiY29udGVudCIsImRpc2FsbG93SW5saW5lU2NyaXB0cyIsImFsbG93U3R5bGVPcmlnaW4iLCJhbGxvd0ZvbnRPcmlnaW4iLCJhbGxvd0ZvbnREYXRhVXJsIiwiYWxsb3dEYXRhVXJsRm9yQWxsIiwicXJsQ2xpZW50IiwidG9CdWZmZXIiLCJhYiIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJlcnJvckNhbGxiYWNrIiwiZXJyb3IiLCJtZXNzYWdlIiwiYWxlcnQiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXRlb3JFcnJvciIsIkVycm9yIiwibG9hZEdycGNDbGllbnQiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJrZWVwQ2FzZSIsImxvbmdzIiwiU3RyaW5nIiwiZW51bXMiLCJkZWZhdWx0cyIsIm9uZW9mcyIsImluY2x1ZGVEaXJzIiwibG9hZCIsInRoZW4iLCJwYWNrYWdlRGVmaW5pdGlvbkJhc2UiLCJiYXNlR3JwY09iamVjdCIsImxvYWRQYWNrYWdlRGVmaW5pdGlvbiIsImNsaWVudCIsInFybCIsIkJhc2UiLCJjcmVkZW50aWFscyIsImNyZWF0ZUluc2VjdXJlIiwiZ2V0Tm9kZUluZm8iLCJlcnIiLCJyZXMiLCJxcmxQcm90b0ZpbGVQYXRoIiwiZmlsZVN5bmMiLCJtb2RlIiwicHJlZml4IiwicG9zdGZpeCIsIndyaXRlRmlsZSIsImdycGNQcm90byIsImZzRXJyIiwiYWxsb3dVbmNoZWNrc3VtbWVkTm9kZXMiLCJyZWFkRmlsZSIsImVyclIiLCJjb250ZW50cyIsInByb3RvRmlsZVdvcmRBcnJheSIsImxpYiIsIldvcmRBcnJheSIsImNyZWF0ZSIsImNhbGN1bGF0ZWRQcm90b0hhc2giLCJTSEEyNTYiLCJ0b1N0cmluZyIsImVuYyIsIkhleCIsInZlcmlmaWVkIiwidmFsdWUiLCJ3YWxsZXRQcm90byIsInBhY2thZ2VEZWZpbml0aW9uIiwiZ3JwY09iamVjdCIsImdycGNPYmplY3RTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zcGVjdCIsInNob3dIaWRkZW4iLCJkZXB0aCIsInByb3RvT2JqZWN0V29yZEFycmF5IiwiY2FsY3VsYXRlZE9iamVjdEhhc2giLCJ2ZXJpZmllZE9iamVjdCIsIlB1YmxpY0FQSSIsIm15RXJyb3IiLCJjb25uZWN0VG9Ob2RlIiwiaGFzT3duUHJvcGVydHkiLCJnZXROb2RlU3RhdGUiLCJyZXNwb25zZSIsImxvYWRFcnIiLCJsb2FkUmVzcG9uc2UiLCJlcnJTdGF0ZSIsImNoZWNrTmV0d29ya0hlYWx0aCIsInVzZXJOZXR3b3JrIiwibmV0d29ya0hlYWx0aHkiLCJuZXR3b3JrIiwiY29ubmVjdE5vZGVzIiwibmV0d29ya0luZGV4IiwibmV0d29ya05vZGVzIiwibm9kZSIsIm5vZGVJbmRleCIsInBhcnNlSW50IiwiaW5mbyIsImJsb2NrX2hlaWdodCIsInFybEFwaSIsImFwaSIsInJlcXVlc3QiLCJhY3RpdmVOb2RlcyIsInB1c2giLCJiZXN0Tm9kZSIsInJlbGF5ZWQiLCJkZXRhaWxzIiwiYXBpRW5kcG9pbnQiLCJnZXRLbm93blBlZXJzIiwiZ2V0U3RhdHMiLCJnZXRPYmplY3QiLCJoZWxwZXJzYWRkcmVzc1RyYW5zYWN0aW9ucyIsIm91dHB1dCIsImVhY2giLCJ0cmFuc2FjdGlvbnNfZGV0YWlsIiwidHgiLCJ0eEVkaXRlZCIsInRyYW5zZmVyIiwiaGV4bGlmaWVkIiwiYWRkcnNfdG8iLCJ0eE91dHB1dCIsInRva2VuIiwic3ltYm9sIiwic2xpY2UiLCJvd25lciIsInRyYW5zZmVyX3Rva2VuIiwidG9rZW5fdHhoYXNoIiwiY29pbmJhc2UiLCJhZGRyX3RvIiwidHJhbnNhY3Rpb25faGFzaCIsIm1hc3Rlcl9hZGRyIiwicHVibGljX2tleSIsInNpZ25hdHVyZSIsImJsb2NrX2hlYWRlcl9oYXNoIiwiYWRkcl9mcm9tIiwiZ2V0VHJhbnNhY3Rpb25zQnlBZGRyZXNzIiwiZ2V0VG9rZW5zQnlBZGRyZXNzIiwiZ2V0TXVsdGlTaWdBZGRyZXNzZXNCeUFkZHJlc3MiLCJnZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzIiwiZ2V0T1RTIiwiZ2V0RnVsbEFkZHJlc3NTdGF0ZSIsImFkZHJlc3MiLCJnZXRBZGRyZXNzU3RhdGUiLCJuZXdPdHNCaXRmaWVsZCIsImxvd2VzdFVudXNlZE90c0tleSIsIm90c0JpdGZpZWxkTGVuZ3RoIiwidGhpc090c0JpdGZpZWxkIiwib3RzX2JpdGZpZWxkIiwidW5kZWZpbmVkIiwiaXRlbSIsInRoaXNEZWNpbWFsIiwiVWludDhBcnJheSIsInRoaXNCaW5hcnkiLCJyZXZlcnNlIiwic3RhcnRJbmRleCIsImkiLCJ0aGlzT3RzSW5kZXgiLCJvdHNfY291bnRlciIsInRvdGFsS2V5c0NvbnN1bWVkIiwib3RzIiwia2V5cyIsIm5leHRLZXkiLCJrZXlzQ29uc3VtZWQiLCJ0YWJsZSIsImdldE11bHRpU2lnQWRkcmVzc1N0YXRlIiwiZ2V0VHhuSGFzaCIsInR4bkhhc2giLCJxdWVyeSIsInRyYW5zZmVyQ29pbnMiLCJhZGRyZXNzZXNfdG8iLCJhbW91bnRzIiwiZmVlIiwieG1zc19wayIsInhtc3NQayIsIm1lc3NhZ2VfZGF0YSIsInRyYW5zZmVyUmVzcG9uc2UiLCJjcmVhdGVNdWx0aVNpZyIsImZyb21BZGRyZXNzIiwic2lnbmF0b3JpZXMiLCJ3ZWlnaHRzIiwidGhyZXNob2xkIiwic3BlbmRNdWx0aVNpZyIsIm11bHRpX3NpZ19hZGRyZXNzIiwiZXhwaXJ5X2Jsb2NrX251bWJlciIsInZvdGVNdWx0aVNpZyIsInNoYXJlZF9rZXkiLCJ1bnZvdGUiLCJnZXRIZWlnaHQiLCJjb25maXJtVHJhbnNhY3Rpb24iLCJjb25maXJtVHhuIiwidHJhbnNhY3Rpb25fc2lnbmVkIiwiZXh0ZW5kZWRfdHJhbnNhY3Rpb25fdW5zaWduZWQiLCJyZWxheWVkVGhyb3VnaCIsImFkZHJzVG8iLCJhZGRyc1RvRm9ybWF0dGVkIiwiYnVmSXRlbSIsInR4blJlc3BvbnNlIiwid2F0ZXJmYWxsIiwid2ZjYiIsInR4X2hhc2giLCJoYXNoUmVzcG9uc2UiLCJjb25maXJtTXVsdGlTaWdDcmVhdGUiLCJtdWx0aV9zaWdfY3JlYXRlIiwic2lnbmF0b3JpZXNGb3JtYXR0ZWQiLCJjb25maXJtTXVsdGlTaWdTcGVuZCIsIm11bHRpX3NpZ19zcGVuZCIsImNvbmZpcm1NdWx0aVNpZ1ZvdGUiLCJtdWx0aV9zaWdfdm90ZSIsImNyZWF0ZVRva2VuVHhuIiwiZGVjaW1hbHMiLCJpbml0aWFsX2JhbGFuY2VzIiwiaW5pdGlhbEJhbGFuY2VzIiwieG1zc19vdHNfaW5kZXgiLCJ4bXNzT3RzS2V5IiwiY3JlYXRlTWVzc2FnZVR4biIsImNyZWF0ZUtleWJhc2VUeG4iLCJjcmVhdGVHaXRodWJUeG4iLCJjb25maXJtVG9rZW5DcmVhdGlvbiIsImluaXRpYWxCYWxhbmNlc0Zvcm1hdHRlZCIsIml0ZW1Gb3JtYXR0ZWQiLCJjb25maXJtTWVzc2FnZUNyZWF0aW9uIiwibWVzc2FnZV9oYXNoIiwiY29uZmlybUtleWJhc2VDcmVhdGlvbiIsImNvbmZpcm1HaXRodWJDcmVhdGlvbiIsImNyZWF0ZVRva2VuVHJhbnNmZXJUeG4iLCJ0b2tlbkhhc2giLCJjb25maXJtVG9rZW5UcmFuc2ZlciIsIkZpdGVtIiwiYXBpQ2FsbCIsImFwaVVybCIsIkhUVFAiLCJkYXRhIiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0IiwibGVkZ2VyR2V0U3RhdGUiLCJjYiIsIlFybExlZGdlciIsImdldF9zdGF0ZSIsImNsb3NlIiwibGVkZ2VyUHVibGljS2V5IiwicHVibGlja2V5IiwibGVkZ2VyQXBwVmVyc2lvbiIsImdldF92ZXJzaW9uIiwibGVkZ2VyTGlicmFyeVZlcnNpb24iLCJsaWJyYXJ5X3ZlcnNpb24iLCJsZWRnZXJWZXJpZnlBZGRyZXNzIiwidmlld0FkZHJlc3MiLCJsZWRnZXJDcmVhdGVUeCIsInNvdXJjZUFkZHIiLCJkZXN0QWRkciIsImRlc3RBbW91bnQiLCJzb3VyY2VBZGRyQnVmZmVyIiwiZmVlQnVmZmVyIiwiZGVzdEFkZHJGaW5hbCIsImRlc3RBbW91bnRGaW5hbCIsImNyZWF0ZVR4IiwibGVkZ2VyUmV0cmlldmVTaWduYXR1cmUiLCJ0eG4iLCJyZXRyaWV2ZVNpZ25hdHVyZSIsImxlZGdlclNldElkeCIsIm90c0tleSIsInNldElkeCIsImlkeFJlc3BvbnNlIiwibGVkZ2VyQ3JlYXRlTWVzc2FnZVR4IiwibWVzc2FnZUJ1ZmZlciIsImNyZWF0ZU1lc3NhZ2VUeCIsIm1ldGhvZHMiLCJ1bmJsb2NrIiwid3JhcEFzeW5jIiwic3RhdHVzIiwiT2JqZWN0IiwiZ2V0UGVlcnMiLCJ0eGhhc2giLCJ0cmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uVHlwZSIsInN5bWJvbFJlcXVlc3QiLCJ0aGlzU3ltYm9sUmVzcG9uc2UiLCJwYXJzZVRva2VuQW5kVHJhbnNmZXJUb2tlblR4IiwiYWRkcmVzc1RyYW5zYWN0aW9ucyIsInRhcmdldHMiLCJyZXN1bHQiLCJhcnIiLCJ0aGlzUmVxdWVzdCIsInRoaXNUeG5IYXNoUmVzcG9uc2UiLCJ0aGlzVHhuIiwidG90YWxUcmFuc2ZlcnJlZCIsImV4cGxvcmVyIiwib3V0cHV0cyIsImZyb21faGV4IiwiZnJvbV9iMzIiLCJvdHNfa2V5Iiwic3Vic3RyaW5nIiwiYmxvY2siLCJoZWFkZXIiLCJibG9ja19udW1iZXIiLCJ0aW1lc3RhbXAiLCJ0aW1lc3RhbXBfc2Vjb25kcyIsImhlbHBlcnNSZXNwb25zZSIsImFtb3VudCIsInRvIiwiZmUiLCJRUkx2YWx1ZSIsImFwaVVybFVTRCIsInJlc3BvbnNlVVNEIiwidXNkIiwiTGFzdCIsIkFycmF5IiwiTWF0Y2giLCJBbnkiLCJpc1NlcnZlciIsInN0YXJ0dXAiLCJzZXRJbnRlcnZhbCIsImV4cG9ydHMiLCJ3ZWJkcml2ZXJpbyIsImRlc2lyZWRDYXBhYmlsaXRpZXMiLCJjaHJvbWVPcHRpb25zIiwiYXJncyIsImlz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UUFBWCxFQUFxQjtBQUNuQnhWLFFBQU0sQ0FBQ3lWLE9BQVAsQ0FBZSxNQUFNO0FBQ25CdFMsV0FBTyxDQUFDQyxHQUFSLDBDQUE4QzVGLGNBQTlDLEdBRG1CLENBR25COztBQUNBc0ssZ0JBQVk7QUFDYixHQUxEO0FBTUQsQyxDQUVEOzs7QUFDQTlILE1BQU0sQ0FBQzBWLFdBQVAsQ0FBbUIsTUFBTTtBQUN2QnZTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaLEVBRHVCLENBR3ZCOztBQUNBMEUsY0FBWTtBQUNiLENBTEQsRUFLRyxLQUxILEU7Ozs7Ozs7Ozs7OztBQzVxRkF6SyxRQUFNLENBQUNzWSxPQUFQLEdBQWlCO0FBQ2Y7QUFDQUMsZUFBVyxFQUFFO0FBQ1hDLHlCQUFtQixFQUFFO0FBQ25CQyxxQkFBYSxFQUFFO0FBQ2JDLGNBQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxhQUFiLEVBQTRCLFlBQTVCO0FBRE8sU0FESTtBQUluQkMsa0JBQVUsRUFBRTtBQUpPO0FBRFY7QUFGRSxHQUFqQjs7Ozs7Ozs7Ozs7O0FDQUEzWSxNQUFNLENBQUNDLElBQVAsQ0FBWSx1QkFBWjtBQUFxQ0QsTUFBTSxDQUFDQyxJQUFQLENBQVkseUJBQVosRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IG1vZHVsZXMgdXNlZCBieSBib3RoIGNsaWVudCBhbmQgc2VydmVyIHRocm91Z2ggYSBzaW5nbGUgaW5kZXggZW50cnkgcG9pbnRcbi8qIGVzbGludCBuby1jb25zb2xlOjAgKi9cbi8qIGVzbGludCBuby1nbG9iYWwtYXNzaWduOiAwICovXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cbi8qIGVzbGludCBtYXgtbGVuOiAwICovXG4vKiBnbG9iYWwgcGtSYXdUb0IzMkFkZHJlc3MsIGhleE9yQjMyLCByYXdUb0hleE9yQjMyLCBhbnlBZGRyZXNzVG9SYXdBZGRyZXNzLCBzdHJpbmdUb0J5dGVzLCBiaW5hcnlUb0J5dGVzLCBieXRlc1RvU3RyaW5nLCBieXRlc1RvSGV4LCBoZXhUb0J5dGVzLCB0b0JpZ2VuZGlhblVpbnQ2NEJ5dGVzVW5zaWduZWQsIG51bWJlclRvU3RyaW5nLCBkZWNpbWFsVG9CaW5hcnkgKi9cbi8qIGdsb2JhbCBnZXRNbmVtb25pY09mRmlyc3RBZGRyZXNzLCBnZXRYTVNTRGV0YWlscywgaXNXYWxsZXRGaWxlRGVwcmVjYXRlZCwgd2FpdEZvclFSTExJQiwgYWRkcmVzc0ZvckFQSSwgYmluYXJ5VG9RcmxBZGRyZXNzLCB0b1VpbnQ4VmVjdG9yLCBjb25jYXRlbmF0ZVR5cGVkQXJyYXlzLCBnZXRRcmxQcm90b1NoYXN1bSAqL1xuLyogZ2xvYmFsICBnZXRCYWxhbmNlLCBvdHNJbmRleFVzZWQsIGxlZGdlckhhc05vVG9rZW5TdXBwb3J0LCByZXNldExvY2FsU3RvcmFnZVN0YXRlLCBub2RlUmV0dXJuZWRWYWxpZFJlc3BvbnNlICovXG4vKiBnbG9iYWwgUE9MTF9UWE5fUkFURSwgUE9MTF9NQVhfQ0hFQ0tTLCBERUZBVUxUX05FVFdPUktTLCBmaW5kTmV0d29ya0RhdGEsIFNIT1JfUEVSX1FVQU5UQSwgV0FMTEVUX1ZFUlNJT04sIFFSTFBST1RPX1NIQTI1NiwgICovXG5cbmltcG9ydCAnLi9ub2Rlcy5qcydcblxuLy8gRGVmaW5lIGFtb3VudCBvZiBTSE9SIGNvbnRhaW5lZCBwZXIgUVVBTlRBICgxMF45KVxuU0hPUl9QRVJfUVVBTlRBID0gMTAwMDAwMDAwMFxuXG4vLyBxcmwtd2FsbGV0IFZlcnNpb25cbldBTExFVF9WRVJTSU9OID0gJzEuOC4xJ1xuXG4vLyBxcmwucHJvdG8gc2hhMjU2IHN1bSBmb3IgZWFjaCByZWxlYXNlIG9mIFFSTCBOb2RlXG5RUkxQUk9UT19TSEEyNTYgPSBbXG4gIHtcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJzQ1NjVlY2IxYTdlMzg1MmJkNDZhOGUzNTdiYmNjOTVkZmM3YTgxYmVjNzYxZGY1MDU1MGQ1NjdhNzFiZjZlZDYnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICdkNTM4Y2MwMTY0ZjI2Y2RkYTRlMDgyY2NhNTQ4ZjUzMTAzOGQ3MGE0Yjg3OTQ5NWE0NDgzZjY2ZTRjNTNjYWU5JyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcxLjEuMCcsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnOWRhYWE1OWRhMTI1MTY3YWU4MjViZjE4MmE2NWM3ZjEyYTNhZjc4ZjJjYzM1MTk5MWE1ZmFhZTAzZmI5OTg5MicsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzdlODQxZTc5NmJlNTgzZDMwMDY2ZTMzZjhkOWIzNDRmZmU4MTYwZWIwMmZlY2M2Y2I0ZGY4MGY3ODIzZTkzMmMnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS4xJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICc5ZGFhYTU5ZGExMjUxNjdhZTgyNWJmMTgyYTY1YzdmMTJhM2FmNzhmMmNjMzUxOTkxYTVmYWFlMDNmYjk5ODkyJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnN2U4NDFlNzk2YmU1ODNkMzAwNjZlMzNmOGQ5YjM0NGZmZTgxNjBlYjAyZmVjYzZjYjRkZjgwZjc4MjNlOTMyYycsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMS4xLjInLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJzlkYWFhNTlkYTEyNTE2N2FlODI1YmYxODJhNjVjN2YxMmEzYWY3OGYyY2MzNTE5OTFhNWZhYWUwM2ZiOTk4OTInLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICc3ZTg0MWU3OTZiZTU4M2QzMDA2NmUzM2Y4ZDliMzQ0ZmZlODE2MGViMDJmZWNjNmNiNGRmODBmNzgyM2U5MzJjJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcxLjEuMycsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnOWRhYWE1OWRhMTI1MTY3YWU4MjViZjE4MmE2NWM3ZjEyYTNhZjc4ZjJjYzM1MTk5MWE1ZmFhZTAzZmI5OTg5MicsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzdlODQxZTc5NmJlNTgzZDMwMDY2ZTMzZjhkOWIzNDRmZmU4MTYwZWIwMmZlY2M2Y2I0ZGY4MGY3ODIzZTkzMmMnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS40JyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICc3MWE1MWU1MjIyYzUwYTc1NzVmMWE5MmMzNjVmNjY3NGJhZTkzOGNlYmFlNjc4NDE2ZGE4MGYyMmZhODMyN2I5JyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnNjU4OWQ0MjVhMTY3NDExMDRiYmVjZWFhOWFiMmExZGJiMzNmZjQ3NDUzYjkwZTI5YzNlZTU0MGRiYWQyMmRmNScsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMS4xLjUnLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJzcxYTUxZTUyMjJjNTBhNzU3NWYxYTkyYzM2NWY2Njc0YmFlOTM4Y2ViYWU2Nzg0MTZkYTgwZjIyZmE4MzI3YjknLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICc2NTg5ZDQyNWExNjc0MTEwNGJiZWNlYWE5YWIyYTFkYmIzM2ZmNDc0NTNiOTBlMjljM2VlNTQwZGJhZDIyZGY1JyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcxLjEuNicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnNzFhNTFlNTIyMmM1MGE3NTc1ZjFhOTJjMzY1ZjY2NzRiYWU5MzhjZWJhZTY3ODQxNmRhODBmMjJmYTgzMjdiOScsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzY1ODlkNDI1YTE2NzQxMTA0YmJlY2VhYTlhYjJhMWRiYjMzZmY0NzQ1M2I5MGUyOWMzZWU1NDBkYmFkMjJkZjUnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS43IHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnNzFhNTFlNTIyMmM1MGE3NTc1ZjFhOTJjMzY1ZjY2NzRiYWU5MzhjZWJhZTY3ODQxNmRhODBmMjJmYTgzMjdiOScsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzY1ODlkNDI1YTE2NzQxMTA0YmJlY2VhYTlhYjJhMWRiYjMzZmY0NzQ1M2I5MGUyOWMzZWU1NDBkYmFkMjJkZjUnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS44IHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnNzFhNTFlNTIyMmM1MGE3NTc1ZjFhOTJjMzY1ZjY2NzRiYWU5MzhjZWJhZTY3ODQxNmRhODBmMjJmYTgzMjdiOScsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzY1ODlkNDI1YTE2NzQxMTA0YmJlY2VhYTlhYjJhMWRiYjMzZmY0NzQ1M2I5MGUyOWMzZWU1NDBkYmFkMjJkZjUnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS45IHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnNzFhNTFlNTIyMmM1MGE3NTc1ZjFhOTJjMzY1ZjY2NzRiYWU5MzhjZWJhZTY3ODQxNmRhODBmMjJmYTgzMjdiOScsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzY1ODlkNDI1YTE2NzQxMTA0YmJlY2VhYTlhYjJhMWRiYjMzZmY0NzQ1M2I5MGUyOWMzZWU1NDBkYmFkMjJkZjUnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS4xMCBweXRob24nLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJzAwMDMyZDA3ZDRiNDYzNzEwM2RiMTViM2Q2OGFlMDE5YzE0OTg4ZTg3MDQ3NTgzMmFmNmViNWJkMzkwZTA0ZjUnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICc4YzMxNDkxYzNmNmY3YzNkZjk2MjI4NjQ0ZGVkNGFlNWYzODQ4ZmE3NGE5NzFmM2RmYzhlNGRiNjg0NzAxZGNhJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcxLjEuMTEgcHl0aG9uJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICcwMDAzMmQwN2Q0YjQ2MzcxMDNkYjE1YjNkNjhhZTAxOWMxNDk4OGU4NzA0NzU4MzJhZjZlYjViZDM5MGUwNGY1JyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnOGMzMTQ5MWMzZjZmN2MzZGY5NjIyODY0NGRlZDRhZTVmMzg0OGZhNzRhOTcxZjNkZmM4ZTRkYjY4NDcwMWRjYScsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMS4xLjEzIHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnZGYwZjcxOGI2YThhMzFmZjNiNzQ2ZTc0YmNmNDYxZmU0OGM2ZDlkZGFjNjA0ODI2YWEyYjI4OTFiNGE3ZWQyYScsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJ2E5ODVhZWU0MzFkYWU3ODE1NzZlMzIzN2YxYTQ3ZDIzYWQ1NzllYWNkNWI5ZjRhNmZkZGY2ZmQzODMzZjFlMTInLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzEuMS4xNSBweXRob24nLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJ2RmMGY3MThiNmE4YTMxZmYzYjc0NmU3NGJjZjQ2MWZlNDhjNmQ5ZGRhYzYwNDgyNmFhMmIyODkxYjRhN2VkMmEnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICdhOTg1YWVlNDMxZGFlNzgxNTc2ZTMyMzdmMWE0N2QyM2FkNTc5ZWFjZDViOWY0YTZmZGRmNmZkMzgzM2YxZTEyJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcxLjEuMTUrNjUuZ2Y0MzRmMzIwLmRpcnR5IHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnOWMyNzNlNWFhM2M4OGM4YTIyNWRkMTZhNzYyMDNhOTVjYTIzZjczNzU5OWViYWI5OTFlMTA4N2JhZGVjNzU5OCcsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJ2ZmYWIyMTRmYjdmMTQ5NzIwOWI2YTUxM2M1YTkwNTNhMGM1NTY2NzQxYTkxYzgzNjQ4MmUxMDU3YzBlNTc3NzMnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzIuMC4wKzAuZ2JjZjc2NDQuZGlydHkgcHl0aG9uJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICdiMjRhNWM0MTQ2ODYxMDkxNGRhNTdhYzkyZjNjYzJmNzRkODk1NzVmMjYyNmQ1OTY4Zjg0Y2EyMTFmNTU0MTBjJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnZjZkN2ViMDFkYmIzODcwN2JiMzlkNzYwNjE5ZDA1ZGUwMWFlNDU2YTk1MDYwY2I0ODQ5ZWFmYzNjMzU4ZDEyYycsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMi4wLjErMC5nZjQ1N2IzYS5kaXJ0eSBweXRob24nLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJ2IyNGE1YzQxNDY4NjEwOTE0ZGE1N2FjOTJmM2NjMmY3NGQ4OTU3NWYyNjI2ZDU5NjhmODRjYTIxMWY1NTQxMGMnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICc2OTNiMTc5YjY4MDE2ODk2YzgwZDFiMzY2MDM1NDU0OTcwNmQ3MGUyNGQ5NzI0MGNlMGFhN2U5NDE2YzJiNGFhJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcyLjAuMSswLmdmNDU3YjNhLmRpcnR5IHB5dGhvbiAobnVsbCknLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJ2IyNGE1YzQxNDY4NjEwOTE0ZGE1N2FjOTJmM2NjMmY3NGQ4OTU3NWYyNjI2ZDU5NjhmODRjYTIxMWY1NTQxMGMnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICdmNmIwNmVhYzI1YmQ1NzQwZmU2ODc3ZDVlNjA0NDI5ZTZhYWRkOTNkZWU2NjhlNzQxMjA1MWRlY2JmMzRhZGQyJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcyLjAuMCswLmdiY2Y3NjQ0LmRpcnR5IHB5dGhvbiAobnVsbCknLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJ2IyNGE1YzQxNDY4NjEwOTE0ZGE1N2FjOTJmM2NjMmY3NGQ4OTU3NWYyNjI2ZDU5NjhmODRjYTIxMWY1NTQxMGMnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICdmNmQ3ZWIwMWRiYjM4NzA3YmIzOWQ3NjA2MTlkMDVkZTAxYWU0NTZhOTUwNjBjYjQ4NDllYWZjM2MzNThkMTJjJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcyLjAuMCBweXRob24nLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJ2IyNGE1YzQxNDY4NjEwOTE0ZGE1N2FjOTJmM2NjMmY3NGQ4OTU3NWYyNjI2ZDU5NjhmODRjYTIxMWY1NTQxMGMnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICdmNmQ3ZWIwMWRiYjM4NzA3YmIzOWQ3NjA2MTlkMDVkZTAxYWU0NTZhOTUwNjBjYjQ4NDllYWZjM2MzNThkMTJjJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcyLjAuMCBweXRob24gKG51bGwpJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICdiMjRhNWM0MTQ2ODYxMDkxNGRhNTdhYzkyZjNjYzJmNzRkODk1NzVmMjYyNmQ1OTY4Zjg0Y2EyMTFmNTU0MTBjJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnZjZkN2ViMDFkYmIzODcwN2JiMzlkNzYwNjE5ZDA1ZGUwMWFlNDU2YTk1MDYwY2I0ODQ5ZWFmYzNjMzU4ZDEyYycsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMi4wLjEgcHl0aG9uJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICdiMjRhNWM0MTQ2ODYxMDkxNGRhNTdhYzkyZjNjYzJmNzRkODk1NzVmMjYyNmQ1OTY4Zjg0Y2EyMTFmNTU0MTBjJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnNjkzYjE3OWI2ODAxNjg5NmM4MGQxYjM2NjAzNTQ1NDk3MDZkNzBlMjRkOTcyNDBjZTBhYTdlOTQxNmMyYjRhYScsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMi4wLjEgcHl0aG9uIChudWxsKScsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnYjI0YTVjNDE0Njg2MTA5MTRkYTU3YWM5MmYzY2MyZjc0ZDg5NTc1ZjI2MjZkNTk2OGY4NGNhMjExZjU1NDEwYycsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzY5M2IxNzliNjgwMTY4OTZjODBkMWIzNjYwMzU0NTQ5NzA2ZDcwZTI0ZDk3MjQwY2UwYWE3ZTk0MTZjMmI0YWEnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzIuMC43IHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnMGQ3MGEzMzcyYzQ2NjhhMWJmNGZkNDI5ODNhZTAxZjJlMGZiNTRiNDAzMGI4MDhiYmVhNzhlNWFkYWRiMjNmMCcsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzMxYWVjZjA5MzQ1ZGY3NWUwOGYyYmI0MDZkZjNmMDZkYzZlNDM4YWI4NTk4OWVkMjEzODg0ZjA0MGNhOGM4ZDknLFxuICB9LFxuICAvLyBkZXZlbG9wbWVudCAucHJvdG9cbiAge1xuICAgIHZlcnNpb246ICcwK3Vua25vd24gcHl0aG9uJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICc5ZDAzNTg1MWM3NjE0MzYyMTk2MGM4NThkMDY0NDg5ODM4ZjZlZWY2NjQ5MzAyNTc5NDZhNGIyM2Q3MGJjYzZjJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnN2UwNjIzNDAxMDQxMDlkMjIwNjAxN2JiZGI1Y2RkZjQ1Mzg2Zjc3ZDhkZDE2OWQwOGZhOTYyNGI1YzZiMjkzNCcsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMC4yLjAgcHl0aG9uIChudWxsKScsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnYWIxNjhhNDY4NzVjNmRjNDEwMDAwODA4MDRjODU4YjkwMzlhYWU5NzdkZmQ1NTAzZDllYjIzNGVjZTRlMzUxMCcsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzBlYWQ0OTVjMzQwZmQzMzFiMjhlMzI1MTY2ZmZlMTYyYTBmN2NjMzkyOWI1NTlmNDdkMzY5MWFlYjA1NDFiYWUnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzIuMC42IHB5dGhvbicsXG4gICAgcHJvdG9TaGEyNTY6XG4gICAgICAnMGQ3MGEzMzcyYzQ2NjhhMWJmNGZkNDI5ODNhZTAxZjJlMGZiNTRiNDAzMGI4MDhiYmVhNzhlNWFkYWRiMjNmMCcsXG4gICAgb2JqZWN0U2hhMjU2OlxuICAgICAgJzI4OTljMmQ3OWIyODdlNzViOWVjYzNhYWEyZmQ2M2VjM2ViZDU0NTViN2UwODgzNTI4ZWY1NDI1MTIxYzZhMjcnLFxuICB9LFxuICB7XG4gICAgdmVyc2lvbjogJzIuMC43IHB5dGhvbiAobnVsbCknLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJzBkNzBhMzM3MmM0NjY4YTFiZjRmZDQyOTgzYWUwMWYyZTBmYjU0YjQwMzBiODA4YmJlYTc4ZTVhZGFkYjIzZjAnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICc3ZmUwYjA2MDE4YzRiNDU1ZGNmNDVlZTU3M2Q2MzA3ZDQ3MDgxNGQ3ZmM0NjllNzM1MTQ0OTU5YTAzNGYxYmNlJyxcbiAgfSxcbiAge1xuICAgIHZlcnNpb246ICcyLjEuMiBweXRob24gKG51bGwpJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICcwZDcwYTMzNzJjNDY2OGExYmY0ZmQ0Mjk4M2FlMDFmMmUwZmI1NGI0MDMwYjgwOGJiZWE3OGU1YWRhZGIyM2YwJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnMzFhZWNmMDkzNDVkZjc1ZTA4ZjJiYjQwNmRmM2YwNmRjNmU0MzhhYjg1OTg5ZWQyMTM4ODRmMDQwY2E4YzhkOScsXG4gIH0sXG4gIHtcbiAgICB2ZXJzaW9uOiAnMi4xLjIgcHl0aG9uJyxcbiAgICBwcm90b1NoYTI1NjpcbiAgICAgICcwZDcwYTMzNzJjNDY2OGExYmY0ZmQ0Mjk4M2FlMDFmMmUwZmI1NGI0MDMwYjgwOGJiZWE3OGU1YWRhZGIyM2YwJyxcbiAgICBvYmplY3RTaGEyNTY6XG4gICAgICAnMzFhZWNmMDkzNDVkZjc1ZTA4ZjJiYjQwNmRmM2YwNmRjNmU0MzhhYjg1OTg5ZWQyMTM4ODRmMDQwY2E4YzhkOScsXG4gIH0sXG4gIC8vIHRlc3RuZXQgcHVibGljIHJlbGVhc2VcbiAge1xuICAgIHZlcnNpb246ICcwLjIuMCBweXRob24nLFxuICAgIHByb3RvU2hhMjU2OlxuICAgICAgJ2FiMTY4YTQ2ODc1YzZkYzQxMDAwMDgwODA0Yzg1OGI5MDM5YWFlOTc3ZGZkNTUwM2Q5ZWIyMzRlY2U0ZTM1MTAnLFxuICAgIG9iamVjdFNoYTI1NjpcbiAgICAgICc5MGMxODg5OTk3ZGM3YWIwY2RlMjFiZWIzZmI1NThmOTFiZGUwYTg1ODc5ODFkNzhmYTllYzM5YTc5ZjU4ZjlkJyxcbiAgfSxcbl1cblxuLy8gZnVuY3Rpb24gdG8gZ2V0IHNoYXN1bSBvZiBxcmwgbm9kZSB2ZXJzaW9uXG5nZXRRcmxQcm90b1NoYXN1bSA9IChub2RlVmVyc2lvbiwgY2FsbGJhY2spID0+IHtcbiAgbGV0IGl0ZW1zUHJvY2Vzc2VkID0gMFxuICBRUkxQUk9UT19TSEEyNTYuZm9yRWFjaCgocXJsbm9kZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgaXRlbXNQcm9jZXNzZWQgKz0gMVxuICAgIC8vIE9ubHkgbG9vayBhdCBoZWFsdGggb2YgdXNlck5ldHdvcmtcbiAgICBpZiAocXJsbm9kZS52ZXJzaW9uID09PSBub2RlVmVyc2lvbikge1xuICAgICAgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICBjYWxsYmFjayhxcmxub2RlKVxuICAgIH1cbiAgICAvLyBJZiB3ZSBnb3QgdG8gdGhlIGVuZCwgYW5kIGRpZG4ndCBjYWxsYmFjayBhYm92ZSwgdGhlIHZlcnNpb24gd2FzIG5vdCBmb3VuZC5cbiAgICAvLyBSZXR1cm4gbnVsbFxuICAgIGlmIChpdGVtc1Byb2Nlc3NlZCA9PT0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICBjYWxsYmFjayhudWxsKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2xlYW5seSByZXByZXNlbnQgbGFyZ2UgZGVjaW1hbCBudW1iZXJzIHdpdGhvdXQgZXhwb25lbnRpb25hbCBmb3JtYXR0aW5nLlxubnVtYmVyVG9TdHJpbmcgPSAobnVtKSA9PiB7XG4gIGNvbnN0IG1hdGggPSByZXF1aXJlKCdtYXRoanMnKSAvL2VzbGludC1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIG1hdGguZm9ybWF0KG51bSwge1xuICAgIG5vdGF0aW9uOiAnZml4ZWQnLFxuICAgIGxvd2VyRXhwOiAxZS0xMDAsXG4gICAgdXBwZXJFeHA6IEluZmluaXR5LFxuICB9KSAvL2VzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuLy8gQ29udmVydCBkZWNpbWFsIHZhbHVlIHRvIGJpbmFyeVxuZGVjaW1hbFRvQmluYXJ5ID0gKGRlY2ltYWxOdW1iZXIpID0+IHtcbiAgY29uc3QgYmluYXJ5QXJyYXkgPSBbXVxuICB3aGlsZSAoZGVjaW1hbE51bWJlciA+PSAxKSB7XG4gICAgYmluYXJ5QXJyYXkudW5zaGlmdChkZWNpbWFsTnVtYmVyICUgMilcbiAgICBkZWNpbWFsTnVtYmVyID0gTWF0aC5mbG9vcihkZWNpbWFsTnVtYmVyIC8gMikgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cbiAgLy8gUGFkIHN0YXJ0IG9mIGFycmF5IHdpdGggMHMgaWYgbm90IGEgZnVsbCBieXRlXG4gIHdoaWxlIChiaW5hcnlBcnJheS5sZW5ndGggPCA4KSB7XG4gICAgYmluYXJ5QXJyYXkudW5zaGlmdCgwKVxuICB9XG4gIHJldHVybiBiaW5hcnlBcnJheVxufVxuIiwiLy8gRGVmaW5lcyBEZWZhdWx0IFFSTCBOb2RlIERldGFpbHNcbi8vIEFkZGl0aW9uYWwgdXNlciBkZWZpbmVkIG5vZGUgY2FuIGJlIHN0b3JlZCBpbiBzZXNzaW9uLlxuLy8gQWxsIGZ1bmN0aW9ucyBhbmQgdmFyaWFibGVzIGFyZSBoZXJlIGFyZSBub3QgZGVmaW5lZCBieSAnbGV0JyBvciAnY29uc3QnXG4vLyBzbyB0aGF0IHRoZXkgY2FuIGJlIHV0aWxpc2VkIGluIG90aGVyIGZpbGVzIHdpdGhpbiBNZXRlb3IuXG5cbi8qIGdsb2JhbCBMb2NhbFN0b3JlICovXG5cbi8vIERlZmluZSB0aGUgZGVmYXVsdCBuZXR3b3JrcyBhdmFpbGFibGUgaW4gdGhlIFVJLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby11bmRlZlxuREVGQVVMVF9ORVRXT1JLUyA9IFt7XG4gIGlkOiAnbWFpbm5ldCcsXG4gIG5hbWU6ICdNYWlubmV0JyxcbiAgZGlzYWJsZWQ6ICcnLFxuICBleHBsb3JlclVybDogJ2h0dHBzOi8vZXhwbG9yZXIudGhlcXJsLm9yZycsXG4gIHR5cGU6ICdib3RoJyxcbiAgaGVhbHRoeTogZmFsc2UsXG4gIG5vZGVzOiBbe1xuICAgIGlkOiAnbWFpbm5ldC0xJyxcbiAgICBncnBjOiAnbWFpbm5ldC0xLmF1dG9tYXRlZC50aGVxcmwub3JnOjE5MDA5JyxcbiAgICBzdGF0ZTogZmFsc2UsXG4gICAgaGVpZ2h0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6ICdtYWlubmV0LTMnLFxuICAgIGdycGM6ICdtYWlubmV0LTMuYXV0b21hdGVkLnRoZXFybC5vcmc6MTkwMDknLFxuICAgIHN0YXRlOiBmYWxzZSxcbiAgICBoZWlnaHQ6IDAsXG4gIH0sXG4gIF0sXG59LFxue1xuICBpZDogJ3Rlc3RuZXQnLFxuICBuYW1lOiAnVGVzdG5ldCcsXG4gIGRpc2FibGVkOiAnJyxcbiAgZXhwbG9yZXJVcmw6ICdodHRwczovL3Rlc3RuZXQtZXhwbG9yZXIudGhlcXJsLm9yZycsXG4gIHR5cGU6ICdib3RoJyxcbiAgaGVhbHRoeTogZmFsc2UsXG4gIG5vZGVzOiBbe1xuICAgIGlkOiAndGVzdG5ldC0xJyxcbiAgICBncnBjOiAndGVzdG5ldC0xLmF1dG9tYXRlZC50aGVxcmwub3JnOjE5MDA5JyxcbiAgICBzdGF0ZTogZmFsc2UsXG4gICAgaGVpZ2h0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6ICd0ZXN0bmV0LTInLFxuICAgIGdycGM6ICd0ZXN0bmV0LTIuYXV0b21hdGVkLnRoZXFybC5vcmc6MTkwMDknLFxuICAgIHN0YXRlOiBmYWxzZSxcbiAgICBoZWlnaHQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Rlc3RuZXQtNCcsXG4gICAgZ3JwYzogJ3Rlc3RuZXQtNC5hdXRvbWF0ZWQudGhlcXJsLm9yZzoxOTAwOScsXG4gICAgc3RhdGU6IGZhbHNlLFxuICAgIGhlaWdodDogMCxcbiAgfSxcbiAgXSxcbn0sXG57XG4gIGlkOiAnbG9jYWxob3N0JyxcbiAgbmFtZTogJ0xvY2FsaG9zdCAoRGVza3RvcCBBcHAgT25seSknLFxuICBkaXNhYmxlZDogJycsXG4gIGV4cGxvcmVyVXJsOiAnaHR0cDovL2V4cGxvcmVyLnRoZXFybC5vcmcnLFxuICB0eXBlOiAnZGVza3RvcCcsXG4gIGhlYWx0aHk6IGZhbHNlLFxuICBub2RlczogW3tcbiAgICBpZDogJ2xvY2FsaG9zdCcsXG4gICAgZ3JwYzogJ2xvY2FsaG9zdDoxOTAwOScsXG4gICAgc3RhdGU6IGZhbHNlLFxuICAgIGhlaWdodDogMCxcbiAgfV0sXG59LFxuXVxuXG4vLyBkaXNhYmxlIGR1cmluZyBuZXR3b3JrIHVwZ3JhZGVcbi8vIE92ZXJyaWRlIERFRkFVTFRfTkVUV09SS1MgaWYgcHJvdmlkZWQgaW4gc2V0dGluZ3MgZmlsZVxudHJ5IHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuZGVmYXVsdE5ldHdvcmtzLmxlbmd0aCA+IDApIHtcbiAgICAvLyBSZXNldCBERUZBVUxUX05FVFdPUktTXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby11bmRlZlxuICAgIERFRkFVTFRfTkVUV09SS1MgPSBbXVxuICAgIC8vIFNldCBERUZBVUxUX05FVFdPUktTIGZyb20gTWV0ZW9yIHNldHRpbmdzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby11bmRlZlxuICAgIERFRkFVTFRfTkVUV09SS1MgPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLmRlZmF1bHROZXR3b3Jrc1xuICB9XG59IGNhdGNoIChlKSB7XG4gIC8vIG5vIGNvbmZpZ3VyYXRpb24gZmlsZSB1c2VkXG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNlYXJjaCB0aHJvdWdoIHRoZSBERUZBVUxUX05FVFdPUktTIGFycmF5IGFuZCBpZGVudGlmeSBhbmQgcmV0dXJuIGFuXG4vLyBvYmplY3QgYmFzZWQgb24gaXRzICdpZCcgdmFsdWUuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXVuZGVmXG5maW5kTmV0d29ya0RhdGEgPSAoYXJyYXksIGtleSkgPT4ge1xuICBpZiAoKExvY2FsU3RvcmUuZ2V0KCdub2RlSWQnKSA9PT0gJ2N1c3RvbScpICYmIChMb2NhbFN0b3JlLmdldCgnbm9kZVN0YXR1cycpICE9PSAnY29ubmVjdGluZycpKSB7XG4gICAgY29uc3Qgbm9kZURhdGEgPSB7XG4gICAgICBpZDogJ2N1c3RvbScsXG4gICAgICBuYW1lOiBMb2NhbFN0b3JlLmdldCgnY3VzdG9tTm9kZU5hbWUnKSxcbiAgICAgIGRpc2FibGVkOiAnJyxcbiAgICAgIGV4cGxvcmVyVXJsOiBMb2NhbFN0b3JlLmdldCgnY3VzdG9tTm9kZUV4cGxvcmVyVXJsJyksXG4gICAgICB0eXBlOiAnYm90aCcsXG4gICAgICBub2RlczogW3tcbiAgICAgICAgaWQ6ICdjdXN0b20nLFxuICAgICAgICBncnBjOiBMb2NhbFN0b3JlLmdldCgnY3VzdG9tTm9kZUdycGMnKSxcbiAgICAgICAgc3RhdGU6IGZhbHNlLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICB9XSxcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVEYXRhXG4gIH1cbiAgY29uc3Qgb2JqRm91bmQgPSBfLmZpbmQoYXJyYXksIChvYmopID0+IHtcbiAgICBpZiAob2JqLmlkID09PSBrZXkpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSlcbiAgaWYgKG9iakZvdW5kKSB7XG4gICAgcmV0dXJuIG9iakZvdW5kXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cbiIsIi8qIGVzbGludCBuby1jb25zb2xlOjAsIG1heC1sZW46IDAgKi9cbi8qIGdsb2JhbCBfLCBkZWNpbWFsVG9CaW5hcnksIERFRkFVTFRfTkVUV09SS1MsIFNIT1JfUEVSX1FVQU5UQSwgV0FMTEVUX1ZFUlNJT04sICovXG5cbmltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjaydcbmltcG9ydCB7IEJyb3dzZXJQb2xpY3kgfSBmcm9tICdtZXRlb3IvYnJvd3Nlci1wb2xpY3ktY29tbW9uJ1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnQHRoZXFybC9leHBsb3Jlci1oZWxwZXJzJ1xuaW1wb3J0IGdycGMgZnJvbSAnQGdycGMvZ3JwYy1qcydcbmltcG9ydCBwcm90b2xvYWRlciBmcm9tICdAZ3JwYy9wcm90by1sb2FkZXInXG5pbXBvcnQgdG1wIGZyb20gJ3RtcCdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcbmltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJ1xuaW1wb3J0IFRyYW5zcG9ydE5vZGVIaWQgZnJvbSAnQGxlZGdlcmhxL2h3LXRyYW5zcG9ydC1ub2RlLWhpZCdcbmltcG9ydCBRcmwgZnJvbSAnQHRoZXFybC9ody1hcHAtcXJsL2xpYi9RcmwnXG5pbXBvcnQgeyBRUkxQUk9UT19TSEEyNTYgfSBmcm9tICdAdGhlcXJsL3FybC1wcm90by1zaGEyNTYnXG5cbmNvbnN0IFBST1RPX1BBVEggPSBBc3NldHMuYWJzb2x1dGVGaWxlUGF0aCgncXJsYmFzZS5wcm90bycpLnNwbGl0KFxuICAncXJsYmFzZS5wcm90bydcbilbMF1cblxuLy8gQXBwbHkgQnJvd3NlclBvbGljeVxuQnJvd3NlclBvbGljeS5jb250ZW50LmRpc2FsbG93SW5saW5lU2NyaXB0cygpXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dTdHlsZU9yaWdpbignZm9udHMuZ29vZ2xlYXBpcy5jb20nKVxuQnJvd3NlclBvbGljeS5jb250ZW50LmFsbG93Rm9udE9yaWdpbignY2RuLmpzZGVsaXZyLm5ldCcpXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dTdHlsZU9yaWdpbignY2RuLmpzZGVsaXZyLm5ldCcpXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dGb250T3JpZ2luKCdmb250cy5nc3RhdGljLmNvbScpXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dGb250T3JpZ2luKCdmb250cy5jZG5mb250cy5jb20nKVxuQnJvd3NlclBvbGljeS5jb250ZW50LmFsbG93U3R5bGVPcmlnaW4oJ2ZvbnRzLmNkbmZvbnRzLmNvbScpXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dGb250RGF0YVVybCgpXG5Ccm93c2VyUG9saWN5LmNvbnRlbnQuYWxsb3dEYXRhVXJsRm9yQWxsKClcblxuLy8gQW4gYXJyYXkgb2YgZ3JwYyBjb25uZWN0aW9ucyBhbmQgYXNzb2NpYXRlZCBwcm90byBmaWxlIHBhdGhzXG5jb25zdCBxcmxDbGllbnQgPSBbXVxuXG5mdW5jdGlvbiB0b0J1ZmZlcihhYikge1xuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhYilcbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5jb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yLCBtZXNzYWdlLCBhbGVydCkgPT4ge1xuICBjb25zdCBkID0gbmV3IERhdGUoKVxuICBjb25zdCBnZXRUaW1lID0gZC50b1VUQ1N0cmluZygpXG4gIGNvbnNvbGUubG9nKGAke2FsZXJ0fSBbVGltZXN0YW1wOiAke2dldFRpbWV9XSAke2Vycm9yfWApXG4gIGNvbnN0IG1ldGVvckVycm9yID0gbmV3IE1ldGVvci5FcnJvcihcbiAgICA1MDAsXG4gICAgYFske2dldFRpbWV9XSAke21lc3NhZ2V9ICgke2Vycm9yfSlgXG4gIClcbiAgcmV0dXJuIG1ldGVvckVycm9yXG59XG5cbi8vIExvYWQgdGhlIHFybC5wcm90byBnUlBDIGNsaWVudCBpbnRvIHFybENsaWVudCBmcm9tIGEgcmVtb3RlIG5vZGUuXG5jb25zdCBsb2FkR3JwY0NsaWVudCA9IChlbmRwb2ludCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBrZWVwQ2FzZTogdHJ1ZSxcbiAgICBsb25nczogU3RyaW5nLFxuICAgIGVudW1zOiBTdHJpbmcsXG4gICAgZGVmYXVsdHM6IHRydWUsXG4gICAgb25lb2ZzOiB0cnVlLFxuICAgIGluY2x1ZGVEaXJzOiBbUFJPVE9fUEFUSF0sXG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBMb2FkIHFybGJhc2UucHJvdG8gYW5kIGZldGNoIGN1cnJlbnQgcXJsLnByb3RvIGZyb20gbm9kZVxuICAgIHByb3RvbG9hZGVyXG4gICAgICAubG9hZChgJHtQUk9UT19QQVRIfXFybGJhc2UucHJvdG9gKVxuICAgICAgLnRoZW4oKHBhY2thZ2VEZWZpbml0aW9uQmFzZSkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlR3JwY09iamVjdCA9IGdycGMubG9hZFBhY2thZ2VEZWZpbml0aW9uKHBhY2thZ2VEZWZpbml0aW9uQmFzZSlcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IGJhc2VHcnBjT2JqZWN0LnFybC5CYXNlKFxuICAgICAgICAgIGVuZHBvaW50LFxuICAgICAgICAgIGdycGMuY3JlZGVudGlhbHMuY3JlYXRlSW5zZWN1cmUoKVxuICAgICAgICApXG4gICAgICAgIGNsaWVudC5nZXROb2RlSW5mbyh7fSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGZldGNoaW5nIHFybC5wcm90byBmcm9tICR7ZW5kcG9pbnR9YClcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgbnVsbClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV3JpdGUgYSBuZXcgdGVtcCBmaWxlIGZvciB0aGlzIGdycGMgY29ubmVjdGlvblxuICAgICAgICAgICAgY29uc3QgcXJsUHJvdG9GaWxlUGF0aCA9IHRtcC5maWxlU3luYyh7XG4gICAgICAgICAgICAgIG1vZGU6ICcwNjQ0JyxcbiAgICAgICAgICAgICAgcHJlZml4OiAncXJsLScsXG4gICAgICAgICAgICAgIHBvc3RmaXg6ICcucHJvdG8nLFxuICAgICAgICAgICAgfSkubmFtZVxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKHFybFByb3RvRmlsZVBhdGgsIHJlcy5ncnBjUHJvdG8sIChmc0VycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZnNFcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmc0VycilcbiAgICAgICAgICAgICAgICB0aHJvdyBmc0VyclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCB7IGFsbG93VW5jaGVja3N1bW1lZE5vZGVzIH0gPSBNZXRlb3Iuc2V0dGluZ3NcbiAgICAgICAgICAgICAgaWYgKGFsbG93VW5jaGVja3N1bW1lZE5vZGVzICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYWxsb3dVbmNoZWNrc3VtbWVkTm9kZXMgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIE5vdyByZWFkIHRoZSBzYXZlZCBxcmwucHJvdG8gZmlsZSBzbyB3ZSBjYW4gY2FsY3VsYXRlIGEgaGFzaCBmcm9tIGl0XG4gICAgICAgICAgICAgIGZzLnJlYWRGaWxlKHFybFByb3RvRmlsZVBhdGgsIChlcnJSLCBjb250ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmc0Vycikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnNFcnIpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBmc0VyclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaGFzaCBvZiB0aGUgcXJsLnByb3RvIGZpbGUgY29udGVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBwcm90b0ZpbGVXb3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQcm90b0hhc2ggPSBDcnlwdG9KUy5TSEEyNTYoXG4gICAgICAgICAgICAgICAgICBwcm90b0ZpbGVXb3JkQXJyYXlcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5IZXgpXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNhbGN1bGF0ZWQgcXJsLnByb3RvIGhhc2ggbWF0Y2hlcyB0aGUgdmVyaWZpZWQgb25lIGZvciB0aGlzIHZlcnNpb24sXG4gICAgICAgICAgICAgICAgLy8gY29udGludWUgdG8gdmVyaWZ5IHRoZSBncnBjIG9iamVjdCBsb2FkZWQgZnJvbSB0aGUgcHJvdG8gYWxzbyBtYXRjaGVzIHRoZSBjb3JyZWN0XG4gICAgICAgICAgICAgICAgLy8gc2hhc3VtLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgJ3Byb3RvOiBjaGVja2luZyB0aGF0IGNhbGMgb2YgJ1xuICAgICAgICAgICAgICAgICAgICArIGNhbGN1bGF0ZWRQcm90b0hhc2hcbiAgICAgICAgICAgICAgICAgICAgKyAnIGlzIHZhbGlkJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIFFSTFBST1RPX1NIQTI1Ni5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnByb3RvU2hhMjU2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5wcm90b1NoYTI1NiA9PT0gY2FsY3VsYXRlZFByb3RvSGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUud2FsbGV0UHJvdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLndhbGxldFByb3RvID09PSBjYWxjdWxhdGVkUHJvdG9IYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHZlcmlmaWVkID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICB8fCBhbGxvd1VuY2hlY2tzdW1tZWROb2RlcyA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcHJvdG9sb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgLmxvYWQocXJsUHJvdG9GaWxlUGF0aCwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHBhY2thZ2VEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JwY09iamVjdCA9IGdycGMubG9hZFBhY2thZ2VEZWZpbml0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnZURlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNwZWN0IHRoZSBvYmplY3QgYW5kIGNvbnZlcnQgdG8gc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdycGNPYmplY3RTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuaW5zcGVjdChncnBjT2JqZWN0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dIaWRkZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGhhc2ggb2YgdGhlIGdycGMgb2JqZWN0IHN0cmluZyByZXR1cm5lZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3RvT2JqZWN0V29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBncnBjT2JqZWN0U3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRPYmplY3RIYXNoID0gQ3J5cHRvSlMuU0hBMjU2KFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9PYmplY3RXb3JkQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICApLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5IZXgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZ3JwYyBvYmplY3Qgc2hhc3VtIG1hdGNoZXMsIGVzdGFibGlzaCB0aGUgZ3JwYyBjb25uZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29iamVjdDogY2hlY2tpbmcgdGhhdCBjYWxjIG9mICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBjYWxjdWxhdGVkT2JqZWN0SGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICArICcgaXMgdmFsaWQnXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJpZmllZE9iamVjdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgUVJMUFJPVE9fU0hBMjU2LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUub2JqZWN0U2hhMjU2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5vYmplY3RTaGEyNTYgPT09IGNhbGN1bGF0ZWRPYmplY3RIYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpZWRPYmplY3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS53YWxsZXRQcm90bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUud2FsbGV0UHJvdG8gPT09IGNhbGN1bGF0ZWRPYmplY3RIYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyaWZpZWRPYmplY3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJpZmllZE9iamVjdCA9PT0gdHJ1ZSB8fCBhbGxvd1VuY2hlY2tzdW1tZWROb2RlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBnUlBDIENvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYWtpbmcgR1JQQyBQdWJsaWNBUEkgY29ubmVjdGlvbiB0byAnICsgZW5kcG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBxcmxDbGllbnRbZW5kcG9pbnRdID0gbmV3IGdycGNPYmplY3QucXJsLlB1YmxpY0FQSShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdycGMuY3JlZGVudGlhbHMuY3JlYXRlSW5zZWN1cmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcXJsQ2xpZW50IGxvYWRlZCBmb3IgJHtlbmRwb2ludH1gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBncnBjIG9iamVjdCBzaGFzdW0gZG9lcyBub3QgbWF0Y2ggdmVyaWZpZWQga25vd24gc2hhc3VtXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3VsZCBiZSBsb2NhbCBzaWRlIGF0dGFjayBjaGFuZ2luZyB0aGUgcHJvdG8gZmlsZSBpbiBiZXR3ZWVuIHZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBncnBjIGNvbm5lY3Rpb24gZXN0YWJsaXNobWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBJbnZhbGlkIHFybC5wcm90byBncnBjIG9iamVjdCBzaGFzdW0gLSBub2RlIHZlcnNpb246ICR7cmVzLnZlcnNpb259LCBxcmwucHJvdG8gb2JqZWN0IHNoYTI1NjogJHtjYWxjdWxhdGVkT2JqZWN0SGFzaH1gXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgSW52YWxpZCBxcmwucHJvdG8gZ3JwYyBvYmplY3Qgc2hhc3VtIC0gbm9kZSB2ZXJzaW9uOiAke3Jlcy52ZXJzaW9ufSwgcXJsLnByb3RvIG9iamVjdCBzaGEyNTY6ICR7Y2FsY3VsYXRlZE9iamVjdEhhc2h9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJyoqRVJST1IvY29ubmVjdCoqJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIHFybC5wcm90byBmaWxlIHNoYXN1bSBkb2VzIG5vdCBtYXRjaCB2ZXJpZmllZCBrbm93biBzaGFzdW1cbiAgICAgICAgICAgICAgICAgIC8vIENvdWxkIGJlIG5vZGUgYWN0aW5nIGluIGJhZCBmYWl0aC5cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBgSW52YWxpZCBxcmwucHJvdG8gc2hhc3VtIC0gbm9kZSB2ZXJzaW9uOiAke3Jlcy52ZXJzaW9ufSwgcXJsLnByb3RvIHNoYTI1NjogJHtjYWxjdWxhdGVkUHJvdG9IYXNofWBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgIGBJbnZhbGlkIHFybC5wcm90byBzaGFzdW0gLSBub2RlIHZlcnNpb246ICR7cmVzLnZlcnNpb259LCBxcmwucHJvdG8gc2hhMjU2OiAke2NhbGN1bGF0ZWRQcm90b0hhc2h9YCxcbiAgICAgICAgICAgICAgICAgICAgJyoqRVJST1IvY29ubmVjdCoqJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdub2RlIGNvbm5lY3Rpb24gZXJyb3IgZXhjZXB0aW9uJylcbiAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgIGVycixcbiAgICAgIGBDYW5ub3QgYWNjZXNzIG5vZGU6ICR7ZW5kcG9pbnR9YCxcbiAgICAgICcqKkVSUk9SL2Nvbm5lY3QqKidcbiAgICApXG4gICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgfVxufVxuXG4vLyBFc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggYSByZW1vdGUgbm9kZS5cbi8vIElmIHRoZXJlIGlzIG5vIGFjdGl2ZSBzZXJ2ZXIgc2lkZSBjb25uZWN0aW9uIGZvciB0aGUgcmVxdWVzdGVkIG5vZGUsXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgY2FsbCBsb2FkR3JwY0NsaWVudCB0byBlc3RhYmxpc2ggb25lLlxuY29uc3QgY29ubmVjdFRvTm9kZSA9IChlbmRwb2ludCwgY2FsbGJhY2spID0+IHtcbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgaXMgYW4gZXhpc3Rpbmcgb2JqZWN0IHRvIHN0b3JlIHRoZSBnUlBDIGNvbm5lY3Rpb25cbiAgaWYgKHFybENsaWVudC5oYXNPd25Qcm9wZXJ0eShlbmRwb2ludCkgPT09IHRydWUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdFeGlzdGluZyBjb25uZWN0aW9uIGZvdW5kIGZvciAnLFxuICAgICAgZW5kcG9pbnQsXG4gICAgICAnIC0gYXR0ZW1wdGluZyBnZXROb2RlU3RhdGUnXG4gICAgKVxuICAgIC8vIFRoZXJlIGlzIGFscmVhZHkgYSBnUlBDIG9iamVjdCBmb3IgdGhpcyBzZXJ2ZXIgc3RvcmVkLlxuICAgIC8vIEF0dGVtcHQgdG8gY29ubmVjdCB0byBpdC5cbiAgICB0cnkge1xuICAgICAgcXJsQ2xpZW50W2VuZHBvaW50XS5nZXROb2RlU3RhdGUoe30sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZmV0Y2hpbmcgbm9kZSBzdGF0ZSBmb3IgJywgZW5kcG9pbnQpXG4gICAgICAgICAgLy8gSWYgaXQgZXJyb3JzLCB3ZSdyZSBnb2luZyB0byByZW1vdmUgdGhlIG9iamVjdCBhbmQgYXR0ZW1wdCB0byBjb25uZWN0IGFnYWluLlxuICAgICAgICAgIGRlbGV0ZSBxcmxDbGllbnRbZW5kcG9pbnRdXG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyByZS1jb25uZWN0aW9uIHRvICcsIGVuZHBvaW50KVxuXG4gICAgICAgICAgbG9hZEdycGNDbGllbnQoZW5kcG9pbnQsIChsb2FkRXJyLCBsb2FkUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkRXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gcmUtY29ubmVjdCB0byBub2RlICR7ZW5kcG9pbnR9YClcbiAgICAgICAgICAgICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICdDYW5ub3QgY29ubmVjdCB0byByZW1vdGUgbm9kZScsXG4gICAgICAgICAgICAgICAgJyoqRVJST1IvY29ubmVjdGlvbioqICdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byAke2VuZHBvaW50fWApXG4gICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGxvYWRSZXNwb25zZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBOb2RlIHN0YXRlIGZvciAke2VuZHBvaW50fSBva2ApXG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnbm9kZSBzdGF0ZSBlcnJvciBleGNlcHRpb24nKVxuICAgICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICAgIGVycixcbiAgICAgICAgJ0Nhbm5vdCBhY2Nlc3MgQVBJL2dldE5vZGVTdGF0ZScsXG4gICAgICAgICcqKkVSUk9SL2dldE5vZGVTdGF0ZSoqJ1xuICAgICAgKVxuICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYEVzdGFibGlzaGluZyBuZXcgY29ubmVjdGlvbiB0byAke2VuZHBvaW50fWApXG4gICAgLy8gV2UndmUgbm90IGNvbm5lY3RlZCB0byB0aGlzIG5vZGUgYmVmb3JlLCBsZXQncyBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHRvIGl0LlxuICAgIGxvYWRHcnBjQ2xpZW50KGVuZHBvaW50LCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gY29ubmVjdCB0byBub2RlICR7ZW5kcG9pbnR9YClcbiAgICAgICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICAgICAgZXJyLFxuICAgICAgICAgICdDYW5ub3QgY29ubmVjdCB0byByZW1vdGUgbm9kZScsXG4gICAgICAgICAgJyoqRVJST1IvY29ubmVjdGlvbioqICdcbiAgICAgICAgKVxuICAgICAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbm5lY3RlZCB0byAke2VuZHBvaW50fWApXG4gICAgICAgIHFybENsaWVudFtlbmRwb2ludF0uZ2V0Tm9kZVN0YXRlKHt9LCAoZXJyU3RhdGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKGVyclN0YXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIHF1ZXJ5IG5vZGUgc3RhdGUgJHtlbmRwb2ludH1gKVxuICAgICAgICAgICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgJ0Nhbm5vdCBjb25uZWN0IHRvIHJlbW90ZSBub2RlJyxcbiAgICAgICAgICAgICAgJyoqRVJST1IvY29ubmVjdGlvbioqICdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGNoZWNrTmV0d29ya0hlYWx0aCA9ICh1c2VyTmV0d29yaywgY2FsbGJhY2spID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgbmV0d29ya0hlYWx0aHkgPSBmYWxzZVxuXG4gICAgLy8gRGV0ZXJtaW5lIGN1cnJlbnQgYWN0aXZlIG5vZGVzXG4gICAgREVGQVVMVF9ORVRXT1JLUy5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAvLyBPbmx5IGxvb2sgYXQgaGVhbHRoIG9mIHVzZXJOZXR3b3JrXG4gICAgICBpZiAobmV0d29yay5pZCA9PT0gdXNlck5ldHdvcmspIHtcbiAgICAgICAgaWYgKG5ldHdvcmsuaGVhbHRoeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG5ldHdvcmtIZWFsdGh5ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChuZXR3b3JrSGVhbHRoeSA9PT0gdHJ1ZSkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodHJ1ZSwgeyBlcnJvcjogJ05ldHdvcmsgdW5oZWFsdGh5JyB9KVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0V4Y2VwdGlvbiBpbiBjaGVja05ldHdvcmtIZWFsdGgnKVxuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfVxufVxuXG4vLyBDb25uZWN0IHRvIGFsbCBub2Rlc1xuY29uc3QgY29ubmVjdE5vZGVzID0gKCkgPT4ge1xuICAvLyBFc3RhYmxpc2ggZ1JQQyBjb25uZWN0aW9ucyB3aXRoIGFsbCBlbmFibGVkIERFRkFVTFRfTkVUV09SS1NcbiAgREVGQVVMVF9ORVRXT1JLUy5mb3JFYWNoKChuZXR3b3JrLCBuZXR3b3JrSW5kZXgpID0+IHtcbiAgICBpZiAobmV0d29yay5kaXNhYmxlZCA9PT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgQXR0ZW1wdGluZyB0byBjcmVhdGUgZ1JQQyBjb25uZWN0aW9ucyB0byBuZXR3b3JrOiAke25ldHdvcmsubmFtZX0gLi4uYFxuICAgICAgKVxuXG4gICAgICAvLyBMb29wIGVhY2ggbm9kZSBpbiB0aGUgbmV0d29yayBhbmQgZXN0YWJsaXNoIGEgZ1JQQyBjb25uZWN0aW9uLlxuICAgICAgY29uc3QgbmV0d29ya05vZGVzID0gbmV0d29yay5ub2Rlc1xuICAgICAgbmV0d29ya05vZGVzLmZvckVhY2goKG5vZGUsIG5vZGVJbmRleCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgQXR0ZW1wdGluZyB0byBjcmVhdGUgZ1JQQyBjb25uZWN0aW9uIHRvIG5ldHdvcms6ICR7bmV0d29yay5uYW1lfSwgbm9kZTogJHtub2RlLmlkfSAoJHtub2RlLmdycGN9KSAuLi5gXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBub2RlLmdycGNcbiAgICAgICAgY29ubmVjdFRvTm9kZShlbmRwb2ludCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEZhaWxlZCB0byBjb25uZWN0IHRvIG5vZGUgJHtlbmRwb2ludH1gKVxuICAgICAgICAgICAgREVGQVVMVF9ORVRXT1JLU1tuZXR3b3JrSW5kZXhdLm5vZGVzW25vZGVJbmRleF0uc3RhdGUgPSBmYWxzZVxuICAgICAgICAgICAgREVGQVVMVF9ORVRXT1JLU1tuZXR3b3JrSW5kZXhdLm5vZGVzW25vZGVJbmRleF0uaGVpZ2h0ID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHRvICR7ZW5kcG9pbnR9YClcbiAgICAgICAgICAgIERFRkFVTFRfTkVUV09SS1NbbmV0d29ya0luZGV4XS5ub2Rlc1tub2RlSW5kZXhdLnN0YXRlID0gdHJ1ZVxuICAgICAgICAgICAgREVGQVVMVF9ORVRXT1JLU1tuZXR3b3JrSW5kZXhdLm5vZGVzW25vZGVJbmRleF0uaGVpZ2h0ID0gcGFyc2VJbnQoXG4gICAgICAgICAgICAgIHJlcy5pbmZvLmJsb2NrX2hlaWdodCxcbiAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IG9uZSBub2RlIGluIHRoZSBuZXR3b3JrIGlzIG9ubGluZSwgc2V0IG5ldHdvcmsgYXMgaGVhbHRoeVxuICAgICAgICAgICAgREVGQVVMVF9ORVRXT1JLU1tuZXR3b3JrSW5kZXhdLmhlYWx0aHkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbi8vIFdyYXBwZXIgdG8gcHJvdmlkZSBoaWdobHkgYXZhaWxhYmxlIEFQSSByZXN1bHRzIGluIHRoZSBldmVudFxuLy8gdGhlIHByaW1hcnkgb3Igc2Vjb25kYXJ5IG5vZGVzIGdvIG9mZmxpbmVcbmNvbnN0IHFybEFwaSA9IChhcGksIHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIC8vIEhhbmRsZSBtdWx0aSBub2RlIG5ldHdvcmsgYXBpIHJlcXVlc3RzXG4gIGlmIChcbiAgICByZXF1ZXN0Lm5ldHdvcmsgPT09ICdkZXZuZXQnXG4gICAgfHwgcmVxdWVzdC5uZXR3b3JrID09PSAndGVzdG5ldCdcbiAgICB8fCByZXF1ZXN0Lm5ldHdvcmsgPT09ICdtYWlubmV0J1xuICApIHtcbiAgICAvLyBTdG9yZSBhY3RpdmUgbm9kZXNcbiAgICBjb25zdCBhY3RpdmVOb2RlcyA9IFtdXG5cbiAgICAvLyBEZXRlcm1pbmUgY3VycmVudCBhY3RpdmUgbm9kZXNcbiAgICBERUZBVUxUX05FVFdPUktTLmZvckVhY2goKG5ldHdvcmspID0+IHtcbiAgICAgIC8vIE9ubHkgZ2V0IG5vZGVzIGZyb20gdXNlciBzZWxlY3RlZCBuZXR3b3JrXG4gICAgICBpZiAobmV0d29yay5pZCA9PT0gcmVxdWVzdC5uZXR3b3JrKSB7XG4gICAgICAgIGNvbnN0IG5ldHdvcmtOb2RlcyA9IG5ldHdvcmsubm9kZXNcbiAgICAgICAgbmV0d29ya05vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5zdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWN0aXZlTm9kZXMucHVzaChub2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gRGV0ZXJtaW5lIG5vZGUgd2l0aCBoaWdoZXN0IGJsb2NrIGhlaWdodCBhbmQgc2V0IGFzIGJlc3ROb2RlXG4gICAgY29uc3QgYmVzdE5vZGUgPSB7fVxuICAgIGJlc3ROb2RlLmdycGMgPSAnJ1xuICAgIGJlc3ROb2RlLmhlaWdodCA9IDBcbiAgICBhY3RpdmVOb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBpZiAobm9kZS5oZWlnaHQgPiBiZXN0Tm9kZS5oZWlnaHQpIHtcbiAgICAgICAgYmVzdE5vZGUuZ3JwYyA9IG5vZGUuZ3JwY1xuICAgICAgICBiZXN0Tm9kZS5oZWlnaHQgPSBub2RlLmhlaWdodFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZygnYmVzdE5vZGU6JywgYmVzdE5vZGUpXG5cbiAgICAvLyBJZiBhbGwgbm9kZXMgYXJlIG9mZmxpbmUsIGZhaWxcbiAgICBpZiAoYWN0aXZlTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgJ1RoZSB3YWxsZXQgc2VydmVyIGNhbm5vdCBjb25uZWN0IHRvIGFueSBBUEkgbm9kZScsXG4gICAgICAgICdDYW5ub3QgY29ubmVjdCB0byBBUEknLFxuICAgICAgICAnKipFUlJPUi9ub0FjdGl2ZU5vZGVzL2IqKidcbiAgICAgIClcbiAgICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1ha2UgdGhlIEFQSSBjYWxsXG4gICAgICAvLyBEZWxldGUgbmV0d29yayBmcm9tIHJlcXVlc3Qgb2JqZWN0XG4gICAgICBkZWxldGUgcmVxdWVzdC5uZXR3b3JrXG4gICAgICBjb25zb2xlLmxvZygnTWFraW5nJywgYXBpLCAncmVxdWVzdCB0bycsIGJlc3ROb2RlLmdycGMpXG4gICAgICBxcmxDbGllbnRbYmVzdE5vZGUuZ3JwY11bYXBpXShyZXF1ZXN0LCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChhcGkgPT09ICdwdXNoVHJhbnNhY3Rpb24nKSB7XG4gICAgICAgICAgcmVzcG9uc2UucmVsYXllZCA9IGJlc3ROb2RlLmdycGNcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zdCBteUVycm9yID0gbmV3IE1ldGVvci5FcnJvcig1MDAsIGVycm9yLmRldGFpbHMpXG4gICAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIGN1c3RvbSBhbmQgbG9jYWxob3N0IGNvbm5lY3Rpb25zXG4gICAgY29uc29sZS5sb2coJ0hhbmRsaW5nIGN1c3RvbSBBUEkgY2FsbCcpXG4gICAgY29uc3QgYXBpRW5kcG9pbnQgPSByZXF1ZXN0Lm5ldHdvcmtcbiAgICAvLyBEZWxldGUgbmV0d29yayBmcm9tIHJlcXVlc3Qgb2JqZWN0XG4gICAgZGVsZXRlIHJlcXVlc3QubmV0d29ya1xuICAgIGNvbnNvbGUubG9nKCdNYWtpbmcnLCBhcGksICdyZXF1ZXN0IHRvJywgYXBpRW5kcG9pbnQpXG5cbiAgICBxcmxDbGllbnRbYXBpRW5kcG9pbnRdW2FwaV0ocmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGFwaSA9PT0gJ3B1c2hUcmFuc2FjdGlvbicpIHtcbiAgICAgICAgcmVzcG9uc2UucmVsYXllZCA9IGFwaUVuZHBvaW50XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgbXlFcnJvciA9IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCBlcnJvci5kZXRhaWxzKVxuICAgICAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjYWxsIGdldEtub3duUGVlcnMgQVBJLlxuY29uc3QgZ2V0S25vd25QZWVycyA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICBxcmxBcGkoJ2dldEtub3duUGVlcnMnLCByZXF1ZXN0LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBnZXRTdGF0cyA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICB0cnkge1xuICAgIHFybEFwaSgnZ2V0U3RhdHMnLCByZXF1ZXN0LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgJ0Nhbm5vdCBhY2Nlc3MgQVBJL0dldFN0YXRzJyxcbiAgICAgICAgICAnKipFUlJPUi9nZXRTdGF0cyoqICdcbiAgICAgICAgKVxuICAgICAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICBlcnIsXG4gICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0U3RhdHMnLFxuICAgICAgJyoqRVJST1IvR2V0U3RhdHMqKidcbiAgICApXG4gICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgfVxufVxuXG5jb25zdCBnZXRPYmplY3QgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgdHJ5IHtcbiAgICBxcmxBcGkoJ0dldE9iamVjdCcsIHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0T2JqZWN0JyxcbiAgICAgICAgICAnKipFUlJPUi9HZXRPYmplY3QqKidcbiAgICAgICAgKVxuICAgICAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICBlcnJvcixcbiAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRPYmplY3QnLFxuICAgICAgJyoqRVJST1IvR2V0T2JqZWN0KionXG4gICAgKVxuICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gIH1cbn1cblxuY29uc3QgaGVscGVyc2FkZHJlc3NUcmFuc2FjdGlvbnMgPSAocmVzcG9uc2UpID0+IHtcbiAgY29uc3Qgb3V0cHV0ID0gW11cbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIF8uZWFjaChyZXNwb25zZS50cmFuc2FjdGlvbnNfZGV0YWlsLCAodHgpID0+IHtcbiAgICBjb25zdCB0eEVkaXRlZCA9IHR4XG4gICAgaWYgKHR4LnR4LnRyYW5zZmVyKSB7XG4gICAgICBjb25zdCBoZXhsaWZpZWQgPSBbXVxuICAgICAgXy5lYWNoKHR4LnR4LnRyYW5zZmVyLmFkZHJzX3RvLCAodHhPdXRwdXQpID0+IHtcbiAgICAgICAgaGV4bGlmaWVkLnB1c2goYFEke0J1ZmZlci5mcm9tKHR4T3V0cHV0KS50b1N0cmluZygnaGV4Jyl9YClcbiAgICAgIH0pXG4gICAgICB0eEVkaXRlZC50eC50cmFuc2Zlci5hZGRyc190byA9IGhleGxpZmllZFxuICAgIH1cbiAgICBpZiAodHgudHgudG9rZW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKHR4LnR4LnRva2VuKVxuICAgICAgaWYgKFxuICAgICAgICBCdWZmZXIuZnJvbSh0eC50eC50b2tlbi5zeW1ib2wpLnRvU3RyaW5nKCdoZXgnKS5zbGljZSgwLCA4KSAhPT0gJzAwZmYwMGZmJ1xuICAgICAgKSB7XG4gICAgICAgIHR4RWRpdGVkLnR4LnRva2VuLm5hbWUgPSBCdWZmZXIuZnJvbSh0eC50eC50b2tlbi5uYW1lKS50b1N0cmluZygpXG4gICAgICAgIHR4RWRpdGVkLnR4LnRva2VuLnN5bWJvbCA9IEJ1ZmZlci5mcm9tKHR4LnR4LnRva2VuLnN5bWJvbCkudG9TdHJpbmcoKVxuICAgICAgICB0eEVkaXRlZC50eC50b2tlbi5vd25lciA9IGBRJHtCdWZmZXIuZnJvbSh0eC50eC50b2tlbi5vd25lcikudG9TdHJpbmcoXG4gICAgICAgICAgJ2hleCdcbiAgICAgICAgKX1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eEVkaXRlZC50eC50b2tlbi5uYW1lID0gQnVmZmVyLmZyb20odHgudHgudG9rZW4ubmFtZSkudG9TdHJpbmcoJ2hleCcpXG4gICAgICAgIHR4RWRpdGVkLnR4LnRva2VuLnN5bWJvbCA9IEJ1ZmZlci5mcm9tKHR4LnR4LnRva2VuLnN5bWJvbCkudG9TdHJpbmcoJ2hleCcpXG4gICAgICAgIHR4RWRpdGVkLnR4LnRva2VuLm93bmVyID0gYFEke0J1ZmZlci5mcm9tKHR4LnR4LnRva2VuLm93bmVyKS50b1N0cmluZyhcbiAgICAgICAgICAnaGV4J1xuICAgICAgICApfWBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR4LnR4LnRyYW5zZmVyX3Rva2VuKSB7XG4gICAgICBjb25zdCBoZXhsaWZpZWQgPSBbXVxuICAgICAgdHhFZGl0ZWQudHgudHJhbnNmZXJfdG9rZW4udG9rZW5fdHhoYXNoID0gQnVmZmVyLmZyb20oXG4gICAgICAgIHR4LnR4LnRyYW5zZmVyX3Rva2VuLnRva2VuX3R4aGFzaFxuICAgICAgKS50b1N0cmluZygnaGV4JylcbiAgICAgIF8uZWFjaCh0eC50eC50cmFuc2Zlcl90b2tlbi5hZGRyc190bywgKHR4T3V0cHV0KSA9PiB7XG4gICAgICAgIGhleGxpZmllZC5wdXNoKGBRJHtCdWZmZXIuZnJvbSh0eE91dHB1dCkudG9TdHJpbmcoJ2hleCcpfWApXG4gICAgICB9KVxuICAgICAgdHhFZGl0ZWQudHgudHJhbnNmZXJfdG9rZW4uYWRkcnNfdG8gPSBoZXhsaWZpZWRcbiAgICB9XG4gICAgaWYgKHR4LnR4LmNvaW5iYXNlKSB7XG4gICAgICBpZiAodHgudHguY29pbmJhc2UuYWRkcl90bykge1xuICAgICAgICB0eEVkaXRlZC50eC5jb2luYmFzZS5hZGRyX3RvID0gYFEke0J1ZmZlci5mcm9tKFxuICAgICAgICAgIHR4RWRpdGVkLnR4LmNvaW5iYXNlLmFkZHJfdG9cbiAgICAgICAgKS50b1N0cmluZygnaGV4Jyl9YFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHgudHgudHJhbnNhY3Rpb25faGFzaCkge1xuICAgICAgdHhFZGl0ZWQudHgudHJhbnNhY3Rpb25faGFzaCA9IEJ1ZmZlci5mcm9tKFxuICAgICAgICB0eEVkaXRlZC50eC50cmFuc2FjdGlvbl9oYXNoXG4gICAgICApLnRvU3RyaW5nKCdoZXgnKVxuICAgIH1cbiAgICBpZiAodHgudHgubWFzdGVyX2FkZHIpIHtcbiAgICAgIHR4RWRpdGVkLnR4Lm1hc3Rlcl9hZGRyID0gQnVmZmVyLmZyb20odHhFZGl0ZWQudHgubWFzdGVyX2FkZHIpLnRvU3RyaW5nKFxuICAgICAgICAnaGV4J1xuICAgICAgKVxuICAgIH1cbiAgICBpZiAodHgudHgucHVibGljX2tleSkge1xuICAgICAgdHhFZGl0ZWQudHgucHVibGljX2tleSA9IEJ1ZmZlci5mcm9tKHR4RWRpdGVkLnR4LnB1YmxpY19rZXkpLnRvU3RyaW5nKFxuICAgICAgICAnaGV4J1xuICAgICAgKVxuICAgIH1cbiAgICBpZiAodHgudHguc2lnbmF0dXJlKSB7XG4gICAgICB0eEVkaXRlZC50eC5zaWduYXR1cmUgPSBCdWZmZXIuZnJvbSh0eEVkaXRlZC50eC5zaWduYXR1cmUpLnRvU3RyaW5nKCdoZXgnKVxuICAgIH1cbiAgICBpZiAodHguYmxvY2tfaGVhZGVyX2hhc2gpIHtcbiAgICAgIHR4RWRpdGVkLmJsb2NrX2hlYWRlcl9oYXNoID0gQnVmZmVyLmZyb20oXG4gICAgICAgIHR4RWRpdGVkLmJsb2NrX2hlYWRlcl9oYXNoXG4gICAgICApLnRvU3RyaW5nKCdoZXgnKVxuICAgIH1cbiAgICB0eEVkaXRlZC5hZGRyX2Zyb20gPSBgUSR7QnVmZmVyLmZyb20odHhFZGl0ZWQuYWRkcl9mcm9tKS50b1N0cmluZygnaGV4Jyl9YFxuICAgIG91dHB1dC5wdXNoKHR4RWRpdGVkKVxuICB9KVxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuY29uc3QgZ2V0VHJhbnNhY3Rpb25zQnlBZGRyZXNzID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIHRyeSB7XG4gICAgcXJsQXBpKCdHZXRUcmFuc2FjdGlvbnNCeUFkZHJlc3MnLCByZXF1ZXN0LCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgJ0Nhbm5vdCBhY2Nlc3MgQVBJL0dldFRyYW5zYWN0aW9uc0J5QWRkcmVzcycsXG4gICAgICAgICAgJyoqRVJST1IvR2V0VHJhbnNhY3Rpb25zQnlBZGRyZXNzKionXG4gICAgICAgIClcbiAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSlcbiAgICAgIH1cbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgZXJyb3IsXG4gICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0VHJhbnNhY3Rpb25zQnlBZGRyZXNzJyxcbiAgICAgICcqKkVSUk9SL0dldFRyYW5zYWN0aW9uc0J5QWRkcmVzcyoqJ1xuICAgIClcbiAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICB9XG59XG5cbmNvbnN0IGdldFRva2Vuc0J5QWRkcmVzcyA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICB0cnkge1xuICAgIHFybEFwaSgnR2V0VG9rZW5zQnlBZGRyZXNzJywgcmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRUb2tlbnNCeUFkZHJlc3MnLFxuICAgICAgICAgICcqKkVSUk9SL0dldFRva2Vuc0J5QWRkcmVzcyoqJ1xuICAgICAgICApXG4gICAgICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gICAgICB9XG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgIGVycm9yLFxuICAgICAgJ0Nhbm5vdCBhY2Nlc3MgQVBJL0dldFRva2Vuc0J5QWRkcmVzcycsXG4gICAgICAnKipFUlJPUi9HZXRUb2tlbnNCeUFkZHJlc3MqKidcbiAgICApXG4gICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgfVxufVxuXG5jb25zdCBnZXRNdWx0aVNpZ0FkZHJlc3Nlc0J5QWRkcmVzcyA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICB0cnkge1xuICAgIHFybEFwaSgnR2V0TXVsdGlTaWdBZGRyZXNzZXNCeUFkZHJlc3MnLCByZXF1ZXN0LCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgJ0Nhbm5vdCBhY2Nlc3MgQVBJL0dldE11bHRpU2lnQWRkcmVzc2VzQnlBZGRyZXNzJyxcbiAgICAgICAgICAnKipFUlJPUi9HZXRNdWx0aVNpZ0FkZHJlc3Nlc0J5QWRkcmVzcyoqJ1xuICAgICAgICApXG4gICAgICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSlcbiAgICAgIH1cbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgZXJyb3IsXG4gICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0TXVsdGlTaWdBZGRyZXNzZXNCeUFkZHJlc3MnLFxuICAgICAgJyoqRVJST1IvR2V0TXVsdGlTaWdBZGRyZXNzZXNCeUFkZHJlc3MqKidcbiAgICApXG4gICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgfVxufVxuXG5jb25zdCBnZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIHRyeSB7XG4gICAgcXJsQXBpKCdHZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzJywgcmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzJyxcbiAgICAgICAgICAnKipFUlJPUi9HZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzKionXG4gICAgICAgIClcbiAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICBlcnJvcixcbiAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzJyxcbiAgICAgICcqKkVSUk9SL0dldE11bHRpU2lnU3BlbmRUeHNCeUFkZHJlc3MqKidcbiAgICApXG4gICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgfVxufVxuXG5jb25zdCBnZXRPVFMgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgdHJ5IHtcbiAgICBxcmxBcGkoJ0dldE9UUycsIHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0T1RTJyxcbiAgICAgICAgICAnKipFUlJPUi9nZXRPVFMqKiAnXG4gICAgICAgIClcbiAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICBlcnJvcixcbiAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRPVFMnLFxuICAgICAgJyoqRVJST1IvR2V0T1RTKionXG4gICAgKVxuICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gIH1cbn1cblxuY29uc3QgZ2V0RnVsbEFkZHJlc3NTdGF0ZSA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICB0cnkge1xuICAgIHFybEFwaSgnR2V0QWRkcmVzc1N0YXRlJywgcmVxdWVzdCwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRPcHRpbWl6ZWRBZGRyZXNzU3RhdGUnLFxuICAgICAgICAgICcqKkVSUk9SL2dldEFkZHJlc3NTdGF0ZSoqICdcbiAgICAgICAgKVxuICAgICAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlLmFkZHJlc3MpIHtcbiAgICAgICAgICByZXNwb25zZS5zdGF0ZS5hZGRyZXNzID0gYFEke0J1ZmZlci5mcm9tKFxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdGUuYWRkcmVzc1xuICAgICAgICAgICkudG9TdHJpbmcoJ2hleCcpfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKVxuICAgICAgfVxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbXlFcnJvciA9IGVycm9yQ2FsbGJhY2soXG4gICAgICBlcnJvcixcbiAgICAgICdDYW5ub3QgYWNjZXNzIEFQSS9HZXRBZGRyZXNzU3RhdGUnLFxuICAgICAgJyoqRVJST1IvR2V0QWRkcmVzc1N0YXRlKionXG4gICAgKVxuICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsbCBnZXRBZGRyZXNzU3RhdGUgQVBJXG5jb25zdCBnZXRBZGRyZXNzU3RhdGUgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgdHJ5IHtcbiAgICBxcmxBcGkoJ0dldE9wdGltaXplZEFkZHJlc3NTdGF0ZScsIHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0T3B0aW1pemVkQWRkcmVzc1N0YXRlJyxcbiAgICAgICAgICAnKipFUlJPUi9nZXRBZGRyZXNzU3RhdGUqKiAnXG4gICAgICAgIClcbiAgICAgICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBhcnNlIE9UUyBCaXRmaWVsZCwgYW5kIGdyYWIgdGhlIGxvd2VzdCB1bnVzZWQga2V5XG4gICAgICAgIGNvbnN0IG5ld090c0JpdGZpZWxkID0ge31cbiAgICAgICAgbGV0IGxvd2VzdFVudXNlZE90c0tleSA9IC0xXG4gICAgICAgIGxldCBvdHNCaXRmaWVsZExlbmd0aCA9IDBcbiAgICAgICAgbGV0IHRoaXNPdHNCaXRmaWVsZCA9IFtdXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0ZS5vdHNfYml0ZmllbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXNPdHNCaXRmaWVsZCA9IHJlc3BvbnNlLnN0YXRlLm90c19iaXRmaWVsZFxuICAgICAgICB9XG4gICAgICAgIHRoaXNPdHNCaXRmaWVsZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRoaXNEZWNpbWFsID0gbmV3IFVpbnQ4QXJyYXkoaXRlbSlbMF1cbiAgICAgICAgICBjb25zdCB0aGlzQmluYXJ5ID0gZGVjaW1hbFRvQmluYXJ5KHRoaXNEZWNpbWFsKS5yZXZlcnNlKClcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXggKiA4XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgdGhpc090c0luZGV4ID0gc3RhcnRJbmRleCArIGlcblxuICAgICAgICAgICAgLy8gQWRkIHRvIHBhcnNlZCBhcnJheVxuICAgICAgICAgICAgbmV3T3RzQml0ZmllbGRbdGhpc090c0luZGV4XSA9IHRoaXNCaW5hcnlbaV1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBsb3dlc3QgdW51c2VkIGtleVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzQmluYXJ5W2ldID09PSAwXG4gICAgICAgICAgICAgICYmICh0aGlzT3RzSW5kZXggPCBsb3dlc3RVbnVzZWRPdHNLZXkgfHwgbG93ZXN0VW51c2VkT3RzS2V5ID09PSAtMSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBsb3dlc3RVbnVzZWRPdHNLZXkgPSB0aGlzT3RzSW5kZXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW5jcmVtZW50IG90c0JpdGZpZWxkTGVuZ3RoXG4gICAgICAgICAgICBvdHNCaXRmaWVsZExlbmd0aCArPSAxXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIElmIGFsbCBrZXlzIGluIGJpdGZpZWxkIGFyZSB1c2VkLCBsb3dlc3Qga2V5IHdpbGwgYmUgd2hhdCBpcyBzaG93biBpbiBvdHNfY291bnRlciArIDFcbiAgICAgICAgaWYgKGxvd2VzdFVudXNlZE90c0tleSA9PT0gLTEpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdGUub3RzX2NvdW50ZXIgPT09ICcwJykge1xuICAgICAgICAgICAgbG93ZXN0VW51c2VkT3RzS2V5ID0gb3RzQml0ZmllbGRMZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG93ZXN0VW51c2VkT3RzS2V5ID0gcGFyc2VJbnQocmVzcG9uc2Uuc3RhdGUub3RzX2NvdW50ZXIsIDEwKSArIDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgbnVtYmVyIG9mIGtleXMgdGhhdCBhcmUgY29uc3VtZWRcbiAgICAgICAgbGV0IHRvdGFsS2V5c0NvbnN1bWVkID0gMFxuICAgICAgICAvLyBGaXJzdCBhZGQgYWxsIHRyYWNrZWQga2V5cyBmcm9tIGJpdGZpZWxkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RzQml0ZmllbGRMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChuZXdPdHNCaXRmaWVsZFtpXSA9PT0gMSkge1xuICAgICAgICAgICAgdG90YWxLZXlzQ29uc3VtZWQgKz0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZW4gYWRkIGFueSBleHRyYSBmcm9tIGBvdHNCaXRmaWVsZExlbmd0aGAgdG8gYG90c19jb3VudGVyYFxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdGUub3RzX2NvdW50ZXIgIT09ICcwJykge1xuICAgICAgICAgIHRvdGFsS2V5c0NvbnN1bWVkXG4gICAgICAgICAgICArPSBwYXJzZUludChyZXNwb25zZS5zdGF0ZS5vdHNfY291bnRlciwgMTApIC0gKG90c0JpdGZpZWxkTGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBpbiBPVFMgZmllbGRzIHRvIHJlc3BvbnNlXG4gICAgICAgIHJlc3BvbnNlLm90cyA9IHt9XG4gICAgICAgIHJlc3BvbnNlLm90cy5rZXlzID0gbmV3T3RzQml0ZmllbGRcbiAgICAgICAgcmVzcG9uc2Uub3RzLm5leHRLZXkgPSBsb3dlc3RVbnVzZWRPdHNLZXlcbiAgICAgICAgcmVzcG9uc2Uub3RzLmtleXNDb25zdW1lZCA9IHRvdGFsS2V5c0NvbnN1bWVkXG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlLmFkZHJlc3MpIHtcbiAgICAgICAgICByZXNwb25zZS5zdGF0ZS5hZGRyZXNzID0gYFEke0J1ZmZlci5mcm9tKFxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdGUuYWRkcmVzc1xuICAgICAgICAgICkudG9TdHJpbmcoJ2hleCcpfWBcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLnRhYmxlKHJlc3BvbnNlKVxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSlcbiAgICAgIH1cbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgZXJyb3IsXG4gICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0QWRkcmVzc1N0YXRlJyxcbiAgICAgICcqKkVSUk9SL0dldEFkZHJlc3NTdGF0ZSoqJ1xuICAgIClcbiAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICB9XG59XG5cbmNvbnN0IGdldE11bHRpU2lnQWRkcmVzc1N0YXRlID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIHRyeSB7XG4gICAgcXJsQXBpKCdHZXRNdWx0aVNpZ0FkZHJlc3NTdGF0ZScsIHJlcXVlc3QsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zdCBteUVycm9yID0gZXJyb3JDYWxsYmFjayhcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0TXVsdGlTaWdBZGRyZXNzU3RhdGUnLFxuICAgICAgICAgICcqKkVSUk9SL2dldE11bHRpU2lnQWRkcmVzc1N0YXRlKiogJ1xuICAgICAgICApXG4gICAgICAgIGNhbGxiYWNrKG15RXJyb3IsIG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSlcbiAgICAgIH1cbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG15RXJyb3IgPSBlcnJvckNhbGxiYWNrKFxuICAgICAgZXJyb3IsXG4gICAgICAnQ2Fubm90IGFjY2VzcyBBUEkvR2V0TXVsdGlTaWdBZGRyZXNzU3RhdGUnLFxuICAgICAgJyoqRVJST1IvR2V0TXVsdGlTaWdBZGRyZXNzU3RhdGUqKidcbiAgICApXG4gICAgY2FsbGJhY2sobXlFcnJvciwgbnVsbClcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBjYWxsIGdldE9iamVjdCBBUEkgYW5kIGV4dHJhY3QgYSB0eG4gSGFzaC4uXG5jb25zdCBnZXRUeG5IYXNoID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHR4bkhhc2ggPSBCdWZmZXIuZnJvbShyZXF1ZXN0LnF1ZXJ5LCAnaGV4JylcblxuICB0cnkge1xuICAgIHFybEFwaShcbiAgICAgICdnZXRPYmplY3QnLFxuICAgICAgeyBxdWVyeTogdHhuSGFzaCwgbmV0d29yazogcmVxdWVzdC5uZXR3b3JrIH0sXG4gICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vyci5tZXNzYWdlfWApXG4gICAgICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYWxsYmFjayhgQ2F1Z2h0IEVycm9yOiAke2Vycn1gLCBudWxsKVxuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNhbGwgdHJhbnNmZXJDb2lucyBBUElcbmNvbnN0IHRyYW5zZmVyQ29pbnMgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgdHggPSB7XG4gICAgLy8gbWFzdGVyX2FkZHI6IHJlcXVlc3QuZnJvbUFkZHJlc3MsXG4gICAgYWRkcmVzc2VzX3RvOiByZXF1ZXN0LmFkZHJlc3Nlc190byxcbiAgICBhbW91bnRzOiByZXF1ZXN0LmFtb3VudHMsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gICAgbWVzc2FnZV9kYXRhOiByZXF1ZXN0Lm1lc3NhZ2VfZGF0YSxcbiAgfVxuXG4gIHFybEFwaSgndHJhbnNmZXJDb2lucycsIHR4LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgIGNhbGxiYWNrKGVyciwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHJhbnNmZXJSZXNwb25zZSA9IHtcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCB0cmFuc2ZlclJlc3BvbnNlKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgY3JlYXRlTXVsdGlTaWcgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgdHggPSB7XG4gICAgbWFzdGVyX2FkZHI6IHJlcXVlc3QuZnJvbUFkZHJlc3MsXG4gICAgc2lnbmF0b3JpZXM6IHJlcXVlc3Quc2lnbmF0b3JpZXMsXG4gICAgd2VpZ2h0czogcmVxdWVzdC53ZWlnaHRzLFxuICAgIHRocmVzaG9sZDogcmVxdWVzdC50aHJlc2hvbGQsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gIH1cblxuICBxcmxBcGkoJ0dldE11bHRpU2lnQ3JlYXRlVHhuJywgdHgsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAgJHtlcnIubWVzc2FnZX1gKVxuICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmFuc2ZlclJlc3BvbnNlID0ge1xuICAgICAgICByZXNwb25zZSxcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHRyYW5zZmVyUmVzcG9uc2UpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBzcGVuZE11bHRpU2lnID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHR4ID0ge1xuICAgIC8vIG1hc3Rlcl9hZGRyOiByZXF1ZXN0Lm1hc3Rlcl9hZGRyLFxuICAgIG11bHRpX3NpZ19hZGRyZXNzOiByZXF1ZXN0Lm11bHRpX3NpZ19hZGRyZXNzLFxuICAgIGFkZHJzX3RvOiByZXF1ZXN0LmFkZHJzX3RvLFxuICAgIGFtb3VudHM6IHJlcXVlc3QuYW1vdW50cyxcbiAgICBleHBpcnlfYmxvY2tfbnVtYmVyOiByZXF1ZXN0LmV4cGlyeV9ibG9ja19udW1iZXIsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gIH1cbiAgY29uc29sZS5sb2coJ0Fib3V0IHRvIGNhbGwgR1JQQyBHZXRNdWx0aVNpZ1NwZW5kVHhuIHdpdGggdHggPSAnKVxuICBjb25zb2xlLmxvZyh0eClcbiAgcXJsQXBpKCdHZXRNdWx0aVNpZ1NwZW5kVHhuJywgdHgsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAgJHtlcnIubWVzc2FnZX1gKVxuICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmFuc2ZlclJlc3BvbnNlID0ge1xuICAgICAgICByZXNwb25zZSxcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHRyYW5zZmVyUmVzcG9uc2UpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB2b3RlTXVsdGlTaWcgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgdHggPSB7XG4gICAgLy8gbWFzdGVyX2FkZHI6IHJlcXVlc3QubWFzdGVyX2FkZHIsXG4gICAgc2hhcmVkX2tleTogcmVxdWVzdC5zaGFyZWRfa2V5LFxuICAgIHVudm90ZTogcmVxdWVzdC51bnZvdGUsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gIH1cbiAgY29uc29sZS5sb2coJ0Fib3V0IHRvIGNhbGwgR1JQQyBHZXRNdWx0aVNpZ1ZvdGVUeG4gd2l0aCB0eCA9ICcpXG4gIGNvbnNvbGUubG9nKHR4KVxuICBxcmxBcGkoJ0dldE11bHRpU2lnVm90ZVR4bicsIHR4LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgIGNhbGxiYWNrKGVyciwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHJhbnNmZXJSZXNwb25zZSA9IHtcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCB0cmFuc2ZlclJlc3BvbnNlKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZ2V0SGVpZ2h0ID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHR4ID0ge1xuICAgIG5ldHdvcms6IHJlcXVlc3QubmV0d29yayxcbiAgfVxuXG4gIHFybEFwaSgnR2V0SGVpZ2h0JywgdHgsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlOicsIHJlc3BvbnNlKVxuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgIGNhbGxiYWNrKGVyciwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBjb25maXJtVHJhbnNhY3Rpb24gPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgY29uZmlybVR4biA9IHtcbiAgICB0cmFuc2FjdGlvbl9zaWduZWQ6IHJlcXVlc3QuZXh0ZW5kZWRfdHJhbnNhY3Rpb25fdW5zaWduZWQudHgsXG4gIH1cbiAgY29uc3QgcmVsYXllZFRocm91Z2ggPSBbXVxuXG4gIC8vIGNoYW5nZSBVaW50OEFycmF5cyB0byBCdWZmZXJzXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnB1YmxpY19rZXkgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5wdWJsaWNfa2V5XG4gIClcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gIClcblxuICBjb25zdCBhZGRyc1RvID0gY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNmZXIuYWRkcnNfdG9cblxuICBjb25zdCBhZGRyc1RvRm9ybWF0dGVkID0gW11cbiAgYWRkcnNUby5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYnVmSXRlbSA9IHRvQnVmZmVyKGl0ZW0pXG4gICAgYWRkcnNUb0Zvcm1hdHRlZC5wdXNoKGJ1Zkl0ZW0pXG4gIH0pXG5cbiAgLy8gT3ZlcndyaXRlIGFkZHJzX3RvIHdpdGggb3VyIHVwZGF0ZWQgb25lXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zZmVyLmFkZHJzX3RvID0gYWRkcnNUb0Zvcm1hdHRlZFxuICBjb25maXJtVHhuLm5ldHdvcmsgPSByZXF1ZXN0Lm5ldHdvcmtcblxuICAvLyBSZWxheSB0cmFuc2FjdGlvbiB0aHJvdWdoIHVzZXIgbm9kZSwgdGhlbiBhbGwgZGVmYXVsdCBub2Rlcy5cbiAgbGV0IHR4blJlc3BvbnNlXG5cbiAgYXN5bmMud2F0ZXJmYWxsKFxuICAgIFtcbiAgICAgIC8vIFJlbGF5IHRocm91Z2ggdXNlciBub2RlLlxuICAgICAgZnVuY3Rpb24gKHdmY2IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBxcmxBcGkoJ3B1c2hUcmFuc2FjdGlvbicsIGNvbmZpcm1UeG4sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICdSZWxheWVkIFR4bjogJyxcbiAgICAgICAgICAgICAgQnVmZmVyLmZyb20ocmVzLnR4X2hhc2gpLnRvU3RyaW5nKCdoZXgnKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBlcnIubWVzc2FnZSwgcmVzcG9uc2U6IGVyci5tZXNzYWdlIH1cbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBoYXNoUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgdHhuSGFzaDogQnVmZmVyLmZyb20oXG4gICAgICAgICAgICAgICAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50cmFuc2FjdGlvbl9oYXNoXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZVxuICAgICAgICAgICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogbnVsbCwgcmVzcG9uc2U6IGhhc2hSZXNwb25zZSB9XG4gICAgICAgICAgICAgIHJlbGF5ZWRUaHJvdWdoLnB1c2gocmVzLnJlbGF5ZWQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBzZW50IHZpYSAke3Jlcy5yZWxheWVkfWApXG4gICAgICAgICAgICAgIHdmY2IoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gLSAke2Vycn1gKVxuICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogZXJyLCByZXNwb25zZTogZXJyIH1cbiAgICAgICAgICB3ZmNiKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qXG4gICAgLy8gTm93IHJlbGF5IHRocm91Z2ggYWxsIGRlZmF1bHQgbm9kZXMgdGhhdCB3ZSBoYXZlIGEgY29ubmVjdGlvbiB0b29cbiAgICBmdW5jdGlvbih3ZmNiKSB7XG4gICAgICBhc3luYy5lYWNoU2VyaWVzKERFRkFVTFRfTk9ERVMsIChub2RlLCBjYikgPT4ge1xuICAgICAgICBpZiAoKHFybENsaWVudC5oYXNPd25Qcm9wZXJ0eShub2RlLmdycGMpID09PSB0cnVlKSAmJiAobm9kZS5ncnBjICE9PSByZXF1ZXN0LmdycGMpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFB1c2ggdGhlIHRyYW5zYWN0aW9uIC0gd2UgZG9uJ3QgY2FyZSBmb3IgaXRzIHJlc3BvbnNlXG4gICAgICAgICAgICBxcmxDbGllbnRbbm9kZS5ncnBjXS5wdXNoVHJhbnNhY3Rpb24oY29uZmlybVR4biwgKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7bm9kZS5ncnBjfSAtICR7ZXJyfWApXG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2ZlciBUcmFuc2FjdGlvbiBzZW50IHZpYSAke25vZGUuZ3JwY31gKVxuICAgICAgICAgICAgICAgIHJlbGF5ZWRUaHJvdWdoLnB1c2gobm9kZS5ncnBjKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7bm9kZS5ncnBjfSAtICR7ZXJyfWApXG4gICAgICAgICAgICBjYigpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICBjb25zb2xlLmxvZygnQWxsIHRyYW5zZmVyIHR4bnMgc2VudCcpXG4gICAgICAgIHdmY2IoKVxuICAgICAgfSlcbiAgICB9LFxuICAgICovXG4gICAgXSxcbiAgICAoKSA9PiB7XG4gICAgICAvLyBBbGwgZG9uZSwgc2VuZCB0eG4gcmVzcG9uc2VcbiAgICAgIHR4blJlc3BvbnNlLnJlbGF5ZWQgPSByZWxheWVkVGhyb3VnaFxuICAgICAgY2FsbGJhY2sobnVsbCwgdHhuUmVzcG9uc2UpXG4gICAgfVxuICApXG59XG5cbmNvbnN0IGNvbmZpcm1NdWx0aVNpZ0NyZWF0ZSA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBjb25maXJtVHhuID0ge1xuICAgIHRyYW5zYWN0aW9uX3NpZ25lZDogcmVxdWVzdC5leHRlbmRlZF90cmFuc2FjdGlvbl91bnNpZ25lZC50eCxcbiAgfVxuICBjb25zdCByZWxheWVkVGhyb3VnaCA9IFtdXG5cbiAgLy8gY2hhbmdlIFVpbnQ4QXJyYXlzIHRvIEJ1ZmZlcnNcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQucHVibGljX2tleSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnB1YmxpY19rZXlcbiAgKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmUgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmVcbiAgKVxuXG4gIGNvbnN0IHsgc2lnbmF0b3JpZXMgfSA9IGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm11bHRpX3NpZ19jcmVhdGVcbiAgY29uc3Qgc2lnbmF0b3JpZXNGb3JtYXR0ZWQgPSBbXVxuICBzaWduYXRvcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgY29uc3QgaSA9IHRvQnVmZmVyKGl0ZW0pXG4gICAgc2lnbmF0b3JpZXNGb3JtYXR0ZWQucHVzaChpKVxuICB9KVxuXG4gIC8vIE92ZXJ3cml0ZSBzaWduYXRvcmllcyB3aXRoIG91ciB1cGRhdGVkIG9uZVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5tdWx0aV9zaWdfY3JlYXRlLnNpZ25hdG9yaWVzID0gc2lnbmF0b3JpZXNGb3JtYXR0ZWRcbiAgLy8gLy8gdHgubXVsdGlfc2lnX2NyZWF0ZS50aHJlc2hvbGRcbiAgY29uZmlybVR4bi5uZXR3b3JrID0gcmVxdWVzdC5uZXR3b3JrXG5cbiAgY29uc29sZS5sb2coJ2NvbmZpcm1lZCArIHNpZ25lZCB0eCBmb3IgcHVzaCcsIGNvbmZpcm1UeG4pXG4gIGNvbnNvbGUubG9nKGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm11bHRpX3NpZ19jcmVhdGUuc2lnbmF0b3JpZXMpXG5cbiAgLy8gUmVsYXkgdHJhbnNhY3Rpb24gdGhyb3VnaCB1c2VyIG5vZGUsIHRoZW4gYWxsIGRlZmF1bHQgbm9kZXMuXG4gIGxldCB0eG5SZXNwb25zZVxuXG4gIGFzeW5jLndhdGVyZmFsbChcbiAgICBbXG4gICAgICAvLyBSZWxheSB0aHJvdWdoIHVzZXIgbm9kZS5cbiAgICAgIGZ1bmN0aW9uICh3ZmNiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcXJsQXBpKCdwdXNoVHJhbnNhY3Rpb24nLCBjb25maXJtVHhuLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAnUmVsYXllZCBUeG46ICcsXG4gICAgICAgICAgICAgIEJ1ZmZlci5mcm9tKHJlcy50eF9oYXNoKS50b1N0cmluZygnaGV4JylcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICAke2Vyci5tZXNzYWdlfWApXG4gICAgICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogZXJyLm1lc3NhZ2UsIHJlc3BvbnNlOiBlcnIubWVzc2FnZSB9XG4gICAgICAgICAgICAgIHdmY2IoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaGFzaFJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIHR4bkhhc2g6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNhY3Rpb25faGFzaFxuICAgICAgICAgICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZTogQnVmZmVyLmZyb20oXG4gICAgICAgICAgICAgICAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmVcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IG51bGwsIHJlc3BvbnNlOiBoYXNoUmVzcG9uc2UgfVxuICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKHJlcy5yZWxheWVkKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtyZXMucmVsYXllZH1gKVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEZhaWxlZCB0byBzZW5kIHRyYW5zYWN0aW9uOiAke2Vycn1gKVxuICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogZXJyLCByZXNwb25zZTogZXJyIH1cbiAgICAgICAgICB3ZmNiKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qXG4gICAgLy8gTm93IHJlbGF5IHRocm91Z2ggYWxsIGRlZmF1bHQgbm9kZXMgdGhhdCB3ZSBoYXZlIGEgY29ubmVjdGlvbiB0b29cbiAgICBmdW5jdGlvbih3ZmNiKSB7XG4gICAgICBhc3luYy5lYWNoU2VyaWVzKERFRkFVTFRfTk9ERVMsIChub2RlLCBjYikgPT4ge1xuICAgICAgICBpZiAoKHFybENsaWVudC5oYXNPd25Qcm9wZXJ0eShub2RlLmdycGMpID09PSB0cnVlKSAmJiAobm9kZS5ncnBjICE9PSByZXF1ZXN0LmdycGMpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFB1c2ggdGhlIHRyYW5zYWN0aW9uIC0gd2UgZG9uJ3QgY2FyZSBmb3IgaXRzIHJlc3BvbnNlXG4gICAgICAgICAgICBxcmxDbGllbnRbbm9kZS5ncnBjXS5wdXNoVHJhbnNhY3Rpb24oY29uZmlybVR4biwgKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7bm9kZS5ncnBjfSAtICR7ZXJyfWApXG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2ZlciBUcmFuc2FjdGlvbiBzZW50IHZpYSAke25vZGUuZ3JwY31gKVxuICAgICAgICAgICAgICAgIHJlbGF5ZWRUaHJvdWdoLnB1c2gobm9kZS5ncnBjKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7bm9kZS5ncnBjfSAtICR7ZXJyfWApXG4gICAgICAgICAgICBjYigpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICBjb25zb2xlLmxvZygnQWxsIHRyYW5zZmVyIHR4bnMgc2VudCcpXG4gICAgICAgIHdmY2IoKVxuICAgICAgfSlcbiAgICB9LFxuICAgICovXG4gICAgXSxcbiAgICAoKSA9PiB7XG4gICAgICAvLyBBbGwgZG9uZSwgc2VuZCB0eG4gcmVzcG9uc2VcbiAgICAgIHR4blJlc3BvbnNlLnJlbGF5ZWQgPSByZWxheWVkVGhyb3VnaFxuICAgICAgY2FsbGJhY2sobnVsbCwgdHhuUmVzcG9uc2UpXG4gICAgfVxuICApXG59XG5cbmNvbnN0IGNvbmZpcm1NdWx0aVNpZ1NwZW5kID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1UeG4gPSB7XG4gICAgdHJhbnNhY3Rpb25fc2lnbmVkOiByZXF1ZXN0LmV4dGVuZGVkX3RyYW5zYWN0aW9uX3Vuc2lnbmVkLnR4LFxuICB9XG4gIGNvbnN0IHJlbGF5ZWRUaHJvdWdoID0gW11cblxuICAvLyBjaGFuZ2UgVWludDhBcnJheXMgdG8gQnVmZmVyc1xuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5wdWJsaWNfa2V5ID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQucHVibGljX2tleVxuICApXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZVxuICApXG5cbiAgY29uc3QgYWRkcnNUbyA9IGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm11bHRpX3NpZ19zcGVuZC5hZGRyc190b1xuICBjb25zdCBzaWduYXRvcmllc0Zvcm1hdHRlZCA9IFtdXG4gIGFkZHJzVG8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGkgPSB0b0J1ZmZlcihpdGVtKVxuICAgIHNpZ25hdG9yaWVzRm9ybWF0dGVkLnB1c2goaSlcbiAgfSlcblxuICAvLyBPdmVyd3JpdGUgc2lnbmF0b3JpZXMgd2l0aCBvdXIgdXBkYXRlZCBvbmVcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQubXVsdGlfc2lnX3NwZW5kLmFkZHJzX3RvID0gc2lnbmF0b3JpZXNGb3JtYXR0ZWRcblxuICAvLyBtdWx0aV9zaWdfYWRkcmVzcyAmIG1hc3Rlcl9hZGRyIGFzIEJ1ZmZlclxuICAvLyBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5tYXN0ZXJfYWRkciA9IHRvQnVmZmVyKGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm1hc3Rlcl9hZGRyKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5tdWx0aV9zaWdfc3BlbmQubXVsdGlfc2lnX2FkZHJlc3MgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5tdWx0aV9zaWdfc3BlbmQubXVsdGlfc2lnX2FkZHJlc3NcbiAgKVxuXG4gIC8vIC8vIHR4Lm11bHRpX3NpZ19jcmVhdGUudGhyZXNob2xkXG4gIGNvbmZpcm1UeG4ubmV0d29yayA9IHJlcXVlc3QubmV0d29ya1xuXG4gIGNvbnNvbGUubG9nKCdjb25maXJtZWQgKyBzaWduZWQgdHggZm9yIHB1c2gnLCBjb25maXJtVHhuKVxuXG4gIC8vIFJlbGF5IHRyYW5zYWN0aW9uIHRocm91Z2ggdXNlciBub2RlLCB0aGVuIGFsbCBkZWZhdWx0IG5vZGVzLlxuICBsZXQgdHhuUmVzcG9uc2VcblxuICBhc3luYy53YXRlcmZhbGwoXG4gICAgW1xuICAgICAgLy8gUmVsYXkgdGhyb3VnaCB1c2VyIG5vZGUuXG4gICAgICBmdW5jdGlvbiAod2ZjYikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHFybEFwaSgncHVzaFRyYW5zYWN0aW9uJywgY29uZmlybVR4biwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgJ1JlbGF5ZWQgVHhuOiAnLFxuICAgICAgICAgICAgICBCdWZmZXIuZnJvbShyZXMudHhfaGFzaCkudG9TdHJpbmcoJ2hleCcpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAgJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyci5tZXNzYWdlLCByZXNwb25zZTogZXJyLm1lc3NhZ2UgfVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc2hSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBudWxsLCByZXNwb25zZTogaGFzaFJlc3BvbnNlIH1cbiAgICAgICAgICAgICAgcmVsYXllZFRocm91Z2gucHVzaChyZXMucmVsYXllZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIHNlbnQgdmlhICR7cmVzLnJlbGF5ZWR9YClcbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbjogJHtlcnJ9YClcbiAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyciwgcmVzcG9uc2U6IGVyciB9XG4gICAgICAgICAgd2ZjYigpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKlxuICAgIC8vIE5vdyByZWxheSB0aHJvdWdoIGFsbCBkZWZhdWx0IG5vZGVzIHRoYXQgd2UgaGF2ZSBhIGNvbm5lY3Rpb24gdG9vXG4gICAgZnVuY3Rpb24od2ZjYikge1xuICAgICAgYXN5bmMuZWFjaFNlcmllcyhERUZBVUxUX05PREVTLCAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgaWYgKChxcmxDbGllbnQuaGFzT3duUHJvcGVydHkobm9kZS5ncnBjKSA9PT0gdHJ1ZSkgJiYgKG5vZGUuZ3JwYyAhPT0gcmVxdWVzdC5ncnBjKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQdXNoIHRoZSB0cmFuc2FjdGlvbiAtIHdlIGRvbid0IGNhcmUgZm9yIGl0cyByZXNwb25zZVxuICAgICAgICAgICAgcXJsQ2xpZW50W25vZGUuZ3JwY10ucHVzaFRyYW5zYWN0aW9uKGNvbmZpcm1UeG4sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNmZXIgVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtub2RlLmdycGN9YClcbiAgICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKG5vZGUuZ3JwYylcbiAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgY2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICAgICAgY29uc29sZS5sb2coJ0FsbCB0cmFuc2ZlciB0eG5zIHNlbnQnKVxuICAgICAgICB3ZmNiKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICAqL1xuICAgIF0sXG4gICAgKCkgPT4ge1xuICAgICAgLy8gQWxsIGRvbmUsIHNlbmQgdHhuIHJlc3BvbnNlXG4gICAgICB0eG5SZXNwb25zZS5yZWxheWVkID0gcmVsYXllZFRocm91Z2hcbiAgICAgIGNhbGxiYWNrKG51bGwsIHR4blJlc3BvbnNlKVxuICAgIH1cbiAgKVxufVxuXG5jb25zdCBjb25maXJtTXVsdGlTaWdWb3RlID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1UeG4gPSB7XG4gICAgdHJhbnNhY3Rpb25fc2lnbmVkOiByZXF1ZXN0LmV4dGVuZGVkX3RyYW5zYWN0aW9uX3Vuc2lnbmVkLnR4LFxuICB9XG4gIGNvbnN0IHJlbGF5ZWRUaHJvdWdoID0gW11cblxuICAvLyBjaGFuZ2UgVWludDhBcnJheXMgdG8gQnVmZmVyc1xuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5wdWJsaWNfa2V5ID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQucHVibGljX2tleVxuICApXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZVxuICApXG5cbiAgLy8gbXVsdGlfc2lnX2FkZHJlc3MgJiBtYXN0ZXJfYWRkciBhcyBCdWZmZXJcbiAgLy8gY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQubWFzdGVyX2FkZHIgPSB0b0J1ZmZlcihjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5tYXN0ZXJfYWRkcilcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQubXVsdGlfc2lnX3ZvdGUuc2hhcmVkX2tleSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm11bHRpX3NpZ192b3RlLnNoYXJlZF9rZXlcbiAgKVxuXG4gIC8vIC8vIHR4Lm11bHRpX3NpZ19jcmVhdGUudGhyZXNob2xkXG4gIGNvbmZpcm1UeG4ubmV0d29yayA9IHJlcXVlc3QubmV0d29ya1xuXG4gIGNvbnNvbGUubG9nKCdjb25maXJtZWQgKyBzaWduZWQgdHggZm9yIHB1c2gnLCBjb25maXJtVHhuKVxuXG4gIC8vIFJlbGF5IHRyYW5zYWN0aW9uIHRocm91Z2ggdXNlciBub2RlLCB0aGVuIGFsbCBkZWZhdWx0IG5vZGVzLlxuICBsZXQgdHhuUmVzcG9uc2VcblxuICBhc3luYy53YXRlcmZhbGwoXG4gICAgW1xuICAgICAgLy8gUmVsYXkgdGhyb3VnaCB1c2VyIG5vZGUuXG4gICAgICBmdW5jdGlvbiAod2ZjYikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHFybEFwaSgncHVzaFRyYW5zYWN0aW9uJywgY29uZmlybVR4biwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgJ1JlbGF5ZWQgVHhuOiAnLFxuICAgICAgICAgICAgICBCdWZmZXIuZnJvbShyZXMudHhfaGFzaCkudG9TdHJpbmcoJ2hleCcpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAgJHtlcnIubWVzc2FnZX1gKVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyci5tZXNzYWdlLCByZXNwb25zZTogZXJyLm1lc3NhZ2UgfVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc2hSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBudWxsLCByZXNwb25zZTogaGFzaFJlc3BvbnNlIH1cbiAgICAgICAgICAgICAgcmVsYXllZFRocm91Z2gucHVzaChyZXMucmVsYXllZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIHNlbnQgdmlhICR7cmVzLnJlbGF5ZWR9YClcbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbjogJHtlcnJ9YClcbiAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyciwgcmVzcG9uc2U6IGVyciB9XG4gICAgICAgICAgd2ZjYigpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKlxuICAgIC8vIE5vdyByZWxheSB0aHJvdWdoIGFsbCBkZWZhdWx0IG5vZGVzIHRoYXQgd2UgaGF2ZSBhIGNvbm5lY3Rpb24gdG9vXG4gICAgZnVuY3Rpb24od2ZjYikge1xuICAgICAgYXN5bmMuZWFjaFNlcmllcyhERUZBVUxUX05PREVTLCAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgaWYgKChxcmxDbGllbnQuaGFzT3duUHJvcGVydHkobm9kZS5ncnBjKSA9PT0gdHJ1ZSkgJiYgKG5vZGUuZ3JwYyAhPT0gcmVxdWVzdC5ncnBjKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQdXNoIHRoZSB0cmFuc2FjdGlvbiAtIHdlIGRvbid0IGNhcmUgZm9yIGl0cyByZXNwb25zZVxuICAgICAgICAgICAgcXJsQ2xpZW50W25vZGUuZ3JwY10ucHVzaFRyYW5zYWN0aW9uKGNvbmZpcm1UeG4sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNmZXIgVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtub2RlLmdycGN9YClcbiAgICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKG5vZGUuZ3JwYylcbiAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgY2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICAgICAgY29uc29sZS5sb2coJ0FsbCB0cmFuc2ZlciB0eG5zIHNlbnQnKVxuICAgICAgICB3ZmNiKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICAqL1xuICAgIF0sXG4gICAgKCkgPT4ge1xuICAgICAgLy8gQWxsIGRvbmUsIHNlbmQgdHhuIHJlc3BvbnNlXG4gICAgICB0eG5SZXNwb25zZS5yZWxheWVkID0gcmVsYXllZFRocm91Z2hcbiAgICAgIGNhbGxiYWNrKG51bGwsIHR4blJlc3BvbnNlKVxuICAgIH1cbiAgKVxufVxuXG4vLyBGdW5jdGlvbiB0byBjYWxsIEdldFRva2VuVHhuIEFQSVxuY29uc3QgY3JlYXRlVG9rZW5UeG4gPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgdHggPSB7XG4gICAgLy8gbWFzdGVyX2FkZHI6IHJlcXVlc3QuYWRkcmVzc0Zyb20sXG4gICAgc3ltYm9sOiByZXF1ZXN0LnN5bWJvbCxcbiAgICBuYW1lOiByZXF1ZXN0Lm5hbWUsXG4gICAgb3duZXI6IHJlcXVlc3Qub3duZXIsXG4gICAgZGVjaW1hbHM6IHJlcXVlc3QuZGVjaW1hbHMsXG4gICAgaW5pdGlhbF9iYWxhbmNlczogcmVxdWVzdC5pbml0aWFsQmFsYW5jZXMsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICB4bXNzX290c19pbmRleDogcmVxdWVzdC54bXNzT3RzS2V5LFxuICAgIG5ldHdvcms6IHJlcXVlc3QubmV0d29yayxcbiAgfVxuXG4gIHFybEFwaSgnZ2V0VG9rZW5UeG4nLCB0eCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICAke2Vyci5tZXNzYWdlfWApXG4gICAgICBjYWxsYmFjayhlcnIsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRyYW5zZmVyUmVzcG9uc2UgPSB7XG4gICAgICAgIHR4bkhhc2g6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgIHJlc3BvbnNlLmV4dGVuZGVkX3RyYW5zYWN0aW9uX3Vuc2lnbmVkLnR4LnRyYW5zYWN0aW9uX2hhc2hcbiAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCB0cmFuc2ZlclJlc3BvbnNlKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2FsbCBHZXRNZXNzYWdlVHhuIEFQSVxuY29uc3QgY3JlYXRlTWVzc2FnZVR4biA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCB0eCA9IHtcbiAgICAvLyBtYXN0ZXJfYWRkcjogcmVxdWVzdC5hZGRyZXNzRnJvbSxcbiAgICBtZXNzYWdlOiByZXF1ZXN0Lm1lc3NhZ2UsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICB4bXNzX290c19pbmRleDogcmVxdWVzdC54bXNzT3RzS2V5LFxuICAgIG5ldHdvcms6IHJlcXVlc3QubmV0d29yayxcbiAgfVxuXG4gIHFybEFwaSgnZ2V0TWVzc2FnZVR4bicsIHR4LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgIGNhbGxiYWNrKGVyciwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHJhbnNmZXJSZXNwb25zZSA9IHtcbiAgICAgICAgdHhuSGFzaDogQnVmZmVyLmZyb20oXG4gICAgICAgICAgcmVzcG9uc2UuZXh0ZW5kZWRfdHJhbnNhY3Rpb25fdW5zaWduZWQudHgudHJhbnNhY3Rpb25faGFzaFxuICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKG51bGwsIHRyYW5zZmVyUmVzcG9uc2UpXG4gICAgfVxuICB9KVxufVxuXG4vLyBDcmVhdGUgS2V5YmFzZSBUeG5cbmNvbnN0IGNyZWF0ZUtleWJhc2VUeG4gPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgdHggPSB7XG4gICAgLy8gbWFzdGVyX2FkZHI6IHJlcXVlc3QuYWRkcmVzc0Zyb20sXG4gICAgbWVzc2FnZTogcmVxdWVzdC5tZXNzYWdlLFxuICAgIGZlZTogcmVxdWVzdC5mZWUsXG4gICAgeG1zc19wazogcmVxdWVzdC54bXNzUGssXG4gICAgeG1zc19vdHNfaW5kZXg6IHJlcXVlc3QueG1zc090c0tleSxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gIH1cbiAgLy8gdXNlcyBtZXNzYWdlIHRyYW5zYWN0aW9uIGludGVybmFsbHlcbiAgcXJsQXBpKCdnZXRNZXNzYWdlVHhuJywgdHgsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAgJHtlcnIubWVzc2FnZX1gKVxuICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmFuc2ZlclJlc3BvbnNlID0ge1xuICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICByZXNwb25zZS5leHRlbmRlZF90cmFuc2FjdGlvbl91bnNpZ25lZC50eC50cmFuc2FjdGlvbl9oYXNoXG4gICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sobnVsbCwgdHJhbnNmZXJSZXNwb25zZSlcbiAgICB9XG4gIH0pXG59XG5cbi8vIENyZWF0ZSBHaXRodWIgVHhuXG5jb25zdCBjcmVhdGVHaXRodWJUeG4gPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgdHggPSB7XG4gICAgLy8gbWFzdGVyX2FkZHI6IHJlcXVlc3QuYWRkcmVzc0Zyb20sXG4gICAgbWVzc2FnZTogcmVxdWVzdC5tZXNzYWdlLFxuICAgIGZlZTogcmVxdWVzdC5mZWUsXG4gICAgeG1zc19wazogcmVxdWVzdC54bXNzUGssXG4gICAgeG1zc19vdHNfaW5kZXg6IHJlcXVlc3QueG1zc090c0tleSxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gIH1cbiAgLy8gdXNlcyBtZXNzYWdlIHRyYW5zYWN0aW9uIGludGVybmFsbHlcbiAgcXJsQXBpKCdnZXRNZXNzYWdlVHhuJywgdHgsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAgJHtlcnIubWVzc2FnZX1gKVxuICAgICAgY2FsbGJhY2soZXJyLCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmFuc2ZlclJlc3BvbnNlID0ge1xuICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICByZXNwb25zZS5leHRlbmRlZF90cmFuc2FjdGlvbl91bnNpZ25lZC50eC50cmFuc2FjdGlvbl9oYXNoXG4gICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sobnVsbCwgdHJhbnNmZXJSZXNwb25zZSlcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGNvbmZpcm1Ub2tlbkNyZWF0aW9uID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1UeG4gPSB7XG4gICAgdHJhbnNhY3Rpb25fc2lnbmVkOiByZXF1ZXN0LmV4dGVuZGVkX3RyYW5zYWN0aW9uX3Vuc2lnbmVkLnR4LFxuICB9XG4gIGNvbnN0IHJlbGF5ZWRUaHJvdWdoID0gW11cblxuICAvLyBjaGFuZ2UgQXJyYXlCdWZmZXJcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQucHVibGljX2tleSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnB1YmxpY19rZXlcbiAgKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50cmFuc2FjdGlvbl9oYXNoID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNhY3Rpb25faGFzaFxuICApXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZVxuICApXG5cbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudG9rZW4uc3ltYm9sID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudG9rZW4uc3ltYm9sXG4gIClcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudG9rZW4ubmFtZSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRva2VuLm5hbWVcbiAgKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50b2tlbi5vd25lciA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRva2VuLm93bmVyXG4gIClcblxuICBjb25zdCBpbml0aWFsQmFsYW5jZXMgPSBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50b2tlbi5pbml0aWFsX2JhbGFuY2VzXG4gIGNvbnN0IGluaXRpYWxCYWxhbmNlc0Zvcm1hdHRlZCA9IFtdXG4gIGluaXRpYWxCYWxhbmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUZvcm1hdHRlZCA9IGl0ZW1cbiAgICBpdGVtRm9ybWF0dGVkLmFkZHJlc3MgPSB0b0J1ZmZlcihpdGVtLmFkZHJlc3MpXG4gICAgaW5pdGlhbEJhbGFuY2VzRm9ybWF0dGVkLnB1c2goaXRlbUZvcm1hdHRlZClcbiAgfSlcblxuICAvLyBPdmVyd3JpdGUgaW5pdGlhbF9iYWxhbmNlcyB3aXRoIG91ciB1cGRhdGVkIG9uZVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50b2tlbi5pbml0aWFsX2JhbGFuY2VzID0gaW5pdGlhbEJhbGFuY2VzRm9ybWF0dGVkXG4gIGNvbmZpcm1UeG4ubmV0d29yayA9IHJlcXVlc3QubmV0d29ya1xuXG4gIC8vIFJlbGF5IHRyYW5zYWN0aW9uIHRocm91Z2ggdXNlciBub2RlLCB0aGVuIGFsbCBkZWZhdWx0IG5vZGVzLlxuICBsZXQgdHhuUmVzcG9uc2VcblxuICBhc3luYy53YXRlcmZhbGwoXG4gICAgW1xuICAgICAgLy8gUmVsYXkgdGhyb3VnaCB1c2VyIG5vZGUuXG4gICAgICBmdW5jdGlvbiAod2ZjYikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHFybEFwaSgncHVzaFRyYW5zYWN0aW9uJywgY29uZmlybVR4biwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke3Jlcy5yZWxheWVkfSAtICR7ZXJyfWBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyci5tZXNzYWdlLCByZXNwb25zZTogZXJyLm1lc3NhZ2UgfVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc2hSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBudWxsLCByZXNwb25zZTogaGFzaFJlc3BvbnNlIH1cbiAgICAgICAgICAgICAgcmVsYXllZFRocm91Z2gucHVzaChyZXMucmVsYXllZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIHNlbnQgdmlhICR7cmVzLnJlbGF5ZWR9YClcbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhdWdodCBFcnJvcjogICR7ZXJyfWApXG4gICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBlcnIsIHJlc3BvbnNlOiBlcnIgfVxuICAgICAgICAgIHdmY2IoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLypcbiAgICAvLyBOb3cgcmVsYXkgdGhyb3VnaCBhbGwgZGVmYXVsdCBub2RlcyB0aGF0IHdlIGhhdmUgYSBjb25uZWN0aW9uIHRvb1xuICAgIGZ1bmN0aW9uKHdmY2IpIHtcbiAgICAgIGFzeW5jLmVhY2hTZXJpZXMoREVGQVVMVF9OT0RFUywgKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgIGlmICgocXJsQ2xpZW50Lmhhc093blByb3BlcnR5KG5vZGUuZ3JwYykgPT09IHRydWUpICYmIChub2RlLmdycGMgIT09IHJlcXVlc3QuZ3JwYykpIHtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAvLyBQdXNoIHRoZSB0cmFuc2FjdGlvbiAtIHdlIGRvbid0IGNhcmUgZm9yIGl0cyByZXNwb25zZVxuICAgICAgICAgICAgcXJsQ2xpZW50W25vZGUuZ3JwY10ucHVzaFRyYW5zYWN0aW9uKGNvbmZpcm1UeG4sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVG9rZW4gQ3JlYXRpb24gVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtub2RlLmdycGN9YClcbiAgICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKG5vZGUuZ3JwYylcbiAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEZhaWxlZCB0byBzZW5kIHRyYW5zYWN0aW9uIHRocm91Z2ggJHtub2RlLmdycGN9IC0gJHtlcnJ9YClcbiAgICAgICAgICAgIGNiKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgdG9rZW4gY3JlYXRpb24gdHhucyBzZW50JylcbiAgICAgICAgd2ZjYigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgKi9cbiAgICBdLFxuICAgICgpID0+IHtcbiAgICAgIC8vIEFsbCBkb25lLCBzZW5kIHR4biByZXNwb25zZVxuICAgICAgdHhuUmVzcG9uc2UucmVsYXllZCA9IHJlbGF5ZWRUaHJvdWdoXG4gICAgICBjYWxsYmFjayhudWxsLCB0eG5SZXNwb25zZSlcbiAgICB9XG4gIClcbn1cblxuY29uc3QgY29uZmlybU1lc3NhZ2VDcmVhdGlvbiA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBjb25maXJtVHhuID0ge1xuICAgIHRyYW5zYWN0aW9uX3NpZ25lZDogcmVxdWVzdC5leHRlbmRlZF90cmFuc2FjdGlvbl91bnNpZ25lZC50eCxcbiAgfVxuICBjb25zdCByZWxheWVkVGhyb3VnaCA9IFtdXG5cbiAgLy8gY2hhbmdlIEFycmF5QnVmZmVyXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnB1YmxpY19rZXkgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5wdWJsaWNfa2V5XG4gIClcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNhY3Rpb25faGFzaCA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmUgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmVcbiAgKVxuXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm1lc3NhZ2UubWVzc2FnZV9oYXNoID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQubWVzc2FnZS5tZXNzYWdlX2hhc2hcbiAgKVxuXG4gIGNvbmZpcm1UeG4ubmV0d29yayA9IHJlcXVlc3QubmV0d29ya1xuXG4gIC8vIFJlbGF5IHRyYW5zYWN0aW9uIHRocm91Z2ggdXNlciBub2RlLCB0aGVuIGFsbCBkZWZhdWx0IG5vZGVzLlxuICBsZXQgdHhuUmVzcG9uc2VcblxuICBhc3luYy53YXRlcmZhbGwoXG4gICAgW1xuICAgICAgLy8gUmVsYXkgdGhyb3VnaCB1c2VyIG5vZGUuXG4gICAgICBmdW5jdGlvbiAod2ZjYikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHFybEFwaSgncHVzaFRyYW5zYWN0aW9uJywgY29uZmlybVR4biwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke3Jlcy5yZWxheWVkfSAtICR7ZXJyfWBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyci5tZXNzYWdlLCByZXNwb25zZTogZXJyLm1lc3NhZ2UgfVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc2hSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBudWxsLCByZXNwb25zZTogaGFzaFJlc3BvbnNlIH1cbiAgICAgICAgICAgICAgcmVsYXllZFRocm91Z2gucHVzaChyZXMucmVsYXllZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIHNlbnQgdmlhICR7cmVzLnJlbGF5ZWR9YClcbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhdWdodCBFcnJvcjogICR7ZXJyfWApXG4gICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBlcnIsIHJlc3BvbnNlOiBlcnIgfVxuICAgICAgICAgIHdmY2IoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLypcbiAgICAvLyBOb3cgcmVsYXkgdGhyb3VnaCBhbGwgZGVmYXVsdCBub2RlcyB0aGF0IHdlIGhhdmUgYSBjb25uZWN0aW9uIHRvb1xuICAgIGZ1bmN0aW9uKHdmY2IpIHtcbiAgICAgIGFzeW5jLmVhY2hTZXJpZXMoREVGQVVMVF9OT0RFUywgKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgIGlmICgocXJsQ2xpZW50Lmhhc093blByb3BlcnR5KG5vZGUuZ3JwYykgPT09IHRydWUpICYmIChub2RlLmdycGMgIT09IHJlcXVlc3QuZ3JwYykpIHtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAvLyBQdXNoIHRoZSB0cmFuc2FjdGlvbiAtIHdlIGRvbid0IGNhcmUgZm9yIGl0cyByZXNwb25zZVxuICAgICAgICAgICAgcXJsQ2xpZW50W25vZGUuZ3JwY10ucHVzaFRyYW5zYWN0aW9uKGNvbmZpcm1UeG4sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVG9rZW4gQ3JlYXRpb24gVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtub2RlLmdycGN9YClcbiAgICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKG5vZGUuZ3JwYylcbiAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEZhaWxlZCB0byBzZW5kIHRyYW5zYWN0aW9uIHRocm91Z2ggJHtub2RlLmdycGN9IC0gJHtlcnJ9YClcbiAgICAgICAgICAgIGNiKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgdG9rZW4gY3JlYXRpb24gdHhucyBzZW50JylcbiAgICAgICAgd2ZjYigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgKi9cbiAgICBdLFxuICAgICgpID0+IHtcbiAgICAgIC8vIEFsbCBkb25lLCBzZW5kIHR4biByZXNwb25zZVxuICAgICAgdHhuUmVzcG9uc2UucmVsYXllZCA9IHJlbGF5ZWRUaHJvdWdoXG4gICAgICBjYWxsYmFjayhudWxsLCB0eG5SZXNwb25zZSlcbiAgICB9XG4gIClcbn1cblxuY29uc3QgY29uZmlybUtleWJhc2VDcmVhdGlvbiA9IChyZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBjb25maXJtVHhuID0ge1xuICAgIHRyYW5zYWN0aW9uX3NpZ25lZDogcmVxdWVzdC5leHRlbmRlZF90cmFuc2FjdGlvbl91bnNpZ25lZC50eCxcbiAgfVxuICBjb25zdCByZWxheWVkVGhyb3VnaCA9IFtdXG5cbiAgLy8gY2hhbmdlIEFycmF5QnVmZmVyXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnB1YmxpY19rZXkgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5wdWJsaWNfa2V5XG4gIClcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNhY3Rpb25faGFzaCA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmUgPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmVcbiAgKVxuXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLm1lc3NhZ2UubWVzc2FnZV9oYXNoID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQubWVzc2FnZS5tZXNzYWdlX2hhc2hcbiAgKVxuXG4gIGNvbmZpcm1UeG4ubmV0d29yayA9IHJlcXVlc3QubmV0d29ya1xuXG4gIC8vIFJlbGF5IHRyYW5zYWN0aW9uIHRocm91Z2ggdXNlciBub2RlLCB0aGVuIGFsbCBkZWZhdWx0IG5vZGVzLlxuICBsZXQgdHhuUmVzcG9uc2VcblxuICBhc3luYy53YXRlcmZhbGwoXG4gICAgW1xuICAgICAgLy8gUmVsYXkgdGhyb3VnaCB1c2VyIG5vZGUuXG4gICAgICBmdW5jdGlvbiAod2ZjYikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHFybEFwaSgncHVzaFRyYW5zYWN0aW9uJywgY29uZmlybVR4biwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke3Jlcy5yZWxheWVkfSAtICR7ZXJyfWBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyci5tZXNzYWdlLCByZXNwb25zZTogZXJyLm1lc3NhZ2UgfVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc2hSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICB0eG5IYXNoOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2hcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBudWxsLCByZXNwb25zZTogaGFzaFJlc3BvbnNlIH1cbiAgICAgICAgICAgICAgcmVsYXllZFRocm91Z2gucHVzaChyZXMucmVsYXllZClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIHNlbnQgdmlhICR7cmVzLnJlbGF5ZWR9YClcbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhdWdodCBFcnJvcjogICR7ZXJyfWApXG4gICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBlcnIsIHJlc3BvbnNlOiBlcnIgfVxuICAgICAgICAgIHdmY2IoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLypcbiAgICAvLyBOb3cgcmVsYXkgdGhyb3VnaCBhbGwgZGVmYXVsdCBub2RlcyB0aGF0IHdlIGhhdmUgYSBjb25uZWN0aW9uIHRvb1xuICAgIGZ1bmN0aW9uKHdmY2IpIHtcbiAgICAgIGFzeW5jLmVhY2hTZXJpZXMoREVGQVVMVF9OT0RFUywgKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgIGlmICgocXJsQ2xpZW50Lmhhc093blByb3BlcnR5KG5vZGUuZ3JwYykgPT09IHRydWUpICYmIChub2RlLmdycGMgIT09IHJlcXVlc3QuZ3JwYykpIHtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAvLyBQdXNoIHRoZSB0cmFuc2FjdGlvbiAtIHdlIGRvbid0IGNhcmUgZm9yIGl0cyByZXNwb25zZVxuICAgICAgICAgICAgcXJsQ2xpZW50W25vZGUuZ3JwY10ucHVzaFRyYW5zYWN0aW9uKGNvbmZpcm1UeG4sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVG9rZW4gQ3JlYXRpb24gVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtub2RlLmdycGN9YClcbiAgICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKG5vZGUuZ3JwYylcbiAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEZhaWxlZCB0byBzZW5kIHRyYW5zYWN0aW9uIHRocm91Z2ggJHtub2RlLmdycGN9IC0gJHtlcnJ9YClcbiAgICAgICAgICAgIGNiKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbGwgdG9rZW4gY3JlYXRpb24gdHhucyBzZW50JylcbiAgICAgICAgd2ZjYigpXG4gICAgICB9KVxuICAgIH0sXG4gICAgKi9cbiAgICBdLFxuICAgICgpID0+IHtcbiAgICAgIC8vIEFsbCBkb25lLCBzZW5kIHR4biByZXNwb25zZVxuICAgICAgdHhuUmVzcG9uc2UucmVsYXllZCA9IHJlbGF5ZWRUaHJvdWdoXG4gICAgICBjYWxsYmFjayhudWxsLCB0eG5SZXNwb25zZSlcbiAgICB9XG4gIClcbn1cblxuY29uc3QgY29uZmlybUdpdGh1YkNyZWF0aW9uID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1UeG4gPSB7XG4gICAgdHJhbnNhY3Rpb25fc2lnbmVkOiByZXF1ZXN0LmV4dGVuZGVkX3RyYW5zYWN0aW9uX3Vuc2lnbmVkLnR4LFxuICB9XG4gIGNvbnN0IHJlbGF5ZWRUaHJvdWdoID0gW11cblxuICAvLyBjaGFuZ2UgQXJyYXlCdWZmZXJcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQucHVibGljX2tleSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnB1YmxpY19rZXlcbiAgKVxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50cmFuc2FjdGlvbl9oYXNoID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNhY3Rpb25faGFzaFxuICApXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZSA9IHRvQnVmZmVyKFxuICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZVxuICApXG5cbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQubWVzc2FnZS5tZXNzYWdlX2hhc2ggPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5tZXNzYWdlLm1lc3NhZ2VfaGFzaFxuICApXG5cbiAgY29uZmlybVR4bi5uZXR3b3JrID0gcmVxdWVzdC5uZXR3b3JrXG5cbiAgLy8gUmVsYXkgdHJhbnNhY3Rpb24gdGhyb3VnaCB1c2VyIG5vZGUsIHRoZW4gYWxsIGRlZmF1bHQgbm9kZXMuXG4gIGxldCB0eG5SZXNwb25zZVxuXG4gIGFzeW5jLndhdGVyZmFsbChcbiAgICBbXG4gICAgICAvLyBSZWxheSB0aHJvdWdoIHVzZXIgbm9kZS5cbiAgICAgIGZ1bmN0aW9uICh3ZmNiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcXJsQXBpKCdwdXNoVHJhbnNhY3Rpb24nLCBjb25maXJtVHhuLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7cmVzLnJlbGF5ZWR9IC0gJHtlcnJ9YFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogZXJyLm1lc3NhZ2UsIHJlc3BvbnNlOiBlcnIubWVzc2FnZSB9XG4gICAgICAgICAgICAgIHdmY2IoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaGFzaFJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIHR4bkhhc2g6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNhY3Rpb25faGFzaFxuICAgICAgICAgICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZTogQnVmZmVyLmZyb20oXG4gICAgICAgICAgICAgICAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5zaWduYXR1cmVcbiAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IG51bGwsIHJlc3BvbnNlOiBoYXNoUmVzcG9uc2UgfVxuICAgICAgICAgICAgICByZWxheWVkVGhyb3VnaC5wdXNoKHJlcy5yZWxheWVkKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gc2VudCB2aWEgJHtyZXMucmVsYXllZH1gKVxuICAgICAgICAgICAgICB3ZmNiKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ2F1Z2h0IEVycm9yOiAgJHtlcnJ9YClcbiAgICAgICAgICB0eG5SZXNwb25zZSA9IHsgZXJyb3I6IGVyciwgcmVzcG9uc2U6IGVyciB9XG4gICAgICAgICAgd2ZjYigpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKlxuICAgIC8vIE5vdyByZWxheSB0aHJvdWdoIGFsbCBkZWZhdWx0IG5vZGVzIHRoYXQgd2UgaGF2ZSBhIGNvbm5lY3Rpb24gdG9vXG4gICAgZnVuY3Rpb24od2ZjYikge1xuICAgICAgYXN5bmMuZWFjaFNlcmllcyhERUZBVUxUX05PREVTLCAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgaWYgKChxcmxDbGllbnQuaGFzT3duUHJvcGVydHkobm9kZS5ncnBjKSA9PT0gdHJ1ZSkgJiYgKG5vZGUuZ3JwYyAhPT0gcmVxdWVzdC5ncnBjKSkge1xuICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgIC8vIFB1c2ggdGhlIHRyYW5zYWN0aW9uIC0gd2UgZG9uJ3QgY2FyZSBmb3IgaXRzIHJlc3BvbnNlXG4gICAgICAgICAgICBxcmxDbGllbnRbbm9kZS5ncnBjXS5wdXNoVHJhbnNhY3Rpb24oY29uZmlybVR4biwgKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7bm9kZS5ncnBjfSAtICR7ZXJyfWApXG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUb2tlbiBDcmVhdGlvbiBUcmFuc2FjdGlvbiBzZW50IHZpYSAke25vZGUuZ3JwY31gKVxuICAgICAgICAgICAgICAgIHJlbGF5ZWRUaHJvdWdoLnB1c2gobm9kZS5ncnBjKVxuICAgICAgICAgICAgICAgIGNiKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogRmFpbGVkIHRvIHNlbmQgdHJhbnNhY3Rpb24gdGhyb3VnaCAke25vZGUuZ3JwY30gLSAke2Vycn1gKVxuICAgICAgICAgICAgY2IoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICAgICAgY29uc29sZS5sb2coJ0FsbCB0b2tlbiBjcmVhdGlvbiB0eG5zIHNlbnQnKVxuICAgICAgICB3ZmNiKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICAqL1xuICAgIF0sXG4gICAgKCkgPT4ge1xuICAgICAgLy8gQWxsIGRvbmUsIHNlbmQgdHhuIHJlc3BvbnNlXG4gICAgICB0eG5SZXNwb25zZS5yZWxheWVkID0gcmVsYXllZFRocm91Z2hcbiAgICAgIGNhbGxiYWNrKG51bGwsIHR4blJlc3BvbnNlKVxuICAgIH1cbiAgKVxufVxuXG4vLyBGdW5jdGlvbiB0byBjYWxsIEdldFRyYW5zZmVyVG9rZW5UeG4gQVBJXG5jb25zdCBjcmVhdGVUb2tlblRyYW5zZmVyVHhuID0gKHJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHR4ID0ge1xuICAgIC8vIG1hc3Rlcl9hZGRyOiByZXF1ZXN0LmFkZHJlc3NGcm9tLFxuICAgIGFkZHJlc3Nlc190bzogcmVxdWVzdC5hZGRyZXNzZXNfdG8sXG4gICAgYW1vdW50czogcmVxdWVzdC5hbW91bnRzLFxuICAgIHRva2VuX3R4aGFzaDogcmVxdWVzdC50b2tlbkhhc2gsXG4gICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICB4bXNzX3BrOiByZXF1ZXN0Lnhtc3NQayxcbiAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gIH1cblxuICBxcmxBcGkoJ2dldFRyYW5zZmVyVG9rZW5UeG4nLCB0eCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICAke2Vyci5tZXNzYWdlfWApXG4gICAgICBjYWxsYmFjayhlcnIsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRyYW5zZmVyUmVzcG9uc2UgPSB7XG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhudWxsLCB0cmFuc2ZlclJlc3BvbnNlKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgY29uZmlybVRva2VuVHJhbnNmZXIgPSAocmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgY29uZmlybVR4biA9IHtcbiAgICB0cmFuc2FjdGlvbl9zaWduZWQ6IHJlcXVlc3QuZXh0ZW5kZWRfdHJhbnNhY3Rpb25fdW5zaWduZWQudHgsXG4gIH1cbiAgY29uc3QgcmVsYXllZFRocm91Z2ggPSBbXVxuXG4gIC8vIGNoYW5nZSBBcnJheUJ1ZmZlclxuICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC5wdWJsaWNfa2V5ID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQucHVibGljX2tleVxuICApXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zYWN0aW9uX2hhc2ggPSB0b0J1ZmZlcihcbiAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50cmFuc2FjdGlvbl9oYXNoXG4gIClcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQuc2lnbmF0dXJlXG4gIClcbiAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNmZXJfdG9rZW4udG9rZW5fdHhoYXNoID0gdG9CdWZmZXIoXG4gICAgY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNmZXJfdG9rZW4udG9rZW5fdHhoYXNoXG4gIClcblxuICBjb25zdCBhZGRyc1RvID0gY29uZmlybVR4bi50cmFuc2FjdGlvbl9zaWduZWQudHJhbnNmZXJfdG9rZW4uYWRkcnNfdG9cbiAgY29uc3QgYWRkcnNUb0Zvcm1hdHRlZCA9IFtdXG4gIGFkZHJzVG8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IEZpdGVtID0gdG9CdWZmZXIoaXRlbSlcbiAgICBhZGRyc1RvRm9ybWF0dGVkLnB1c2goRml0ZW0pXG4gIH0pXG5cbiAgLy8gT3ZlcndyaXRlIGFkZHJzX3RvIHdpdGggb3VyIHVwZGF0ZWQgb25lXG4gIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnRyYW5zZmVyX3Rva2VuLmFkZHJzX3RvID0gYWRkcnNUb0Zvcm1hdHRlZFxuICBjb25maXJtVHhuLm5ldHdvcmsgPSByZXF1ZXN0Lm5ldHdvcmtcblxuICAvLyBSZWxheSB0cmFuc2FjdGlvbiB0aHJvdWdoIHVzZXIgbm9kZSwgdGhlbiBhbGwgZGVmYXVsdCBub2Rlcy5cbiAgbGV0IHR4blJlc3BvbnNlXG5cbiAgYXN5bmMud2F0ZXJmYWxsKFxuICAgIFtcbiAgICAgIC8vIFJlbGF5IHRocm91Z2ggdXNlciBub2RlLlxuICAgICAgZnVuY3Rpb24gKHdmY2IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBxcmxBcGkoJ3B1c2hUcmFuc2FjdGlvbicsIGNvbmZpcm1UeG4sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgRXJyb3I6IEZhaWxlZCB0byBzZW5kIHRyYW5zYWN0aW9uIHRocm91Z2ggJHtyZXMucmVsYXllZH0gLSAke2Vycn1gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgdHhuUmVzcG9uc2UgPSB7IGVycm9yOiBlcnIubWVzc2FnZSwgcmVzcG9uc2U6IGVyci5tZXNzYWdlIH1cbiAgICAgICAgICAgICAgd2ZjYigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBoYXNoUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgdHhuSGFzaDogQnVmZmVyLmZyb20oXG4gICAgICAgICAgICAgICAgICBjb25maXJtVHhuLnRyYW5zYWN0aW9uX3NpZ25lZC50cmFuc2FjdGlvbl9oYXNoXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UeG4udHJhbnNhY3Rpb25fc2lnbmVkLnNpZ25hdHVyZVxuICAgICAgICAgICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogbnVsbCwgcmVzcG9uc2U6IGhhc2hSZXNwb25zZSB9XG4gICAgICAgICAgICAgIHJlbGF5ZWRUaHJvdWdoLnB1c2gocmVzLnJlbGF5ZWQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBzZW50IHZpYSAke3Jlcy5yZWxheWVkfWApXG4gICAgICAgICAgICAgIHdmY2IoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDYXVnaHQgRXJyb3I6ICAke2Vycn1gKVxuICAgICAgICAgIHR4blJlc3BvbnNlID0geyBlcnJvcjogZXJyLCByZXNwb25zZTogZXJyIH1cbiAgICAgICAgICB3ZmNiKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qXG4gICAgLy8gTm93IHJlbGF5IHRocm91Z2ggYWxsIGRlZmF1bHQgbm9kZXMgdGhhdCB3ZSBoYXZlIGEgY29ubmVjdGlvbiB0b29cbiAgICBmdW5jdGlvbih3ZmNiKSB7XG4gICAgICBhc3luYy5lYWNoU2VyaWVzKERFRkFVTFRfTk9ERVMsIChub2RlLCBjYikgPT4ge1xuICAgICAgICBpZiAoKHFybENsaWVudC5oYXNPd25Qcm9wZXJ0eShub2RlLmdycGMpID09PSB0cnVlKSAmJiAobm9kZS5ncnBjICE9PSByZXF1ZXN0LmdycGMpKSB7XG4gICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgLy8gUHVzaCB0aGUgdHJhbnNhY3Rpb24gLSB3ZSBkb24ndCBjYXJlIGZvciBpdHMgcmVzcG9uc2VcbiAgICAgICAgICAgIHFybENsaWVudFtub2RlLmdycGNdLnB1c2hUcmFuc2FjdGlvbihjb25maXJtVHhuLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6IEZhaWxlZCB0byBzZW5kIHRyYW5zYWN0aW9uIHRocm91Z2ggJHtub2RlLmdycGN9IC0gJHtlcnJ9YClcbiAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRva2VuIHRyYW5zZmVyIFRyYW5zYWN0aW9uIHNlbnQgdmlhICR7bm9kZS5ncnBjfWApXG4gICAgICAgICAgICAgICAgcmVsYXllZFRocm91Z2gucHVzaChub2RlLmdycGMpXG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBGYWlsZWQgdG8gc2VuZCB0cmFuc2FjdGlvbiB0aHJvdWdoICR7bm9kZS5ncnBjfSAtICR7ZXJyfWApXG4gICAgICAgICAgICBjYigpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICBjb25zb2xlLmxvZygnQWxsIHRva2VuIHRyYW5zZmVyIHR4bnMgc2VudCcpXG4gICAgICAgIHdmY2IoKVxuICAgICAgfSlcbiAgICB9LFxuICAgICovXG4gICAgXSxcbiAgICAoKSA9PiB7XG4gICAgICAvLyBBbGwgZG9uZSwgc2VuZCB0eG4gcmVzcG9uc2VcbiAgICAgIHR4blJlc3BvbnNlLnJlbGF5ZWQgPSByZWxheWVkVGhyb3VnaFxuICAgICAgY2FsbGJhY2sobnVsbCwgdHhuUmVzcG9uc2UpXG4gICAgfVxuICApXG59XG5cbmNvbnN0IGFwaUNhbGwgPSAoYXBpVXJsLCBjYWxsYmFjaykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gSFRUUC5nZXQoYXBpVXJsKS5kYXRhXG4gICAgLy8gU3VjY2Vzc2Z1bCBjYWxsXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbXlFcnJvciA9IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCAnQ2Fubm90IGFjY2VzcyB0aGUgQVBJJylcbiAgICBjYWxsYmFjayhteUVycm9yLCBudWxsKVxuICB9XG59XG5cbi8vIExlZGdlciBOYW5vIFMgSW50ZWdyYXRpb24gZm9yIEVsZWN0cm9uIERlc2t0b3AgQXBwc1xuXG5sZXQgdHJhbnNwb3J0ID0gbnVsbFxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUcmFuc3BvcnQoKSB7XG4gIHRyYW5zcG9ydCA9IGF3YWl0IFRyYW5zcG9ydE5vZGVIaWQuY3JlYXRlKDEwKVxuICBjb25zdCBxcmwgPSBhd2FpdCBuZXcgUXJsKHRyYW5zcG9ydClcbiAgcmV0dXJuIHFybFxufVxuXG5jb25zdCBsZWRnZXJHZXRTdGF0ZSA9IGFzeW5jIChyZXF1ZXN0LCBjYikgPT4ge1xuICBjb25zdCBRcmxMZWRnZXIgPSBhd2FpdCBjcmVhdGVUcmFuc3BvcnQoKVxuICBhd2FpdCBRcmxMZWRnZXIuZ2V0X3N0YXRlKCkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgYXdhaXQgdHJhbnNwb3J0LmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYihudWxsLCBkYXRhKVxuICAgIH0pXG4gIH0pXG59XG5jb25zdCBsZWRnZXJQdWJsaWNLZXkgPSBhc3luYyAocmVxdWVzdCwgY2IpID0+IHtcbiAgY29uc3QgUXJsTGVkZ2VyID0gYXdhaXQgY3JlYXRlVHJhbnNwb3J0KClcbiAgYXdhaXQgUXJsTGVkZ2VyLnB1YmxpY2tleSgpLnRoZW4oYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGF3YWl0IHRyYW5zcG9ydC5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2IobnVsbCwgZGF0YSlcbiAgICB9KVxuICB9KVxufVxuY29uc3QgbGVkZ2VyQXBwVmVyc2lvbiA9IGFzeW5jIChyZXF1ZXN0LCBjYikgPT4ge1xuICBjb25zdCBRcmxMZWRnZXIgPSBhd2FpdCBjcmVhdGVUcmFuc3BvcnQoKVxuICBhd2FpdCBRcmxMZWRnZXIuZ2V0X3ZlcnNpb24oKS50aGVuKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgYXdhaXQgdHJhbnNwb3J0LmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYihudWxsLCBkYXRhKVxuICAgIH0pXG4gIH0pXG59XG5jb25zdCBsZWRnZXJMaWJyYXJ5VmVyc2lvbiA9IGFzeW5jIChyZXF1ZXN0LCBjYikgPT4ge1xuICBjb25zdCBRcmxMZWRnZXIgPSBhd2FpdCBjcmVhdGVUcmFuc3BvcnQoKVxuICBhd2FpdCBRcmxMZWRnZXIubGlicmFyeV92ZXJzaW9uKCkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgIGF3YWl0IHRyYW5zcG9ydC5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2IobnVsbCwgZGF0YSlcbiAgICB9KVxuICB9KVxufVxuY29uc3QgbGVkZ2VyVmVyaWZ5QWRkcmVzcyA9IGFzeW5jIChyZXF1ZXN0LCBjYikgPT4ge1xuICBjb25zdCBRcmxMZWRnZXIgPSBhd2FpdCBjcmVhdGVUcmFuc3BvcnQoKVxuICBhd2FpdCBRcmxMZWRnZXIudmlld0FkZHJlc3MoKS50aGVuKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgYXdhaXQgdHJhbnNwb3J0LmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYihudWxsLCBkYXRhKVxuICAgIH0pXG4gIH0pXG59XG5jb25zdCBsZWRnZXJDcmVhdGVUeCA9IGFzeW5jIChzb3VyY2VBZGRyLCBmZWUsIGRlc3RBZGRyLCBkZXN0QW1vdW50LCBjYikgPT4ge1xuICBjb25zdCBzb3VyY2VBZGRyQnVmZmVyID0gQnVmZmVyLmZyb20oc291cmNlQWRkcilcbiAgY29uc3QgZmVlQnVmZmVyID0gQnVmZmVyLmZyb20oZmVlKVxuXG4gIGNvbnN0IGRlc3RBZGRyRmluYWwgPSBbXVxuICBjb25zdCBkZXN0QW1vdW50RmluYWwgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RBZGRyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZGVzdEFkZHJGaW5hbC5wdXNoKEJ1ZmZlci5mcm9tKGRlc3RBZGRyW2ldKSlcbiAgICBkZXN0QW1vdW50RmluYWwucHVzaChCdWZmZXIuZnJvbShkZXN0QW1vdW50W2ldKSlcbiAgfVxuXG4gIGNvbnN0IFFybExlZGdlciA9IGF3YWl0IGNyZWF0ZVRyYW5zcG9ydCgpXG4gIGF3YWl0IFFybExlZGdlci5jcmVhdGVUeChcbiAgICBzb3VyY2VBZGRyQnVmZmVyLFxuICAgIGZlZUJ1ZmZlcixcbiAgICBkZXN0QWRkckZpbmFsLFxuICAgIGRlc3RBbW91bnRGaW5hbFxuICApLnRoZW4oYXN5bmMgKGRhdGEpID0+IHtcbiAgICBhd2FpdCB0cmFuc3BvcnQuY2xvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIGNiKG51bGwsIGRhdGEpXG4gICAgfSlcbiAgfSlcbn1cbmNvbnN0IGxlZGdlclJldHJpZXZlU2lnbmF0dXJlID0gYXN5bmMgKHR4biwgY2IpID0+IHtcbiAgY29uc3QgUXJsTGVkZ2VyID0gYXdhaXQgY3JlYXRlVHJhbnNwb3J0KClcbiAgYXdhaXQgUXJsTGVkZ2VyLnJldHJpZXZlU2lnbmF0dXJlKHR4bikudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgIGF3YWl0IHRyYW5zcG9ydC5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2IobnVsbCwgZGF0YSlcbiAgICB9KVxuICB9KVxufVxuY29uc3QgbGVkZ2VyU2V0SWR4ID0gYXN5bmMgKG90c0tleSwgY2IpID0+IHtcbiAgY29uc3QgUXJsTGVkZ2VyID0gYXdhaXQgY3JlYXRlVHJhbnNwb3J0KClcbiAgYXdhaXQgUXJsTGVkZ2VyLnNldElkeChvdHNLZXkpLnRoZW4oYXN5bmMgKGlkeFJlc3BvbnNlKSA9PiB7XG4gICAgYXdhaXQgdHJhbnNwb3J0LmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYihudWxsLCBpZHhSZXNwb25zZSlcbiAgICB9KVxuICB9KVxufVxuY29uc3QgbGVkZ2VyQ3JlYXRlTWVzc2FnZVR4ID0gYXN5bmMgKHNvdXJjZUFkZHIsIGZlZSwgbWVzc2FnZSwgY2IpID0+IHtcbiAgY29uc3Qgc291cmNlQWRkckJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHNvdXJjZUFkZHIpXG4gIGNvbnN0IGZlZUJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGZlZSlcbiAgY29uc3QgbWVzc2FnZUJ1ZmZlciA9IEJ1ZmZlci5mcm9tKG1lc3NhZ2UpXG5cbiAgY29uc3QgUXJsTGVkZ2VyID0gYXdhaXQgY3JlYXRlVHJhbnNwb3J0KClcbiAgYXdhaXQgUXJsTGVkZ2VyLmNyZWF0ZU1lc3NhZ2VUeChcbiAgICBzb3VyY2VBZGRyQnVmZmVyLFxuICAgIGZlZUJ1ZmZlcixcbiAgICBtZXNzYWdlQnVmZmVyXG4gICkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgIGF3YWl0IHRyYW5zcG9ydC5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgY2IobnVsbCwgZGF0YSlcbiAgICB9KVxuICB9KVxufVxuXG4vLyBEZWZpbmUgTWV0ZW9yIE1ldGhvZHNcbk1ldGVvci5tZXRob2RzKHtcbiAgY29ubmVjdFRvTm9kZShyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBTdHJpbmcpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNvbm5lY3RUb05vZGUpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNoZWNrTmV0d29ya0hlYWx0aChyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBTdHJpbmcpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNoZWNrTmV0d29ya0hlYWx0aCkocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgc3RhdHVzKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0U3RhdHMpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGdldFBlZXJzKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0S25vd25QZWVycykocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgZ2V0SGVpZ2h0KHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0SGVpZ2h0KShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBnZXRPYmplY3QocmVxdWVzdCkge1xuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhnZXRPYmplY3QpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGdldEFkZHJlc3NTdGF0ZShyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGdldEFkZHJlc3NTdGF0ZSkocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgZ2V0RnVsbEFkZHJlc3NTdGF0ZShyZXF1ZXN0KSB7XG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGdldEZ1bGxBZGRyZXNzU3RhdGUpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGdldE11bHRpU2lnQWRkcmVzc1N0YXRlKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0TXVsdGlTaWdBZGRyZXNzU3RhdGUpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGdldFRyYW5zYWN0aW9uc0J5QWRkcmVzcyhyZXF1ZXN0KSB7XG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGdldFRyYW5zYWN0aW9uc0J5QWRkcmVzcykocmVxdWVzdClcbiAgICByZXR1cm4gaGVscGVyc2FkZHJlc3NUcmFuc2FjdGlvbnMocmVzcG9uc2UpXG4gIH0sXG4gIGdldFRva2Vuc0J5QWRkcmVzcyhyZXF1ZXN0KSB7XG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGdldFRva2Vuc0J5QWRkcmVzcykocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgZ2V0TXVsdGlTaWdBZGRyZXNzZXNCeUFkZHJlc3MocmVxdWVzdCkge1xuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhnZXRNdWx0aVNpZ0FkZHJlc3Nlc0J5QWRkcmVzcykocmVxdWVzdClcbiAgICBjb25zb2xlLnRhYmxlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBnZXRNdWx0aVNpZ1NwZW5kVHhzQnlBZGRyZXNzKHJlcXVlc3QpIHtcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0TXVsdGlTaWdTcGVuZFR4c0J5QWRkcmVzcykocmVxdWVzdClcbiAgICBjb25zb2xlLnRhYmxlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBnZXRUeG5IYXNoKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0VHhuSGFzaCkocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcblxuICB0eGhhc2gocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGxldCBvdXRwdXRcbiAgICAvLyBhc3luY2hyb25vdXMgY2FsbCB0byBBUElcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0VHhuSGFzaCkocmVxdWVzdClcbiAgICBpZiAocmVzcG9uc2UudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfdG9rZW4nKSB7XG4gICAgICAvLyBSZXF1ZXN0IFRva2VuIERlY2ltYWxzIC8gU3ltYm9sXG4gICAgICBjb25zdCBzeW1ib2xSZXF1ZXN0ID0ge1xuICAgICAgICBxdWVyeTogQnVmZmVyLmZyb20oXG4gICAgICAgICAgcmVzcG9uc2UudHJhbnNhY3Rpb24udHgudHJhbnNmZXJfdG9rZW4udG9rZW5fdHhoYXNoXG4gICAgICAgICkudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRoaXNTeW1ib2xSZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0VHhuSGFzaCkoc3ltYm9sUmVxdWVzdClcbiAgICAgIG91dHB1dCA9IGhlbHBlcnMucGFyc2VUb2tlbkFuZFRyYW5zZmVyVG9rZW5UeChcbiAgICAgICAgdGhpc1N5bWJvbFJlc3BvbnNlLFxuICAgICAgICByZXNwb25zZVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQgPSBoZWxwZXJzLnR4aGFzaChyZXNwb25zZSlcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dFxuICB9LFxuXG4gIHRyYW5zZmVyQ29pbnMocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyh0cmFuc2ZlckNvaW5zKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBjcmVhdGVNdWx0aVNpZyhyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNyZWF0ZU11bHRpU2lnKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBzcGVuZE11bHRpU2lnKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoc3BlbmRNdWx0aVNpZykocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgdm90ZU11bHRpU2lnKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmModm90ZU11bHRpU2lnKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBnZXRPVFMocmVxdWVzdCkge1xuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhnZXRPVFMpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGFkZHJlc3NUcmFuc2FjdGlvbnMocmVxdWVzdCkge1xuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCB0YXJnZXRzID0gcmVxdWVzdC50eFxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICB0YXJnZXRzLmZvckVhY2goKGFycikgPT4ge1xuICAgICAgY29uc3QgdGhpc1JlcXVlc3QgPSB7XG4gICAgICAgIHF1ZXJ5OiBhcnIudHhoYXNoLFxuICAgICAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRoaXNUeG5IYXNoUmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGdldFR4bkhhc2gpKHRoaXNSZXF1ZXN0KVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGhlbHBlcnMudHhoYXNoKHRoaXNUeG5IYXNoUmVzcG9uc2UpXG5cbiAgICAgICAgbGV0IHRoaXNUeG4gPSB7fVxuXG4gICAgICAgIGlmIChvdXRwdXQudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInKSB7XG4gICAgICAgICAgdGhpc1R4biA9IHtcbiAgICAgICAgICAgIHR5cGU6IG91dHB1dC50cmFuc2FjdGlvbi50eC50cmFuc2FjdGlvblR5cGUsXG4gICAgICAgICAgICB0eGhhc2g6IGFyci50eGhhc2gsXG4gICAgICAgICAgICB0b3RhbFRyYW5zZmVycmVkOiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIudG90YWxUcmFuc2ZlcnJlZCxcbiAgICAgICAgICAgIG91dHB1dHM6IG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci5vdXRwdXRzLFxuICAgICAgICAgICAgZnJvbV9oZXg6IG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci5mcm9tX2hleCxcbiAgICAgICAgICAgIGZyb21fYjMyOiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIuZnJvbV9iMzIsXG4gICAgICAgICAgICBvdHNfa2V5OiBwYXJzZUludChcbiAgICAgICAgICAgICAgb3V0cHV0LnRyYW5zYWN0aW9uLnR4LnNpZ25hdHVyZS5zdWJzdHJpbmcoMCwgOCksXG4gICAgICAgICAgICAgIDE2XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmVlOiBvdXRwdXQudHJhbnNhY3Rpb24udHguZmVlLFxuICAgICAgICAgICAgYmxvY2s6IG91dHB1dC50cmFuc2FjdGlvbi5oZWFkZXIuYmxvY2tfbnVtYmVyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBvdXRwdXQudHJhbnNhY3Rpb24uaGVhZGVyLnRpbWVzdGFtcF9zZWNvbmRzLFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQucHVzaCh0aGlzVHhuKVxuICAgICAgICB9IGVsc2UgaWYgKG91dHB1dC50cmFuc2FjdGlvbi50eC50cmFuc2FjdGlvblR5cGUgPT09ICd0b2tlbicpIHtcbiAgICAgICAgICB0aGlzVHhuID0ge1xuICAgICAgICAgICAgdHlwZTogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LnRyYW5zYWN0aW9uVHlwZSxcbiAgICAgICAgICAgIHR4aGFzaDogYXJyLnR4aGFzaCxcbiAgICAgICAgICAgIGZyb21faGV4OiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIuZnJvbV9oZXgsXG4gICAgICAgICAgICBmcm9tX2IzMjogb3V0cHV0LnRyYW5zYWN0aW9uLmV4cGxvcmVyLmZyb21fYjMyLFxuICAgICAgICAgICAgc3ltYm9sOiBvdXRwdXQudHJhbnNhY3Rpb24udHgudG9rZW4uc3ltYm9sLFxuICAgICAgICAgICAgbmFtZTogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LnRva2VuLm5hbWUsXG4gICAgICAgICAgICBkZWNpbWFsczogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LnRva2VuLmRlY2ltYWxzLFxuICAgICAgICAgICAgb3RzX2tleTogcGFyc2VJbnQoXG4gICAgICAgICAgICAgIG91dHB1dC50cmFuc2FjdGlvbi50eC5zaWduYXR1cmUuc3Vic3RyaW5nKDAsIDgpLFxuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGZlZTogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LmZlZSxcbiAgICAgICAgICAgIGJsb2NrOiBvdXRwdXQudHJhbnNhY3Rpb24uaGVhZGVyLmJsb2NrX251bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogb3V0cHV0LnRyYW5zYWN0aW9uLmhlYWRlci50aW1lc3RhbXBfc2Vjb25kcyxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQucHVzaCh0aGlzVHhuKVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHRoaXNUeG5IYXNoUmVzcG9uc2UudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlXG4gICAgICAgICAgPT09ICd0cmFuc2Zlcl90b2tlbidcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gUmVxdWVzdCBUb2tlbiBTeW1ib2xcbiAgICAgICAgICBjb25zdCBzeW1ib2xSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgcXVlcnk6IEJ1ZmZlci5mcm9tKFxuICAgICAgICAgICAgICBCdWZmZXIuZnJvbShcbiAgICAgICAgICAgICAgICB0aGlzVHhuSGFzaFJlc3BvbnNlLnRyYW5zYWN0aW9uLnR4LnRyYW5zZmVyX3Rva2VuLnRva2VuX3R4aGFzaFxuICAgICAgICAgICAgICApLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgJ2hleCdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXR3b3JrOiByZXF1ZXN0Lm5ldHdvcmssXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRoaXNTeW1ib2xSZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoZ2V0VHhuSGFzaCkoc3ltYm9sUmVxdWVzdClcbiAgICAgICAgICBjb25zdCBoZWxwZXJzUmVzcG9uc2UgPSBoZWxwZXJzLnBhcnNlVG9rZW5BbmRUcmFuc2ZlclRva2VuVHgoXG4gICAgICAgICAgICB0aGlzU3ltYm9sUmVzcG9uc2UsXG4gICAgICAgICAgICB0aGlzVHhuSGFzaFJlc3BvbnNlXG4gICAgICAgICAgKVxuICAgICAgICAgIHRoaXNUeG4gPSB7XG4gICAgICAgICAgICB0eXBlOiBoZWxwZXJzUmVzcG9uc2UudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlLFxuICAgICAgICAgICAgdHhoYXNoOiBhcnIudHhoYXNoLFxuICAgICAgICAgICAgc3ltYm9sOiBoZWxwZXJzUmVzcG9uc2UudHJhbnNhY3Rpb24uZXhwbG9yZXIuc3ltYm9sLFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB0b3RhbFRyYW5zZmVycmVkOlxuICAgICAgICAgICAgICBoZWxwZXJzUmVzcG9uc2UudHJhbnNhY3Rpb24uZXhwbG9yZXIudG90YWxUcmFuc2ZlcnJlZCxcbiAgICAgICAgICAgIG91dHB1dHM6IGhlbHBlcnNSZXNwb25zZS50cmFuc2FjdGlvbi5leHBsb3Jlci5vdXRwdXRzLFxuICAgICAgICAgICAgZnJvbV9oZXg6IGhlbHBlcnNSZXNwb25zZS50cmFuc2FjdGlvbi5leHBsb3Jlci5mcm9tX2hleCxcbiAgICAgICAgICAgIGZyb21fYjMyOiBoZWxwZXJzUmVzcG9uc2UudHJhbnNhY3Rpb24uZXhwbG9yZXIuZnJvbV9iMzIsXG4gICAgICAgICAgICBvdHNfa2V5OiBwYXJzZUludChcbiAgICAgICAgICAgICAgaGVscGVyc1Jlc3BvbnNlLnRyYW5zYWN0aW9uLnR4LnNpZ25hdHVyZS5zdWJzdHJpbmcoMCwgOCksXG4gICAgICAgICAgICAgIDE2XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmVlOiBoZWxwZXJzUmVzcG9uc2UudHJhbnNhY3Rpb24udHguZmVlIC8gU0hPUl9QRVJfUVVBTlRBLFxuICAgICAgICAgICAgYmxvY2s6IGhlbHBlcnNSZXNwb25zZS50cmFuc2FjdGlvbi5oZWFkZXIuYmxvY2tfbnVtYmVyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBoZWxwZXJzUmVzcG9uc2UudHJhbnNhY3Rpb24uaGVhZGVyLnRpbWVzdGFtcF9zZWNvbmRzLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXNUeG4pXG4gICAgICAgIH0gZWxzZSBpZiAob3V0cHV0LnRyYW5zYWN0aW9uLnR4LnRyYW5zYWN0aW9uVHlwZSA9PT0gJ2NvaW5iYXNlJykge1xuICAgICAgICAgIHRoaXNUeG4gPSB7XG4gICAgICAgICAgICB0eXBlOiBvdXRwdXQudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlLFxuICAgICAgICAgICAgdHhoYXNoOiBhcnIudHhoYXNoLFxuICAgICAgICAgICAgYW1vdW50OiBvdXRwdXQudHJhbnNhY3Rpb24udHguY29pbmJhc2UuYW1vdW50IC8gU0hPUl9QRVJfUVVBTlRBLFxuICAgICAgICAgICAgZnJvbV9oZXg6IG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci5mcm9tX2hleCxcbiAgICAgICAgICAgIGZyb21fYjMyOiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIuZnJvbV9iMzIsXG4gICAgICAgICAgICB0bzogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LmNvaW5iYXNlLmFkZHJfdG8sXG4gICAgICAgICAgICBvdHNfa2V5OiAnJyxcbiAgICAgICAgICAgIGZlZTogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LmZlZSAvIFNIT1JfUEVSX1FVQU5UQSxcbiAgICAgICAgICAgIGJsb2NrOiBvdXRwdXQudHJhbnNhY3Rpb24uaGVhZGVyLmJsb2NrX251bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogb3V0cHV0LnRyYW5zYWN0aW9uLmhlYWRlci50aW1lc3RhbXBfc2Vjb25kcyxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2godGhpc1R4bilcbiAgICAgICAgfSBlbHNlIGlmIChvdXRwdXQudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlID09PSAnc2xhdmUnKSB7XG4gICAgICAgICAgdGhpc1R4biA9IHtcbiAgICAgICAgICAgIHR5cGU6IG91dHB1dC50cmFuc2FjdGlvbi50eC50cmFuc2FjdGlvblR5cGUsXG4gICAgICAgICAgICB0eGhhc2g6IGFyci50eGhhc2gsXG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBmcm9tX2hleDogb3V0cHV0LnRyYW5zYWN0aW9uLmV4cGxvcmVyLmZyb21faGV4LFxuICAgICAgICAgICAgZnJvbV9iMzI6IG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci5mcm9tX2IzMixcbiAgICAgICAgICAgIHRvOiAnJyxcbiAgICAgICAgICAgIG90c19rZXk6IHBhcnNlSW50KFxuICAgICAgICAgICAgICBvdXRwdXQudHJhbnNhY3Rpb24udHguc2lnbmF0dXJlLnN1YnN0cmluZygwLCA4KSxcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBmZWU6IG91dHB1dC50cmFuc2FjdGlvbi50eC5mZSxcbiAgICAgICAgICAgIGJsb2NrOiBvdXRwdXQudHJhbnNhY3Rpb24uaGVhZGVyLmJsb2NrX251bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogb3V0cHV0LnRyYW5zYWN0aW9uLmhlYWRlci50aW1lc3RhbXBfc2Vjb25kcyxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2godGhpc1R4bilcbiAgICAgICAgfSBlbHNlIGlmIChvdXRwdXQudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlID09PSAnbGF0dGljZVBLJykge1xuICAgICAgICAgIHRoaXNUeG4gPSB7XG4gICAgICAgICAgICB0eXBlOiBvdXRwdXQudHJhbnNhY3Rpb24udHgudHJhbnNhY3Rpb25UeXBlLFxuICAgICAgICAgICAgdHhoYXNoOiBhcnIudHhoYXNoLFxuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgZnJvbV9oZXg6IG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci5mcm9tX2hleCxcbiAgICAgICAgICAgIGZyb21fYjMyOiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIuZnJvbV9iMzIsXG4gICAgICAgICAgICB0bzogJycsXG4gICAgICAgICAgICBvdHNfa2V5OiBwYXJzZUludChcbiAgICAgICAgICAgICAgb3V0cHV0LnRyYW5zYWN0aW9uLnR4LnNpZ25hdHVyZS5zdWJzdHJpbmcoMCwgOCksXG4gICAgICAgICAgICAgIDE2XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmVlOiBvdXRwdXQudHJhbnNhY3Rpb24udHguZmVlLFxuICAgICAgICAgICAgYmxvY2s6IG91dHB1dC50cmFuc2FjdGlvbi5oZWFkZXIuYmxvY2tfbnVtYmVyLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBvdXRwdXQudHJhbnNhY3Rpb24uaGVhZGVyLnRpbWVzdGFtcF9zZWNvbmRzLFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHQucHVzaCh0aGlzVHhuKVxuICAgICAgICB9IGVsc2UgaWYgKG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci50eXBlID09PSAnTUVTU0FHRScpIHtcbiAgICAgICAgICB0aGlzVHhuID0ge1xuICAgICAgICAgICAgdHlwZTogb3V0cHV0LnRyYW5zYWN0aW9uLmV4cGxvcmVyLnR5cGUsXG4gICAgICAgICAgICB0eGhhc2g6IGFyci50eGhhc2gsXG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBmcm9tX2hleDogb3V0cHV0LnRyYW5zYWN0aW9uLmV4cGxvcmVyLmZyb21faGV4LFxuICAgICAgICAgICAgZnJvbV9iMzI6IG91dHB1dC50cmFuc2FjdGlvbi5leHBsb3Jlci5mcm9tX2IzMixcbiAgICAgICAgICAgIHRvOiAnJyxcbiAgICAgICAgICAgIG90c19rZXk6IHBhcnNlSW50KFxuICAgICAgICAgICAgICBvdXRwdXQudHJhbnNhY3Rpb24udHguc2lnbmF0dXJlLnN1YnN0cmluZygwLCA4KSxcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBmZWU6IG91dHB1dC50cmFuc2FjdGlvbi50eC5mZWUsXG4gICAgICAgICAgICBibG9jazogb3V0cHV0LnRyYW5zYWN0aW9uLmhlYWRlci5ibG9ja19udW1iZXIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG91dHB1dC50cmFuc2FjdGlvbi5oZWFkZXIudGltZXN0YW1wX3NlY29uZHMsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXNUeG4pXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgb3V0cHV0LnRyYW5zYWN0aW9uLmV4cGxvcmVyLnR5cGUgPT09ICdET0NVTUVOVF9OT1RBUklTQVRJT04nXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXNUeG4gPSB7XG4gICAgICAgICAgICB0eXBlOiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIudHlwZSxcbiAgICAgICAgICAgIHR4aGFzaDogYXJyLnR4aGFzaCxcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIGZyb21faGV4OiBvdXRwdXQudHJhbnNhY3Rpb24uZXhwbG9yZXIuZnJvbV9oZXgsXG4gICAgICAgICAgICBmcm9tX2IzMjogb3V0cHV0LnRyYW5zYWN0aW9uLmV4cGxvcmVyLmZyb21fYjMyLFxuICAgICAgICAgICAgdG86ICcnLFxuICAgICAgICAgICAgb3RzX2tleTogcGFyc2VJbnQoXG4gICAgICAgICAgICAgIG91dHB1dC50cmFuc2FjdGlvbi50eC5zaWduYXR1cmUuc3Vic3RyaW5nKDAsIDgpLFxuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGZlZTogb3V0cHV0LnRyYW5zYWN0aW9uLnR4LmZlZSxcbiAgICAgICAgICAgIGJsb2NrOiBvdXRwdXQudHJhbnNhY3Rpb24uaGVhZGVyLmJsb2NrX251bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogb3V0cHV0LnRyYW5zYWN0aW9uLmhlYWRlci50aW1lc3RhbXBfc2Vjb25kcyxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2godGhpc1R4bilcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBFcnJvciBmZXRjaGluZyB0cmFuc2FjdGlvbiBoYXNoIGluIGFkZHJlc3NUcmFuc2FjdGlvbnMgJyR7YXJyLnR4aGFzaH0nIC0gJHtlcnJ9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgY29uZmlybVRyYW5zYWN0aW9uKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoY29uZmlybVRyYW5zYWN0aW9uKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBjb25maXJtTXVsdGlTaWdDcmVhdGUocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhjb25maXJtTXVsdGlTaWdDcmVhdGUpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNvbmZpcm1NdWx0aVNpZ1NwZW5kKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoY29uZmlybU11bHRpU2lnU3BlbmQpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNvbmZpcm1NdWx0aVNpZ1ZvdGUocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhjb25maXJtTXVsdGlTaWdWb3RlKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBjcmVhdGVNZXNzYWdlVHhuKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoY3JlYXRlTWVzc2FnZVR4bikocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgY3JlYXRlS2V5YmFzZVR4bihyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNyZWF0ZUtleWJhc2VUeG4pKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNyZWF0ZUdpdGh1YlR4bihyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNyZWF0ZUdpdGh1YlR4bikocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgY29uZmlybU1lc3NhZ2VDcmVhdGlvbihyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNvbmZpcm1NZXNzYWdlQ3JlYXRpb24pKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNvbmZpcm1LZXliYXNlQ3JlYXRpb24ocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhjb25maXJtS2V5YmFzZUNyZWF0aW9uKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBjb25maXJtR2l0aHViQ3JlYXRpb24ocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhjb25maXJtR2l0aHViQ3JlYXRpb24pKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNyZWF0ZVRva2VuVHhuKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoY3JlYXRlVG9rZW5UeG4pKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNvbmZpcm1Ub2tlbkNyZWF0aW9uKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE9iamVjdClcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoY29uZmlybVRva2VuQ3JlYXRpb24pKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGNyZWF0ZVRva2VuVHJhbnNmZXJUeG4ocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgT2JqZWN0KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhjcmVhdGVUb2tlblRyYW5zZmVyVHhuKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBjb25maXJtVG9rZW5UcmFuc2ZlcihyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBPYmplY3QpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGNvbmZpcm1Ub2tlblRyYW5zZmVyKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBRUkx2YWx1ZSgpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2JpdHRyZXguY29tL2FwaS92MS4xL3B1YmxpYy9nZXRtYXJrZXRzdW1tYXJ5P21hcmtldD1idGMtcXJsJ1xuICAgIGNvbnN0IGFwaVVybFVTRCA9ICdodHRwczovL2JpdHRyZXguY29tL2FwaS92MS4xL3B1YmxpYy9nZXRtYXJrZXRzdW1tYXJ5P21hcmtldD11c2R0LWJ0YydcbiAgICAvLyBhc3luY2hyb25vdXMgY2FsbCB0byBBUElcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMoYXBpQ2FsbCkoYXBpVXJsKVxuICAgIGNvbnN0IHJlc3BvbnNlVVNEID0gTWV0ZW9yLndyYXBBc3luYyhhcGlDYWxsKShhcGlVcmxVU0QpXG4gICAgY29uc3QgdXNkID0gcmVzcG9uc2UucmVzdWx0WzBdLkxhc3QgKiByZXNwb25zZVVTRC5yZXN1bHRbMF0uTGFzdFxuICAgIHJldHVybiB1c2RcbiAgfSxcbiAgbGVkZ2VyR2V0U3RhdGUocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgQXJyYXkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGxlZGdlckdldFN0YXRlKShyZXF1ZXN0KVxuICAgIGNvbnNvbGUubG9nKCdyZXMnKVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBsZWRnZXJQdWJsaWNLZXkocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgQXJyYXkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGxlZGdlclB1YmxpY0tleSkocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgbGVkZ2VyQXBwVmVyc2lvbihyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBBcnJheSlcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMobGVkZ2VyQXBwVmVyc2lvbikocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbiAgbGVkZ2VyTGlicmFyeVZlcnNpb24ocmVxdWVzdCkge1xuICAgIHRoaXMudW5ibG9jaygpXG4gICAgY2hlY2socmVxdWVzdCwgQXJyYXkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGxlZGdlckxpYnJhcnlWZXJzaW9uKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBsZWRnZXJWZXJpZnlBZGRyZXNzKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIEFycmF5KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhsZWRnZXJWZXJpZnlBZGRyZXNzKShyZXF1ZXN0KVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBsZWRnZXJDcmVhdGVUeChzb3VyY2VBZGRyLCBmZWUsIGRlc3RBZGRyLCBkZXN0QW1vdW50KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhzb3VyY2VBZGRyLCBNYXRjaC5BbnkpXG4gICAgY2hlY2soZmVlLCBNYXRjaC5BbnkpXG4gICAgY2hlY2soZGVzdEFkZHIsIE1hdGNoLkFueSlcbiAgICBjaGVjayhkZXN0QW1vdW50LCBNYXRjaC5BbnkpXG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICcyOiBzb3VyY2VBZGRyOiAnLFxuICAgICAgc291cmNlQWRkcixcbiAgICAgICcgLSBmZWU6ICcsXG4gICAgICBmZWUsXG4gICAgICAnIC0gZGVzdEFkZHI6ICcsXG4gICAgICBkZXN0QWRkcixcbiAgICAgICcgLSBkZXN0QW1vdW50OiAnLFxuICAgICAgZGVzdEFtb3VudFxuICAgIClcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhsZWRnZXJDcmVhdGVUeCkoXG4gICAgICBzb3VyY2VBZGRyLFxuICAgICAgZmVlLFxuICAgICAgZGVzdEFkZHIsXG4gICAgICBkZXN0QW1vdW50XG4gICAgKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9LFxuICBsZWRnZXJDcmVhdGVNZXNzYWdlVHgoc291cmNlQWRkciwgZmVlLCBtZXNzYWdlKSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhzb3VyY2VBZGRyLCBNYXRjaC5BbnkpXG4gICAgY2hlY2soZmVlLCBNYXRjaC5BbnkpXG4gICAgY2hlY2sobWVzc2FnZSwgTWF0Y2guQW55KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gTWV0ZW9yLndyYXBBc3luYyhsZWRnZXJDcmVhdGVNZXNzYWdlVHgpKFxuICAgICAgc291cmNlQWRkcixcbiAgICAgIGZlZSxcbiAgICAgIG1lc3NhZ2VcbiAgICApXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGxlZGdlclJldHJpZXZlU2lnbmF0dXJlKHJlcXVlc3QpIHtcbiAgICB0aGlzLnVuYmxvY2soKVxuICAgIGNoZWNrKHJlcXVlc3QsIE1hdGNoLkFueSlcbiAgICBjb25zdCByZXNwb25zZSA9IE1ldGVvci53cmFwQXN5bmMobGVkZ2VyUmV0cmlldmVTaWduYXR1cmUpKHJlcXVlc3QpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sXG4gIGxlZGdlclNldElkeChyZXF1ZXN0KSB7XG4gICAgdGhpcy51bmJsb2NrKClcbiAgICBjaGVjayhyZXF1ZXN0LCBNYXRjaC5BbnkpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBNZXRlb3Iud3JhcEFzeW5jKGxlZGdlclNldElkeCkocmVxdWVzdClcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSxcbn0pXG5cbi8vIFNlcnZlciBTdGFydHVwIGNvbW1hbmRzXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gIE1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgUVJMIFdhbGxldCBTdGFydGluZyAtIFZlcnNpb246ICR7V0FMTEVUX1ZFUlNJT059YClcblxuICAgIC8vIEF0dGVtcHQgdG8gY3JlYXRlIGNvbm5lY3Rpb25zIHdpdGggYWxsIG5vZGVzXG4gICAgY29ubmVjdE5vZGVzKClcbiAgfSlcbn1cblxuLy8gTWFpbnRhaW4gbm9kZSBjb25uZWN0aW9uIHN0YXR1c1xuTWV0ZW9yLnNldEludGVydmFsKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1JlZnJlc2hpbmcgbm9kZSBjb25uZWN0aW9uIHN0YXR1cycpXG5cbiAgLy8gTWFpbnRhaW4gc3RhdGUgb2YgY29ubmVjdGlvbnMgdG8gYWxsIG5vZGVzXG4gIGNvbm5lY3ROb2RlcygpXG59LCA2MDAwMClcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyAtIC0gLSAtIFdFQkRSSVZFUi1JTyAgLSAtIC0gLVxuICB3ZWJkcml2ZXJpbzoge1xuICAgIGRlc2lyZWRDYXBhYmlsaXRpZXM6IHtcbiAgICAgIGNocm9tZU9wdGlvbnM6IHtcbiAgICAgICAgYXJnczogW1wiaGVhZGxlc3NcIiwgXCJkaXNhYmxlLWdwdVwiLCBcIm5vLXNhbmRib3hcIl1cbiAgICAgIH0sXG4gICAgICBpc0hlYWRsZXNzOiB0cnVlXG4gICAgfVxuICB9LFxufTsiLCIvLyBTZXJ2ZXIgZW50cnkgcG9pbnQsIGltcG9ydHMgYWxsIHNlcnZlciBjb2RlXG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCdcbmltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXInXG4iXX0=
