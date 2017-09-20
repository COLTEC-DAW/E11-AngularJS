var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusToFahrenheit = (celsius) => {
    answer = parseInt(celsius) * (9/5) + 32
    if (isNaN(answer)) {
      return 0
    } else {
      return answer
    }
  }

});

app.controller('RouboController', function() {

  this.salario = 1000

  this.calculateTheft = (salario) => {
    if (isNaN(salario)) {
      return 0
    } else if (salario < 2000) {
      return salario/10
    } else if (salario < 3500) {
      return salario/10 * 2
    } else {
      return salario/10 * 3 
    }
  }

})

app.controller('ReviewController', function() {

  this.reviews = []
  this.review = {
    stars: 0,
    comment: ""
  }

  this.addReview = (stars, comment) => {
    let actualReview = {
      stars,
      comment
    }
    this.reviews.push(actualReview)
    this.review.stars = 0
    this.review.comment = ""
  }

})

app.controller('ContactController', function() {
  this.contacts = []
  this.contact = {
    name: "",
    phone: "",
    email: ""
  }
  this.btnMessage = "Add Contact"
  this.editIndex = 0

  this.handleBtnClick = (name, phone, email) => {
    if (this.btnMessage == "Add Contact") {
      let actualContact = {
        name,
        phone,
        email
      }

      this.contacts.push(actualContact)
      this.contact.name = ""
      this.contact.phone = ""
      this.contact.email = ""
    } else {
      let actualContact = {
        name,
        phone,
        email
      }

      this.contacts[this.editIndex] = actualContact
      this.contact.name = ""
      this.contact.phone = ""
      this.contact.email = ""
      this.btnMessage = "Add Contact"
    }
  }

  this.removeContact = (index) => {
    this.contacts.splice(index, 1)
  }

  this.editContact = (index) => {
    this.btnMessage = "Update Contact"
    this.contact.name = this.contacts[index].name
    this.contact.phone = this.contacts[index].phone
    this.contact.email = this.contacts[index].email
    this.editIndex = index
  }
})