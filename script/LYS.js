/**********
 * Vision 1.1.
 * ***********/
var LYS = LYS || function(q,c){return LYS.dom?LYS.dom(q,c):null};

//设置global
LYS.global = LYS.global || (function() {
    var global = global|| {};
    return function( key, value, overwrite ) {
        if ( typeof value != "undefined" ) {
            overwrite || ( value = typeof global[ key ] == "undefined" ? value : global[ key ] );
            global[ key ] =  value;

        } else if (key && typeof global[ key ] == "undefined" ) {
            global[ key ] = {};
        }
        return global[ key ];
    }
})();

//创建扩展方法，数据类型判断

LYS.type = function(){

}
