// Captura o formulário pelo ID
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

  // Captura os valores digitados nos campos
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Validação simples (usuário fixo: admin, senha: 1234)
  if (username === "admin" && password === "1234") {
    message.style.color = "green"; // Muda cor da mensagem para verde
    message.textContent = "Login realizado com sucesso!"; // Mensagem de sucesso
  } else {
    message.style.color = "red"; // Mantém cor vermelha
    message.textContent = "Usuário ou senha incorretos."; // Mensagem de erro
  }
});