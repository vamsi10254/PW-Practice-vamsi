function generateSummary(results) {

    let totalSteps = results.length;
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalDuration = 0;
    let failedSteps = [];

    for (let i = 0; i < results.length; i++) {

        totalDuration += results[i].durationMs;

        if (results[i].status === "passed") {
            passed++;
        }
        else if (results[i].status === "failed") {
            failed++;
            failedSteps.push(results[i].name);
        }
        else if (results[i].status === "skipped") {
            skipped++;
        }
    }

    console.log(
        `Total Steps: ${totalSteps} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Total Duration: ${totalDuration}ms Failed Steps: ${failedSteps.join(", ")}`
    );
}



let results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }
];

generateSummary(results);