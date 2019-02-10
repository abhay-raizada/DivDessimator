$('#button').on('click',function()
{
    console.log("asfsgsfddfhgsdhsdhg")
    alert("Inside here");
   chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "dessimate.js"});
   });
});