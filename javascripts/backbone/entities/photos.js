Pixlee.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    var _this = this,
        API, _API;
    API = {
        getPhotosCollection: function(bootstrap, options) {
            return new Entities.Photos(bootstrap || [], options || {});
        }
    };
    //You can add your custom work on the collection in Here,
    //e.g preloading the next 20 images
    // Paginate the list
    Entities.Photo = Backbone.Collection.extend({

    });
    Entities.Photos = Backbone.Collection.extend({
        model: Entities.Photo
    });
    App.reqres.setHandlers({
        'get:photos': function(bootstrap, options) {
            return API.getPhotosCollection({
                bootstrap: bootstrap,
                options: options
            });
        }
    });
});