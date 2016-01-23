define("two",
  ["require", "domReady/one"],
  function(require, one) {
    return {
      size: "small",
      color: "redtwo",
      doSomething: function() {
        return require("one").doSomething();
      }
    };
  }
);
