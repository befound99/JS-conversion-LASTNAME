function toUsd(x){
  parseFloat(x);
  return x * 0.018;
}
function toEur(x){
  parseFloat(x);
  return x * 0.017;
}
function toGbp(x){
  parseFloat(x);
  return x * 0.015;
}
function toJpy(x){
  parseFloat(x);
  return x * 2.44;
}


function convertoUsd(){
  
  let phpValue = document.getElementById("php").value ;
  let converted = toUsd(phpValue)
  converted.toFixed(2)
  document.getElementById("result").innerHTML = "$ " + converted;
}
function convertoEur(){
  
  let phpValue = document.getElementById("php").value ;
  let converted = toEur(phpValue)
  converted.toFixed(2)
  document.getElementById("result").innerHTML = "€ " + converted;
}
function convertoGbp(){
  
  let phpValue = document.getElementById("php").value ;
  let converted = toGbp(phpValue)
  converted.toFixed(2)
  document.getElementById("result").innerHTML = "£ " + converted;
}
function convertoJpy(){
  
  let phpValue = document.getElementById("php").value ;
  let converted = toJpy(phpValue)
  converted.toFixed(2)
  document.getElementById("result").innerHTML = "¥ " + converted;
}
