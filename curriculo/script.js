// 1. Saudação com botão
document.getElementById("btnSaudacao").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  if (nome.trim() === "") {
    alert("Por favor, digite seu nome!");
  } else {
    document.getElementById("mensagem").innerText = "Olá, " + nome + "! Obrigado por visitar meu currículo.";
  }
});

// 2. Canvas (desenhar círculo simples)
const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#6200ea";
ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("JS", 85, 110);
