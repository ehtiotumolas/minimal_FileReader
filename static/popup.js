
document.getElementById('upload_file').onclick = function () {
    console.log('click')
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: "upload" }, function (response) {
        });
    });
}


