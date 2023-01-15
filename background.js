browser.browserAction.onClicked.addListener(function() {
    browser.browserAction.setPopup({
        popup: "popup.html"
    });
});
