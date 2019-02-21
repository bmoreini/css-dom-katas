/* Japanese Flag */

1. Work in trinket.io to create:
   a. in HTML: a flag div (id=flag class=japan) a button (position = absolute, top=0).
   b. in CSS: the flag div is 400 X 400, with a 100 pixel top margin and a 220 pixel left margin. 
   c. Add a japan class to the CSS to give the div a 50% border radius and color it #BD0029.
   d. Add a button class to the button that gives it a blue background color, a height of 30px and 5px padding. 

2. In repl.it add an HTML doc linked to the css and script, with an empty <body></body>.

3. In the script, add: plus script with first line window.onload=start; and
   a. A first line that loads a start function when the window loads;
   b. A start function that builds the flag div (document.createElement > document.body.appendChild.setAttribute) and calls newButton().
   c. A newButton function that builds the button (document.createElement > Button.innerHTML > Button.setAttribute onclick = japan() > document.body.appendChild.setAttribute class=button
   b. A japan function that sets a variable called flag and points it at the div with id=flag > setAttribute of div to class=japan. 
