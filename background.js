let selectedText = "";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request && request.selectedText) {
    selectedText = request.selectedText;
    console.log('background script text is:', selectedText);
  }
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getText") {
    sendResponse({ selectedText: selectedText });
  }
});