jira-bulk-unwatch
=================

Jira Bulk Unwatch is intended to be used to unwatch a list of issues in Jira 5. This has not been available out of the box so I had to implement something for these users that had hundreds of watched issues and wanted to unwatch them.

It works in a very simple way, especially if you have both Confluence and Jira being used:
1. Create a macro in Confluence from the confluence-macro.txt file. This macro generated a link in any page you add it to
2. Drag the link to your bookmarks tab
3. Open Jira and search for the issues you'd like to unwatch
4. Click the bookmark: This will create a link on the filter results page. When clicking this link it will unwatch all the issues in that filter

If you don't have Confluence you'd need to modify the method and create the bookmark manually. The most important thing to notice is the username that needs to be part of the bookmarklet. This is done automatically when you use Confluence (it uses the logged in user), but not handled at all when you'd not using Confluence.

The script.js could also be run independently in the browser console. Just paste the code into the console, or tweak it to create a bookmarklet and then follow steps 3-4 above.

I hope you'd find the above script useful.

Ruby
