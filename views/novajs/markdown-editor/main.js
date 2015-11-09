(function() {(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('http://s1.qhimg.com/static/e11782b93c2739f5/marked'));
  }
  else if (typeof define === 'function' && define.amd) {
    define(['http://s1.qhimg.com/static/e11782b93c2739f5/marked'], factory);
  }
  else {
    var globalAlias = 'Nova.Components.MarkdownEditor';
    var namespace = globalAlias.split('.');
    var parent = root;
    for ( var i = 0; i < namespace.length-1; i++ ) {
      if ( parent[namespace[i]] === undefined ) parent[namespace[i]] = {};
      parent = parent[namespace[i]];
    }
    parent[namespace[namespace.length-1]] = factory(root['_1']);
  }
}(this, function(_1) {
  function _requireDep(name) {
    return {'http://s1.qhimg.com/static/e11782b93c2739f5/marked': _1}[name];
  }

  var _bundleExports = undefined;NovaExports.__fixedUglify="script>";NovaExports.exports={"stylesheet":":host{display:block;padding:15px 20px;border:1px solid rgba(16,16,16,.1);background:#fff}textarea{width:100%;height:100px;resize:none;padding:5px}","template":"\n        <h3>Markdown Editor</h3>\n        <textarea value=\"{{content::input}}\"></textarea>\n        <p></p>\n    "};
        NovaExports({
            is: 'markdown-editor',
            props: {
                content: {
                    type: String,
                    value: '# Hello\nType some markdown here.'
                }
            },
            createdHandler: function() {
                this.on('_contentChanged', this.contentObserver);
                this.render();
            },
            contentObserver: function(ev, oldVal, newVal) {
                this.render();
            },
            render: function() {
                this.querySelector('p').innerHTML = marked(this.content);
            }
        });
    

  return _bundleExports;
}));}).call(window)