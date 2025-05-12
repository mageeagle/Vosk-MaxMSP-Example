const maxApi = require("max-api");
let { PythonShell } = require("python-shell");

// refer to documentation of PythonShell for more options, or using arguments
let options = {
  mode: "json",
  pythonPath: "C:/Users/AQ/AppData/Local/Microsoft/WindowsApps/python.exe", // Path to your python
  pythonOptions: ["-u", "-X", "utf8"], // get print results in real-time / start python with utf8 support for certain languages
};

let pyshell = new PythonShell("cont-voice-recog.py", options);
pyshell.on("message", function (message) {
  console.log(message);
  if (typeof message === "object") {
    console.log("Received dictionary:", message);
    // Possibility of updating dict directly in Max
    // Comment out the 3 Lines below if you do not need this or the script will crash if it tries to update a dict that does not exist
    Object.entries(message).forEach(([key, string]) => {
      maxApi.updateDict("test", key, string); 
    });

    maxApi.outlet(message);
  } else {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
    maxApi.outlet(message);
  }
});

pyshell.on("stderr", function (stderr) {
  console.log(stderr);
  // handle stderr (a line of text from stderr)
});
