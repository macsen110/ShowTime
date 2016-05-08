/**
 * Created by wudi on 15/12/10.
 */

'use strict';

define([], function (argument) {
    var urlObj = {
        dev: {
            api: 'http://10.6.81.38:8080/'
        },
        test1: {
            api: 'http://10.6.81.45/'
        },
        release: {
            api: ''
        },
        local: {
            api: '/api/yfy'
        }
    };
    var environment = 'local';
    return urlObj[environment];
});