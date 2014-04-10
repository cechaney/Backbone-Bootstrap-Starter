    // This set's up the module paths for underscore and backbone
require.config({ 
    baseUrl: 'js/lib',
    paths: { 
        app: '../app'
    },
    'shim': {
        jquery: {
            'exports': '$'
        },
        underscore: {
            'exports': '_'
        },        
        backbone: {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        }
    }	
}); 

require(
        ['jquery', 'underscore','backbone','app'], 
	function($, _, Backbone, app){
            app.init();
});