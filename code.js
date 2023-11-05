let dollar = document.getElementById('dollar')
let pound = document.getElementById('pound')

let dollarPrice =prompt('dollar price?')

 dollar.onkeyup =function(){
    pound.value = dollar.value * dollarPrice;
 }
 pound.onkeyup =function(){
    dollar.value = pound.value / dollarPrice;
 }
