const hamburger_icon = document.querySelector('#meni .meni .meni-lista .hamburger');
const meni_lista = document.querySelector('#meni .meni .meni-lista');

hamburger_icon.addEventListener('click', () => {
	meni_lista.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});