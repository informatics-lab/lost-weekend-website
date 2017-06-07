var createTextElement = function(text, times, size, spacing) {
  var span = document.createElement('span')
  var output = '';
  var seed = Math.floor(Math.random() * 50) + 1

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

shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 2,  '800px', '0.3em'));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 10, '400px', '0.02em'));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 10, '400px', '0.2em'));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 20, '200px', '0em'));
