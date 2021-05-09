let greeting = document.querySelector('.greeting');

function displayCode() {
  let code = `
  <div class="greeting">
    <p>Hello World!</p>
  </div>
  `;
  //   greeting.style.display = "none";
  let codeDiv = document.querySelector('.code');
  codeDiv.textContent = code;
}

displayCode();

function innerFunction() {
  let html = `<h3>innerHTML</h3><div class="code">`;
  html += `document.querySelector('.greeting').innerHTML</div>`;
  html += `<h4>Output</h4>`;

  html += greeting.innerHTML;
  document.getElementById('inner').innerHTML = html;
}

innerFunction();

function outerFunction() {
  let htm = `<h3>outerHTML</h3><div class="code">`;
  htm += `document.querySelector('.greeting').outerHTML</div>`;
  htm += `<h4>Output</h4>`;

  let html = greeting.outerHTML;

  document.querySelector('.outer-code').innerHTML = htm;
  document.querySelector('.outer-html').textContent = html;
}

outerFunction();
