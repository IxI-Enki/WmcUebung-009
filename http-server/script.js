function startDarkmode() {
  document.body.style.backgroundColor = 'black';
  header.style.color = 'white';

  darkModeButton.style.visibility = 'hidden';
  lightModeButton.style.visibility = 'visible';

  trainingsContainer.style.backgroundColor = '#111';
  trainingsContainer.style.color = '#888';

  console.log("- swapped to darkmode\n  + removed button & label");
}


function startLightmode() {
  document.body.style.backgroundColor = 'white';
  header.style.color = 'black';

  darkModeButton.style.visibility = 'visible';
  lightModeButton.style.visibility = 'hidden';

  trainingsContainer.style.backgroundColor = '#555';
  trainingsContainer.style.color = '#111';
 
  console.log("- swapped to lightmode\n  + removed button & label");
}


function runCode(){
  const greeting = "Hello Jan";
  console.log(greeting);
}