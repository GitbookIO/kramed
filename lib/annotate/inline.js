var rules = require('../rules/inline').gfm;
var engine = require('./engine');

// List of all the regexes we want to run
var ruleTypes = [
    'escape', 'autolink', 'url', 'tag', 'link', 'reflink',
    'nolink', 'reffn', 'strong', 'em', 'code', 'br',
    'del', 'text'
];

// Mapping if rule type is different from token type
var ruleMap = {};

function annotate(src) {
    return engine(src, rules, ruleTypes, ruleMap);
}

module.exports = annotate;
