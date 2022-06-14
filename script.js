(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {Method:'GET'})
     .then(response => response.json())
     .then(function(posty) {
        wyswietlanie(posty);
      })
    function wyswietlanie(posty){
      for (var j=0; j<posty.length;j++){
        var blok=document.createElement("div");
        blok.innerHTML='ID użytkownika:'+posty[j].userId+'</br>id:'+posty[j].id+'</br>tytul:'+posty[j].title+'</br>zawartosc:'+posty[j].Body;
        answer.appendChild(blok);
      }
      
    }
  })
    
    
    
  

  cw2.addEventListener("click", function () {
    //TODO implement it
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
