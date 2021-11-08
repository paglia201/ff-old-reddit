# ff-old-reddit
Firefox Android extension to redirect default/new reddit to old reddit. 

## Notes
* Under manifest.json file, in the ```content_scripts/matches``` property, ideally we'd have a blacklist for the ol.reddit.com and old.reddit.com hostnames. All other subdomains (new, www, etc.)  The MDN documentation doesn't seem to note this functionality, see [1].

* Would override certain Reddit subdomains specifically put into place to prevent brigading, e.g. np.reddit.com.

[1] https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns