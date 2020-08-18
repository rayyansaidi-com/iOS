const isDev = true;
const notDev = !isDev;

if (notDev) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("INFO:", res))
        .catch(err => console.error("ERROR:", err))
    })
  }
}