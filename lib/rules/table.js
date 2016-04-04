var _utils = require('../utils');
var replace = _utils.replace;

var table = {
    // Split a row into cells
    cell: / *pipe */,

    // Replace trailing pipe
    trailingPipe: /^ *| *pipe *$/g,

    // Remove trailing pipe of align
    trailingPipeAlign: /^ *|pipe *$/g,

    // Remove trailing pipe of cell
    trailingPipeCell: /(?: *pipe *)?\n$/,

    // Remove edge pipes of a cell
    edgePipesCell: /^ *pipe *| *pipe *$/g
};

var pipe = /\|/;

table.cell = replace(table.cell)
  (/pipe/g, pipe)
  ();

table.trailingPipe = replace(table.trailingPipe, 'g')
  (/pipe/g, pipe)
  ();

table.trailingPipeAlign = replace(table.trailingPipeAlign, 'g')
  (/pipe/g, pipe)
  ();

table.trailingPipeCell = replace(table.trailingPipeCell, 'g')
  (/pipe/g, pipe)
  ();

table.edgePipesCell = replace(table.edgePipesCell, 'g')
  (/pipe/g, pipe)
  ();

module.exports = table;
