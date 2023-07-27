/* EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.*/
  
/*inserisco un window.onload per eseguire il codice ,e comunico al broweser di rimuovere il link 
al caricamento della pagina*/       
window.onload=function() {
    
    const Twitter = Queryselector("aside div:nth of tipe(3) li:nth of tipe(2)").Twitter.remuve()
    
}
console.log("window.onload")



/*EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".*/

/*qui ho creato una costante chiamata parentelement e chiesto alla console di selezionare tutti gli elementi 
padre del Dom e al clik dell utente questo elemento viene rimosso*/ 

const parentElement = document.querySelectorAll(".jumbotron a, .card-text + a")

console.log(parentElement)


for (const parentsElements of parentElement) {
    parentsElements.addEventListener("click", function (event) {
        parentsElements.parentElement(remove)
        
    })
}


/*EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.*/

/*qui ho creato una costante chiamata alertautori e chiesto alla console di selezionare tutti gli autori,
al click dell utente cè un alert e quindi e' come se fosse un avviso  */ 

const alertAutori = document.querySelectorAll(".blog - post .blog-post-meta a")

console.log(alertAutori)

for (const alertAutore of alertAutori){
   alertAutore.addEventListener("click",function(event){
    alert(event.target.innertext)
   })
}



/*(ho provato a fare js e a commentarlo per capire se ho almeno capito il meccanismo ,  non ne sono certa della riuscita
    ma devo farcela.....................................)*/