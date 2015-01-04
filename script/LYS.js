var LYS = LYS || function(q,c){return LYS.dom?LYS.dom(q,c):null};
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
