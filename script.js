function myFunction(){    
    location.replace("https://www.w3schools.com")
  }


 
window.onload = function() {
    document.getElementById('SuperButton').onclick = function()
    {
        if(document.body.className != 'new_class')
        {
            document.body.className = 'new_class';
        }
        else
        {
            document.body.className = '';
        }
    }
}

var term = {
  Canada:10,
  Poland:15,
  Germani:20,
  Belarus:25,
  Moskov:23,
}
function sumTerm(){
  var sum = 0;
  for (var temperature of Object.values(term)){
      sum += temperature;
  }
  return resultterm = sum / Object.keys(term).length;
}

alert('Средняя температура  по городам :'+sumTerm(term) + ' градусов');
console.log('Средняя температура по городам :'+sumTerm(term)+ ' градусов');


function getMaxOfArray(term) {
  var term = Object.values(term);
 return max = Math.max.apply(null, term);
}  
alert('Максимальная температура  по городам :' + getMaxOfArray(term) + ' градусов');
console.log('Максимальная температура  по городам :' + getMaxOfArray(term) + ' градусов');

  /*  document.getElementById('newLocal').onclick = function(){
    document.getElementById('newLocal').style.display = "none";
    document.getElementById('myFun').style.display = "none";
    document.getElementById('SuperButton').style.display = "none";
    
}*/
