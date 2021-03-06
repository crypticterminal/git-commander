var blessed = require('blessed'),
    config = require('../config'),
    styles  = require('./style/branch')(config);

var layout  = null,
    list    = null,
    menubar = null,
    prompt  = null;

var init = function (screen) {
  styles.layout.parent = screen;

  layout = blessed.layout(styles.layout);

  styles.list.parent    = layout;
  styles.menubar.parent = layout;

  list    = blessed.list(styles.list);
  menubar = blessed.listbar(styles.menubar);

  styles.prompt.parent  = list;
  prompt  = blessed.prompt(styles.prompt);

  return {
    layout : layout,
    list   : list,
    menubar: menubar,
    prompt : prompt
  };
};

module.exports = init;
