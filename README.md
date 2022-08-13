# Funds-webapp
It's been a couple years since I made the accounting software I wanted for my personal usage (www.github.com/francis-chris5/Funds) and for version 2 I'm switching from desktop with JavaFX to a web application with Java Servlets.


Like the rest of the world I've been migrating to the cloud (currently on GCP, but there's not much difference, it's a standard Linux setup on at least the big three) the link will be here instead of a release package when finished... Still a ways to go though.


<h2>Current State of Progress</h2>

The Java code was fully compartmentalized into objects, so all that needs done on that end is to replace the JavaFX Controller with the Java Servlets that communicate to an HTML5 page through AJAX requests.

The No-SQL database I devised entirely of Linked Lists has been turning out acceptable metrics for both the memory and the storage side so no need to change it.

The graphical user interfaces (GUI) will probably take the most time, but version 1 used FXML styled with CSS, so the change over was fairly easy (at least on day one).

Here's a picture of the main GUI:

---insert pic---


<br>
<br>
<br>
more coming soon...


