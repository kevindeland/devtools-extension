// This is included and executed in the inspected page
function inserted() {
  console.log('Garbage script attached');
  
  // var window = chrome.devtools.inspectedWindow;

  console.log(window);
  var div = window.document.getElementById("divisibility");
  var stepHtml = window.document.getElementsByTagName("x-step");
  var steps = Array.from(stepHtml);

  steps.forEach(function(s) {
    console.log(s);
  });
}
inserted();