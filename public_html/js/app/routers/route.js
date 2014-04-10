define(
        ['jquery', 'underscore', 'backbone', 'app/views/view'], 
        function($, _, Backbone, view){
            var Router = Backbone.Router.extend({
                initialize: function(){
                    this.view = view;
                    Backbone.history.start();
                },
                routes: {
                    '': 'home'
                },
                'home': function(){
                    this.view.render();
                }
            });

            return Router;
        }
);