# P5.JS-in-Google-Apps
P5.js in Google Apps test
</br>
![image](https://user-images.githubusercontent.com/23522577/120076053-17b77280-c0a4-11eb-8a26-9a373101425d.png)
</br>
<a href="https://script.google.com/macros/s/AKfycbykJTogGHTxGo99uP8EYjzyyvaQie1QwZGPAQ-AWt44HeZ5Goik5eKOsQ6SVrWAMN2Z/exec" target="_blank">Try it</a>


First you must create a new file and put all your HTML code with the javascript you want to use.

demo.html
'''
<html>
<head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
    <?!= include('sketch'); ?>
</head>
<body>
</body>
</html>
'''
sketch.html
'''
<script>
function setup() {
  createCanvas(400,600);
}

function draw() {
  background(100);
}
</script>
'''
Then in your Appsscript file code.gs. This create a mix of Google Apps Script code and HTML to produce dynamic pages
'''
function doGet() {
   var template = HtmlService.createTemplateFromFile("demo");
   return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
'''


