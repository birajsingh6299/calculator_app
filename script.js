document.getElementById("one").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("two").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("three").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("four").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("five").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("six").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("seven").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("eight").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("nine").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("oneZero").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("cancel").addEventListener("click", function () {
    const displayDiv = document.getElementById("screen-div");
    displayDiv.textContent = "";
    
})

document.getElementById("plus").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("minus").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("multiply").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("divide").addEventListener("click", function () {
    controlDisplay(this.textContent);
})

document.getElementById("equals").addEventListener("click", function () {
        const displayDiv = document.getElementById("screen-div");
        displayDiv.textContent = displayDiv.textContent.replace("×", "*");
        displayDiv.textContent = displayDiv.textContent.replace("÷", "/");
        
        const result = eval(displayDiv.textContent);
        displayDiv.textContent = ""
        const numDiv = document.createElement('div');

        numDiv.style.color = "white";
        numDiv.style.fontSize = "5em";
        numDiv.textContent = result;

        displayDiv.appendChild(numDiv);
    }
)

function controlDisplay(content) {
    const displayDiv = document.getElementById("screen-div");
    
    if (displayDiv.children.length <  13) {  
        const numDiv = document.createElement('div');

        numDiv.style.color = "white";
        numDiv.style.fontSize = "5em";
        numDiv.textContent = content;

        displayDiv.appendChild(numDiv);
    }
}

