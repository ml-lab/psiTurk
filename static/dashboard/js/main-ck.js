// Filename: main.js
// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: "libs/jquery",
    underscore: "libs/underscore",
    backbone: "libs/backbone",
    text: "libs/text",
    cs: "libs/cs",
    bootstrap: "libs/bootstrap",
    inspiritas: "libs/inspiritas",
    highcharts: "libs/highcharts",
    dropdown: "libs/bootstrap-dropdown",
    collapse: "libs/bootstrap-collapse",
    nod: "libs/nod"
  },
  shim: {
    bootstrap: [ "jquery" ],
    dropdown: [ "bootstrap" ],
    collapse: [ "bootstrap" ],
    highcharts: {
      deps: [ "jquery" ],
      exports: "Highcharts"
    },
    inspiritas: [ "highcharts", "jquery" ],
    nod: [ "jquery", "bootstrap" ],
    backbone: {
      deps: [ "underscore", "jquery" ],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    }
  }
});

require([ "jquery", "app", "highcharts", "bootstrap", "dropdown", "collapse" ], function(e, t, n) {
  t.initialize();
});