// Função para validar se o input foi corrigido corretamente
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const textarea = document.getElementById('message');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs(); //Executa a main function de validação de erro ou sucesso
});

function checkInputs() {
	// Utilizamos o "trim" para remover os espaços em branco
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const telValue = tel.value.trim();
  const textareaValue = textarea.value.trim();

  if(usernameValue === '') {      //Faz a verificação se o input está vazio ou não
		setErrorFor(username);       //Executa a função de erro para o input
	} else {
		setSuccessFor(username);   //Executa a função de sucesso para o input
	}

  if (emailValue === '') {     //Faz a verificação se o input está vazio ou não
    setErrorFor(email);       //Executa a função de erro para o input
  } else {
    setSuccessFor(email);   //Executa a função de sucesso para o input
  }

  if (telValue === '') {     //Faz a verificação se o input está vazio ou não
    setErrorFor(tel);       //Executa a função de erro para o input
  } else {
    setSuccessFor(tel);   //Executa a função de sucesso para o input
  }

  if (textareaValue === '') {     //Faz a verificação se o input está vazio ou não
    setErrorFor(textarea);       //Executa a função de erro para o input
  } else {
    setSuccessFor(textarea);   //Executa a função de sucesso para o input
  }
}

// Colori a borda de acordo com Success ou Error
function setErrorFor(input) {
	const inputContainer = input.parentElement;
	inputContainer.className = 'input-container error'; //Insere o "error" na class pintando a borda do input de vermelho
}

function setSuccessFor(input) {
	const inputContainer = input.parentElement;
	inputContainer.className = 'input-container success'; //Insere o "success" na class pintando a borda do input de verde
}

	


