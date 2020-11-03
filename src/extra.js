(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["dependency"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    // module.exports = factory(require("dependency"));
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    Object.assign(root, factory());
  }
})(this, function (dependency) {
  return {
    kakamaki: () => console.log("Kakamaki YO"),
  };
});
