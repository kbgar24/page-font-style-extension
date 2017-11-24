$(function(){

  $('#btnChange').click(() => {
    const color = $('#fontColor').val();
    //Locates active tab and dispatches the 'changeColor' action
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {todo: 'changeColor', clickedColor: color});
    });
  });
});
