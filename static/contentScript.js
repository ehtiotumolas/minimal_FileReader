var fileChooser = document.createElement('input'); 
fileChooser.type = 'file'; 
fileChooser.addEventListener('change', function () {     
    const file = event.target.files[0];     
    var fr = new FileReader();     
    fr.onload = function (file) {       
        console.log(file.target.result)     
    };     
    fr.readAsText(file); 
}); 

//Listens for messages from other scripts
browser.runtime.onMessage.addListener((obj, sender) => {
    console.log("Listening")
    if (obj.type === "upload") {         
        console.log("Listening upload")         
        fileChooser.click();     
    } 
});