var genDelay = function() {
  return Math.floor(Math.random() * 50) + 1;
}

var createTextElement = function(text, times, size, spacing, seed) {
  var span = document.createElement('span')
  var output = '';

  for(var i=0; i<times; i++)
  {
      output += text;
  }

  span.innerHTML = output;
  span.setAttribute("style", "font-size: " + size + ";" +
                    "letter-spacing: " + spacing + ";" +
                    "-webkit-animation-delay: " + -seed + "s;" +
                    "animation-delay: " + -seed + "s;");

  return span;
}

var shiftingBackgrounds = document.getElementById('shifting-background');

shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 2,  '800px', '0.3em', genDelay()));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 10, '400px', '0.02em', genDelay()));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 10, '400px', '0.2em', genDelay()));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 20, '200px', '0em', 0));
