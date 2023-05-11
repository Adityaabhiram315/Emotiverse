var selectedText = "";

document.addEventListener("mouseup", function () {
    selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ selectedText: selectedText });
});