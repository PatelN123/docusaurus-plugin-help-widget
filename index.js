const path = require("path");

module.exports = function(context) {
  return {
    name: "docusaurus-plugin-help-widgets",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            (function (w,d,s,o,f,js,fjs) {
              w['help-widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
              js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
              js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
            }(window, document, 'script', 'hw', 'https://cdn.jsdelivr.net/npm/dsn-scripts@1.0.0/life-help-widget.js'));
            hw('init', { });
            hw('message', '');
            `
          }
        ]
      };
    }
  };
};
