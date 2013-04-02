jira-bulk-unwatch
=================

Jira Bulk Unwatch is intended to be used to unwatch a list of issues in Jira 5. This has not been available out of the box so I had to implement something for these users that had hundreds of watched issues and wanted to unwatch them.

It works in a very simple way, especially if you have both Confluence and Jira being used:
<br/>
1. Create a macro in Confluence from the confluence-macro.txt file. Don't forget to change the text "PUT_HERE_YOUR_JIRA_DNS" to your JIRA DNS or IP. Create it as an "unrendered" Macro.
<br/>
2. Create a page and add this macro to it. This macro generated a link in any page you add it to.
<br/>
3. Drag the link to your bookmarks tab.
<br/>
4. Open Jira and search for the issues you'd like to unwatch.
<br/>
5. Click the bookmark: This will create a link on the filter results page. When clicking this link it will unwatch all the issues in that filter.

If you don't have Confluence you'd need to modify the method and create the bookmark manually. The most important thing to notice is the username that needs to be part of the bookmarklet. This is done automatically when you use Confluence (it uses the logged in user), but not handled at all when you'd not using Confluence.

The script.js could also be run independently in the browser console. Just paste the code into the console, or tweak it to create a bookmarklet and then follow steps 4-5 above.

The same script can also be used for bulk watching issues. To do that, just change the "DELETE" method in the script to "PUT".

I hope you'd find the scripts useful,

Ruby
