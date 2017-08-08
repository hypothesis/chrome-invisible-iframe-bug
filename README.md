# Chrome iframe bug test case

This is a test case for the issue reported in
https://github.com/hypothesis/client/issues/516 where an iframe created by an
extension appears invisible under certain circumstances.

## Steps to reproduce

1. Clone this repository
2. Go to chrome://extensions and check "Developer mode"
3. Click "Load unpacked extension" and select the checked out folder.
4. Open a new tab at http://example.org and click the orange "h" icon in the
   toolbar. A yellow frame should appear on the left side of the page.
5. Click the "Open link" link in the frame and then click the orange toolbar
   icon again

**Expected**: The yellow frame appears in the new tab.

**Actual**: The new frame appears but the content is missing.

Tested in Chrome 62.0.3175.4


