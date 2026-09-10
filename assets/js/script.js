// Scripts JavaScript para o projeto TCC

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Validação de formulário
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    
    let isValid = true;
    
    // Validar nome
    if (!nome.value || nome.value.length < 3) {
      mostrarErro(nome, 'Nome deve ter pelo menos 3 caracteres');
      isValid = false;
    } else {
      limparErro(nome);
    }
    
    // Validar email
    if (!validarEmail(email.value)) {
      mostrarErro(email, 'Email inválido');
      isValid = false;
    } else {
      limparErro(email);
    }
    
    // Validar mensagem
    if (!mensagem.value || mensagem.value.length < 10) {
      mostrarErro(mensagem, 'Mensagem deve ter pelo menos 10 caracteres');
      isValid = false;
    } else {
      limparErro(mensagem);
    }
    
    if (isValid) {
      alert('Formulário enviado com sucesso!');
      this.reset();
    }
  });
}

// Função para validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para mostrar erro
function mostrarErro(elemento, mensagem) {
  elemento.classList.add('is-invalid');
  let feedback = elemento.parentElement.querySelector('.invalid-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'invalid-feedback';
    elemento.parentElement.appendChild(feedback);
  }
  feedback.textContent = mensagem;
}

// Função para limpar erro
function limparErro(elemento) {
  elemento.classList.remove('is-invalid');
  elemento.classList.add('is-valid');
}

// Animação de fade-in ao carregar página
window.addEventListener('load', function() {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
  });
});

// Dark mode toggle (opcional)
function iniciarDarkModeToggle() {
  const darkModeBtn = document.getElementById('dark-mode-btn');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
    
    // Verificar preferência salva
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
}

// Inicializar quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
  iniciarDarkModeToggle();
  console.log('Scripts do TCC carregados com sucesso!');
});
