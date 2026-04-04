function browserExecutionPlanner(supportedBrowsers, blockedBrowsers) {

    let runnable = [];
    let blocked = [];

    for (let i = 0; i < supportedBrowsers.length; i++) {

        if (blockedBrowsers.includes(supportedBrowsers[i])) {
            blocked.push(supportedBrowsers[i]);
        }
        else {
            runnable.push(supportedBrowsers[i]);
        }
    }

    let executionPlan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

    return {
        runnableBrowsers: runnable,
        blockedBrowsers: blocked,
        plan: executionPlan
    };
}



let supportedBrowsers = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];

let result = browserExecutionPlanner(supportedBrowsers, blockedBrowsers);

console.log(result);