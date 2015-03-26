/**********
 * Vision 1.1.
 * ***********/
define(function(require, exports, module){
    var LYS = LYS || function(q,c){return LYS.dom?LYS.dom(q,c):null};
    console.log(LYS);
    //设置global
    LYS.global = LYS.global || (function() {
        var global = global || {};
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
    LYS.type = (function(){
        var str = "Object Boolean Date Error Function Number RegExp String";
        str.split(" ").forEach(function (name) {
            LYS[ "is" + name ] = function ( unknow ) {
                return LYS.type(unknow) === name.toLowerCase();
            }
        });
        // 方法主体
        return function ( unknow ) {
            var type = typeof unknow;
            if(type ==='object'){
                if(Object.prototype.toString.call(unknow) === '[object Array]'){
                    type = 'array'
                }
            }
            return type;
        };
    }());
    //数组与一般对象的判断稍微不一样
    LYS.isArray =  function (unknow){
        return Object.prototype.toString.call(unknow) === '[object Array]';
    }
    module.exports = LYS;
})



