![image](https://user-images.githubusercontent.com/50467171/184467930-2014ae7c-337e-48ee-bb68-f83ec3af4a2f.png)

<h1>Funds Web App</h1>


It's been a couple years since I made the accounting software I wanted for my personal usage (www.github.com/francis-chris5/Funds) and for version 2 I'm switching from desktop with JavaFX to a web application with Java Servlets.


Like the rest of the world I've been migrating to the cloud (currently on GCP, but there's not much difference, it's a standard Linux setup on at least the big three) the link will be here instead of a release package when finished... Still a ways to go though.


<h2>Current State of Progress</h2>

The Java code was fully compartmentalized into objects, so all that needs done on that end is to replace the JavaFX Controller with the Java Servlets that communicate to an HTML5 page through AJAX requests.

The No-SQL database I devised entirely of Linked Lists has been turning out acceptable metrics for both the memory and the storage side so no need to change it.

The graphical user interfaces (GUI) will probably take the most time, but version 1 used FXML styled with CSS, so the change over was fairly easy (at least on day one).

Here's a picture of the main GUI:



![main-gui-pic1](https://user-images.githubusercontent.com/50467171/184467878-fd254886-7f80-4aaa-828a-e3d814cc1c82.png)

<br>

![main-gui-pic2](https://user-images.githubusercontent.com/50467171/184468029-87d2d600-c530-4485-bdbe-310a9b0e3a8a.png)

<br>

![cash-flows-pic1](https://user-images.githubusercontent.com/50467171/184511395-c1d1df6c-79d1-4f2c-8b8d-6b4ff2479e64.png)

<br>

![general-ledger-pic1](https://user-images.githubusercontent.com/50467171/184511397-c5cefa45-119f-4691-9c0e-406d04503fce.png)

<br>

![account-ledger-pic1](https://user-images.githubusercontent.com/50467171/184511399-de47886c-b13d-44b4-a48c-61bb8d4bc801.png)


<br>
<br>
<br>
more coming soon...


