'use strict';

const frame = document.createElement('iframe');
frame.style.position = 'absolute';
frame.style.height = '100%';
frame.style.top = '0';
frame.style.left = '0';
frame.src = chrome.extension.getURL('src/frame.html');
document.body.appendChild(frame);
