function doAnalysis() {
    chrome.runtime.sendMessage({ action: "getText" }, function (response) {
        const outputBox = document.querySelector('.output');
        if (response && response.selectedText) {
            const searchText = response.selectedText;
            console.log(`Selected text: ${searchText}`);
            if (!searchText) {
                outputBox.innerText = 'No text selected';
                return;
            }

            fetch(`http://localhost:3000?text=${searchText}`)
                .then(data => data.json())
                .then(data => {
                    const dataObj = JSON.parse(data);
                    const output = dataObj.result;
                    outputBox.innerHTML = output;
                })
                .catch(err => outputBox.innerHTML = "error connecting to api.")

        } else {
            console.log("No text selected");
            outputBox.innerHTML = "No text selected."
        }
    })
}

doAnalysis();