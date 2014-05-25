Pixlee.module('PhotowallApp', function(PhotowallApp, App, Backbone, Marionette, $, _) {
    var API, _this = this;
    PhotowallApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'photowall': 'showPhotowall'
        }
    });
    API = {
        showPhotowall: function(options) {
            return new PhotowallApp.Show.Controller({
                region: App.main_region
            });
        }
    };

    PhotowallApp.on('start', function() {
        new PhotowallApp.Router({
            controller: API
        });
    });
});