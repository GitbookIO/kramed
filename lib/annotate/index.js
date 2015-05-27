var blocks = require('./blocks');
var inline = require('./inline');

function annotate(src) {
    return blocks(src);
}

module.exports = annotate;
module.exports.blocks = blocks;
module.exports.inline = inline;
