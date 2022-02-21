if (!("PerformanceObserver" in window)) {
  document.body.innerText = "Not supported by your browser";
}

/* Initialize performance observer */
const observer = new PerformanceObserver(logger);

const config = {
  entryTypes: ["mark", "measure"],
};

observer.observe(config);

/* Callback function */
function logger(list) {
  const entries = list.getEntries();
  console.log("Entries: ", entries);
  entries.forEach((entry) => {
    console.log(
      "Name: " +
        entry.name +
        ", Type: " +
        entry.entryType +
        ", Start: " +
        entry.startTime +
        ", Duration: " +
        entry.duration +
        "\n"
    );
  });
}

/* Add click listener on button */
document.querySelector("button").addEventListener("click", () => {
  console.log("Start measuring");
  getDataFromServer();
});

function getDataFromServer() {
  window.performance.mark("start");
  setTimeout(() => {
    window.performance.mark("end");
    window.performance.measure("start to end", "start", "end");
    const measure = performance.getEntriesByName("start to end")[0];
    window.performance.clearMeasures(["start to end"]);
    window.performance.clearMarks(["start", "end"]);
    console.log("Duration: ", measure.duration);
  }, 3000);
}
