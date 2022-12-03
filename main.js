let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('En esta pagina contare un poco sobre mi vida.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
