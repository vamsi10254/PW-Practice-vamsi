let isLoggedIn = true;
let userRole = "editor";

// Claude ai -> viewer, editor or admin -> 
// viewer = limited to view only.
// editor can edit and view
// admin can do all the things

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea which role you are !");
    }
} else {
    console.log("You are not logged in!!")
}