$(function(){


  // $('#fontColor').on('change paste keyup', () => {
  //   color = $(this).val();
  // });
  $('#btnChange').click(() => {
    const color = $('#fontColor').val();
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {todo: 'changeColor', clickedColor: color});
    });
  });
});
