/**
 * Created by wudi on 15/12/10.
 */

'use strict';

define([], function (argument) {
    var urlObj = {
        dev: {
            api: 'http://jkm.dev.111.com.cn:8081/api/'
        },
        test: {
            api: 'http://jkm.test.111.com.cn:9081/api/'
        },
        release: {
            api: 'http://115.159.161.239/api/'
        }
    };
    var environment = 'dev';
    return urlObj[environment];
});