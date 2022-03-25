var x = 100;
function escopo(){
  if(false)
  var x = 200;
  console.log(x);
}

escopo();