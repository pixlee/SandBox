Pixlee.module('PhotowallApp.Show', function(Show, App, Backbone, Marionette, $, _) {
    Show.Controller = Marionette.Controller.extend({
        initialize: function(options) {
            var _this = this;
            var region = options.region;
            //Get the photos Entities
            var photos = App.photos;
            //Instantiate the view and pass parameter to it
            this.view = this.getPhotowallView({
                collection:photos
            });
            //Show the view on the region passsed as an options
            region.show(this.view);
            //Example of event handling
            this.listenTo(this.view,"show",function(){

            },this);
        },
        getPhotowallView: function(options) {
            return new Show.PhotowallLayout(options);
        }
    });
});