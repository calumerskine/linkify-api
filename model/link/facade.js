const Facade = require('../../lib/facade');
const linkSchema = require('./schema');

class LinkFacade extends Facade {}

module.exports = new LinkFacade('Link', linkSchema);
