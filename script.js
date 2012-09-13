var username = "UPDATE_ME_TO_USERNAME"; // UPDATE THE USERNAME
function unwatchAllIssues() {
	var issueKeys = [];
	var elements = jQuery(".issuekey a");
	for (var i=0; i<elements.length; i++) {
		a = elements[i];
		issueKeys.push(a.text);
	}
	console.log("Going to unwatch " + issueKeys.length + " issues...");
	for (var i=0; i<issueKeys.length; i++) {
		var issueKey = issueKeys[i];
		var url = "https://PUT_HERE_YOUR_JIRA_DNS/rest/api/2/issue/" + issueKey + "/watchers?username="+username;
		console.log("Going to unwatch " + issueKey);
		jQuery.ajax({
			url: url,
			type: "DELETE",
			//type: "GET", // uncomment this line for debugging
			success: function(result) {
				console.log("Done.");
			}
		});
	}
}
jQuery(".count-pagination").append(jQuery("<a>Add Unwatch Issues Link to Page</a>").attr("id","unwatchButton").attr("href","").attr("onclick","event.preventDefault();unwatchAllIssues()").attr("style","margin-left:10px;padding:3px;font-size:14px;font-weight:bold;color:red"));
