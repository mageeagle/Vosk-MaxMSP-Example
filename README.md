# Vosk-MaxMSP-Example
An example using Vosk for realtime speech recognition and sends results to MaxMSP

This example runs Vosk for speech recognition in Python, called from python-shell in a node.js file, run from Node4Max. The results from the realtime speech recognition is sent to MaxMSP directly.

As of May 2025, for some reason Vosk for Node.js does not work. Hence python is used instead.


## Instructions (Refer to Max Patch example.maxpat):
Prerequisite: 

Download all the files from this repo (or clone repository)

Install Python 3

1) open the terminal and install python dependencies:
```
pip install sounddevice
pip install vosk
```
2) change the pythonPath to where your python is at cont-voice-recog.js
3) press `script npm i`
4) press script start
