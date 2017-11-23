chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.todo = "changeColor"){
    const color = `#${request.clickedColor}`
    $('.api').css('color', color);
    console.log(`Color changed to ${request.clickedColor}.`);
  }
});
