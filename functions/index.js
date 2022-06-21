const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const { api } = require("./api"); // import {api} from "./api"

// setup das functions
exports.api = functions.https.onRequest(api);