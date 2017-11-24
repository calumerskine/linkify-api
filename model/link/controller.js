const Controller = require('../../lib/controller');
const linkFacade = require('./facade');

class LinkController extends Controller {}

module.exports = new LinkController(linkFacade);
