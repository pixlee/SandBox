Pixlee.module('PhotowallApp.Show', function(Show, App, Backbone, Marionette, $, _) {
	//This is the layout 
    Show.PhotowallLayout = Marionette.Layout.extend({
        template: 'photowall_layout',
        regions:{
            photos_region:"#photos_region",
            pagination_region:"#pagination_region"
        }
    });
});
