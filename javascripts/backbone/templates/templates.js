//THis is an example of JST FILE included

// Default templating for Pixlee
_.templateSettings = {
    interpolate: /\[\%\=(.+?)\%\]/gim,
    evaluate: /\[\%(.+?)\%\]/gim,
    escape: /\[\%\-(.+?)\%\]/gim
};

window.JST = {};

window.JST['photowall_layout'] = _.template(
    '<div id="photos_regions"></div><div id="pagination_region"></div>'
);