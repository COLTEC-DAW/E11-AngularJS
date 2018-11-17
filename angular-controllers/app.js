var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {
	this.celsius = 32.0;

	this.celsiusToKelvin = function() {
		answer = parseInt(this.celsius) + 273;
		
		if (isNaN(answer)) {
			return 0;
		} else {
			return  answer;
		}
	};

	this.celsiusToFahrenheit = function() {
		answer = parseInt(1.8 * this.celsius) + 32;
		
		if (isNaN(answer)) {
			return 0;
		} else {
			return  answer;
		}
	};
});

app.controller('ImpostoController', function() {
	this.salario = 0.99;

	this.roubar = function() {
		if(this.salario < 2000) {
			return this.salario * 0.1;
		} else if(this.salario < 3500) {
			return this.salario * 0.2;
		} else {
			return this.salario * 0.3;	
		}
	}
});

app.controller('ReviewController', function(){
	this.comentario;
	this.estrelas = 1;
	this.reviews = [];

	this.criarReview = function() {
		var review = {
			comment: this.comentario,
			stars: this.estrelas
		};

		this.reviews.push(review);
	}
});

app.controller('ContactController', function(){
	this.nome;
	this.telefone;
	this.email;
	this.editIndex;
	this.editMode = false;
	this.contatos = [];

	this.criarContato = function() {
		var contato = {
			nome: this.nome,
			telefone: this.telefone,
			email: this.email
		};

		this.contatos.push(contato);
		this.nome = this.telefone = this.email = "";
	}

	this.editarContato = function(index) {
		this.nome = this.contatos[index].nome;
		this.telefone = this.contatos[index].telefone;
		this.email = this.contatos[index].email;
		this.editIndex = index;
		this.editMode = true;
	}

	this.editarMesmoContato = function() {
		this.contatos[this.editIndex].nome = this.nome;
		this.contatos[this.editIndex].telefone = this.telefone;
		this.contatos[this.editIndex].email = this.email;

		this.editMode = false;
		this.nome = this.telefone = this.email = "";
	}

	this.excluirContato = function(index) {
		this.contatos.splice(index, 1);
	}
});