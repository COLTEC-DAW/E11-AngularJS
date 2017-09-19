# AngularJS: Data Binding

João Eduardo Montandon

Desenvolvimento de Aplicativos Web

## Exercícios

1. **ex1.html:** Implemente uma página que converta a temperatura, dada em Celsius, para Kelvin e Fahrenheit.
```html
   <p>Temperatura (celsius): <input type="number" ng-model="celsius">
   <br>Temperatura (kelvin): {{(1.8 * celsius) + 32 | number: 1}}
   <br>Temperatura (fahrenheit): {{celsius + 273}}</p>
```
2. **ex2.html:** Implemente um conversor de moedas. O valor deverá ser dado em dólar, e deverá converter para real e euro. Considere a seguinte cotação:
    * 1 USD = 4.10 BRL
    * 1 USD = 0.9 EUR
```html
  <p>Trumps: $<input type="number" ng-model="trumps">
  <br>Temers: R${{4.1 * trumps | number: 1}}
  <br>Merkels: €{{0.9 * trumps | number: 1}}</p>
```
3. **ex3.html:** Implemente um formulário que faça o preenchimento de um *review* de um produto. Esse formulário deverá conter campos para o nº de estrelas (0 a 5) e para o comentário do *review*. Ao preencher os campos, um preview do comentário deve aparecer após o formulário.
```html
```
4. **ex4.html:** Implemente um exemplo de utilização do One-time data-binding.
```html
```
