# PageFontStyle Chrome Extension

### Overview
A Chrome Extension (CE) that allows users to change the color of the text on a page.

### Details
1. Users can a color picker provided in the CE popup to select a color to which the current webpage's text should be changed
2. To demonstrate **page action** functionality, this CE is only active on the https://en.wikipedia.org/ domain

### Lessons Learned
1. How to inject **content scripts** & **content css** to manipulate DOM
2. How to communicate between **content scripts** (DOM) and **background/event pages** (CE)
3. How and when to use **page actions** vs **browser actions**
4. How to user a js-based color picker

### Installation
1. Clone/download repository
2. Navigate to the Chrome Extensions page: chrome://extensions/
3. Check the 'Developer Mode' checkbox at the top of the screen
4. Select the "Load unpacked extension..." button
5. Select the folder containing the downloaded repository
6. Enjoy!
