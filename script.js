document.getElementById("one").addEventListener("click", function () {
    console.log("Inside click event");
    controlDisplay(this.textContent);
})

function controlDisplay(content) {
    const displayDiv = document.getElementById("screen-div");
    displayDiv.appendChild(content);
    console.log(displayDiv.textContent);
}

