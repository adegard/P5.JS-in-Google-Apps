//https://stackoverflow.com/questions/46695801/is-it-possible-to-use-the-p5-js-library-in-google-apps-script
function doGet() {
   var template = HtmlService.createTemplateFromFile("demo");
   return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


//webapp link:
//https://script.google.com/macros/s/AKfycbxZxerPpaFUoTyvn-23HtX6oIXQpA6Xt3rht8DRtWa4IUCh3YM_CpgcqsPg5Ak5gxRN/exec