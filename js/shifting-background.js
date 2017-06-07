var colours = ['#20AB94','#17CA11','#1C8BF4', '#202C88'];

var createTextElement = function(text, times, size, spacing) {
  var span = document.createElement('span')
  var output = '';
  var colour = colours[Math.floor(Math.random() * colours.length)];

  for(var i=0; i<times; i++)
  {
      output += text;
  }

  span.innerHTML = output;
  span.setAttribute("style", "font-size: " + size + ";" +
                    "color: " + colour + ";" +
                    "letter-spacing: " + spacing + ";");

  return span;
}

var shiftingBackgrounds = document.getElementById('shifting-background');

shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 2,  '800px', '0.3em'));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 10, '400px', '0.02em'));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 10, '400px', '0.2em'));
shiftingBackgrounds.appendChild(createTextElement("LostWeekend", 20, '200px', '0em'));
