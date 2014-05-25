Pixlee.module('Utilities', function(Utilities, App, Backbone, Marionette, $, _) {
    _.extend(App, {
        navigate: function(route, options) {
            if (options == null) {
                options = {};
            }
            _.defaults(options, {
                trigger: false
            });
            return Backbone.history.navigate(route, options);
        },
        getCurrentRoute: function() {
            var frag;
            frag = Backbone.history.fragment;
            if (_.isEmpty(frag)) {
                return null;
            } else {
                return frag;
            }
        },
        startHistory: function() {
            if (Backbone.history) {
                return Backbone.history.start();
            }
        },
        navigateToExternalUrl: function(route, options) {
            if (options == null) {
                options = {};
            }
            window.location = route;
        }
    });
});