/*
code repository:
https://github.com/adegard/P5.JS-in-Google-Apps

from original idea of:
https://stackoverflow.com/questions/46695801/is-it-possible-to-use-the-p5-js-library-in-google-apps-script

*/

function doGet() {
   var template = HtmlService.createTemplateFromFile("demo");
   return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// after installing the files, deploy the apps script:
