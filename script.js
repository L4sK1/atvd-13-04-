window.onload = function() {
	pegaImagem();
}

function pegaImagem(){
	let nome = "akita";
    fetch('https://dog.ceo/api/breed/'+ nome +'/images/random')
    .then(response => response.json())
    .then(dados => imprime(dados));
}
function imprime(dados){
	console.log(dados);

	var url = dados.message;
	console.log("<img src='"+ url + "' alt='Akita'>");

	var img = document.getElementById("imagem");
	img.innerHTML="<img src='"+ url + "' alt='Akita'>";
}