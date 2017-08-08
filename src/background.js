'use strict';

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({ file: 'src/content.js' });
});
