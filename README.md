# P5.JS-in-Google-Apps
P5.js in Google Apps test
</br>
![image](https://user-images.githubusercontent.com/23522577/120076053-17b77280-c0a4-11eb-8a26-9a373101425d.png)
</br>
<a href="https://script.google.com/macros/s/AKfycbykJTogGHTxGo99uP8EYjzyyvaQie1QwZGPAQ-AWt44HeZ5Goik5eKOsQ6SVrWAMN2Z/exec" target="_blank">Try it</a>


First you must create a new file and put all your HTML code with the javascript you want to use.

demo.html
```
<html>
<head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
    <?!= include('sketch'); ?>
</head>
<body>
</body>
</html>
```
sketch.html
```
<script>

//insert here P5.js code:
function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }
}
//end of P5.js code

</script>
```
Then in your Appsscript file code.gs. This create a mix of Google Apps Script code and HTML to produce dynamic pages
```
function doGet() {
   var template = HtmlService.createTemplateFromFile("demo");
   return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
```


