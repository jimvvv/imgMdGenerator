// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "image";
  var title = "Generate Markdown Image Link";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    // The srcUrl property is only available for image elements.
    var url = '![image](' + info.srcUrl + ')';

    // Add the url to clipboard.
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = url;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
};