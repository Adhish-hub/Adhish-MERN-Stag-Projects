function getRGB(color) {
    let temp = document.createElement("div");
    temp.style.color = color;
    document.body.appendChild(temp);

    let rgb = getComputedStyle(temp).color;
    document.body.removeChild(temp);

    let values = rgb.match(/\d+/g);
    return {
        r: parseInt(values[0]),
        g: parseInt(values[1]),
        b: parseInt(values[2])
    };
}
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        let hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}
function generate() {
    let color = document.getElementById("colorInput").value;
    let palette = document.getElementById("palette");
    palette.innerHTML = "";

    let { r, g, b } = getRGB(color);

    for (let i = 0; i < 10; i++) {
        let factor = i / 9;

        let newR = Math.round(r * (1 - factor));
        let newG = Math.round(g * (1 - factor));
        let newB = Math.round(b * (1 - factor));

        let hex = rgbToHex(newR, newG, newB);

        let box = document.createElement("div");
        box.className = "box";
        box.style.background = hex;

        let codeDiv = document.createElement("div");
        codeDiv.className = "code";
        codeDiv.innerText = hex;

        let btn = document.createElement("button");
        btn.className = "copybtn";
        btn.innerText = "Copy";
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            copyColor(hex);
        });

        box.appendChild(codeDiv);
        box.appendChild(btn);

        palette.appendChild(box);
    }
}
function copyColor(code) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code)
            .then(() => showRed(code))
            .catch(() => fallbackCopy(code));
    } else {
        fallbackCopy(code);
    }
}
function fallbackCopy(text) {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");toast
        showRed(text);
    } catch {
        alert("Copy failed");
    }

    document.body.removeChild(textarea);
}
function showRed(code) {
    let red = document.getElementById("red");
    red.innerText = "Copied: " + code;
    red.classList.add("show");

    setTimeout(() => {
        red.classList.remove("show");
    }, 1200);
}