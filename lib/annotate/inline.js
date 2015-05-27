var rules = require('../rules/inline').gfm;
var engine = require('./engine');

// Add rawStart/rawEnd to our rules
var newRules = Object.create(rules);
newRules.rawStart = /^{%([\s]*)raw([\s]*)%}/;
newRules.rawEnd =  /^{%([\s]*)endraw([\s]*)%}/;

// List of all the regexes we want to run
var ruleTypes = [
    'escape', 'autolink', 'url', 'tag', 'link', 'reflink',
    'nolink', 'reffn', 'strong', 'em', 'code', 'br',
    'del', 'text'
];

// Mapping if rule type is different from token type
var ruleMap = {};

function annotate(src) {
    return engine(src, newRules, ruleTypes, ruleMap);
}

module.exports = annotate;
