// Only show this CE's pageAction when this content script is run
chrome.runtime.sendMessage({todo: "showPageAction"});

// Content script Listens for 'changeColor' action to be dispatches
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.todo = "changeColor"){
    const color = `#${request.clickedColor}`
    $('p').css('color', color);
    console.log(`Color changed to ${request.clickedColor}.`);
  }
});
