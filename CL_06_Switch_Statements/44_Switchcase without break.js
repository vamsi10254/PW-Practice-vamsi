// Switch case without break keyword
// 0 - Sunday, 1 - Monday, 2 - Tue, 3 - Wed, 4 - Thu, 5 - Fri, 6 - Sat
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}