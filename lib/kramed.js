/**
 * kramed - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/GitbookIO/kramed
 */
/**
 * kramed - a kramdown parser, based off chjj's kramed
 * Copyright (c) 2014, Aaron O'Mullan. (MIT Licensed)
 * https://github.com/GitbookIO/kramed
*/

var _utils = require('./_utils');
var merge = _utils.merge;

var Lexer = require('./lex/block');
var InlineLexer = require('./lex/inline');

var Parser = require('./parser');
var Renderer = require('./renderer');

/**
 * Options
 */

kramed.options =
kramed.setOptions = function(opt) {
  merge(kramed.defaults, opt);
  return kramed;
};

kramed.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false,
  mathjax: true,
};

/**
 * Expose
 */

kramed.Parser = Parser;
kramed.parser = Parser.parse;

kramed.Renderer = Renderer;

kramed.Lexer = Lexer;
kramed.lexer = Lexer.lex;

kramed.InlineLexer = InlineLexer;
kramed.inlineLexer = InlineLexer.output;

kramed.parse = kramed;

module.exports = kramed;
