function redirect(requestDetails) {
    let url = requestDetails.url;
    let urlPath = new URL(url).pathname;
    let targetUrl = "https://old.reddit.com" + urlPath;
    console.log(`Redirecting ${url} to ${targetUrl}.`);
    return {
        redirectUrl: targetUrl
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: ["*://www.reddit.com/*", "*://new.reddit.com/*"]},
    ["blocking"]
);