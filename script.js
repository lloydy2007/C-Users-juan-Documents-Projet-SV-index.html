function messageAmour() {
    alert("Je t'aime plus que tout au monde❤️❤️❤️")
}

setInterval(() => {
let heart = document.createElement("div");
heart.className ="heart";
heart.innerHTML = "❤️"
heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = Math.random() * 20 + 10 + "px";
document.body.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 5000);
}, 300);