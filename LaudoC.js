// Seleciona todos os itens do menu lateral
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		});
		li.classList.add('active'); 
	});
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
});

// Funcionalidade de busca
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
});

// Ajustes iniciais de visualização
if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}

// Listener para redimensionamento da janela
window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
});

// Modo escuro
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});

// Função para enviar o formulário
const uploadForm = document.getElementById('upload-form'); // Certifique-se de que o ID do seu formulário está correto

uploadForm.addEventListener('submit', function (e) {
	e.preventDefault(); // Impede o envio padrão do formulário

	const formData = new FormData(uploadForm); // Cria um objeto FormData com os dados do formulário

	fetch('/laudos/upload', {
		method: 'POST',
		body: formData,
	})
	.then(response => {
		if (response.ok) {
			alert('Arquivo enviado com sucesso!');
		} else {
			alert('Erro ao enviar o arquivo.');
		}
	})
	.catch(error => {
		console.error('Erro:', error);
	});
});

// Listener para o formulário de informações
const infoForm = document.getElementById('info-form'); // Certifique-se de que o ID do seu formulário de informações está correto

infoForm.addEventListener('submit', function (e) {
	e.preventDefault(); // Impede o envio padrão do formulário

	const formData = new FormData(infoForm); // Cria um objeto FormData com os dados do formulário

	fetch('/laudos/informacoes', {
		method: 'POST',
		body: formData,
	})
	.then(response => {
		if (response.ok) {
			alert('Informações salvas com sucesso!');
		} else {
			alert('Erro ao salvar as informações.');
		}
	})
	.catch(error => {
		console.error('Erro:', error);
	});
});
