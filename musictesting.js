var frameText;

function start() {
    // Create the Audio using an audio file URL
    var song = new Audio("https://codehs.com/uploads/8179d3793582c02c44438d0160d6f0a5");
    
    // Play the file
    song.play();
    
    // Initialize the text on the screen
    frameText = new Text("", "12pt Arial");
    frameText.setPosition(10, getHeight() / 2);
    add(frameText);
    
    // Call the function `showFrame` any time the `song` changes frames
    audioChangeMethod(song, showFrame)
}

// Update the text on the screen to show the numbers in the current frame
function showFrame(frame) {
    var frameString = frame.toString();
    frameText.setText(frameString);
}

start();