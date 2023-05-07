(function(back) {
  var FILE = "combinav.json";
  // Load settings
  const settings = Object.assign({
    speed: 6, // when speed (mp/h) is lower than this use direction from compass (if 0, disable)
  }, require("Storage").readJSON(FILE, true) || {});

  function writeSettings() {
    require('Storage').writeJSON(FILE, settings);
  }

  const menu = {
    "" : { "title" : "Combi Navigation" },
    "< Back" : () => back(),
    /*LANG*/'Speed threshold': {
      value: settings.speed,
      min: 0, max: 20, step: 0.5,
      onchange: v => {
        settings.speed = v;
        writeSettings();
      }
    },
  };

  // Show the menu
  E.showMenu(menu);
})
