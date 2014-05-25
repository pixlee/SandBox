This is a fork of backbone-pagination V0.9. See https://github.com/ptnplanet/backbone-pagination for original documentation.

Changes
-------

Introduce jQuery deferred object and return promises for async call to ```collection.fetch```.

Purpose
-------

Rendering immediately after a call to ```loadPage```, ```nextPage```, or ```previousPage``` will fail as the collection will still be empty. Instead, these should return a promise so that the calling code can act when the promise is resolved.

