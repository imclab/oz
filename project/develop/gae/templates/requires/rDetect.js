var paths = {
    "core" : "vendor/vendor.core.min"
};


var libs = [];
for(var n in paths) libs.push(n);

requirejs.config({

    baseUrl: '/js',

    paths: paths,

    shim: {

        'backbone': {
            deps: ['underscore', 'jquery']
        }

    }
});

require(libs, function()
{
    require(['appDetect.min']);
});