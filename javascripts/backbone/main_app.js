var Pixlee = (function(Backbone, Marionette) {
    var App,
        _this = this;

    App = new Marionette.Application();

    App.on('initialize:before', function(options) {
        //You can handle the options passed to the function start
        App.photos = App.request("get:photos", options.photos);
        App.rootRoute = "photowall";
    });


    App.addRegions({
        header_region: '#header_region',
        main_region: '#main_region',
        footer_region: '#footer_region'
    });



    App.reqres.setHandler('default:region', function() {
        return App.main_region;
    });



    App.on('initialize:after', function() {
        this.startHistory();
        if (!this.getCurrentRoute()) {
            return this.navigate(this.rootRoute, {
                trigger: true
            });
        }
    });

    return App;
})(Backbone, Marionette);