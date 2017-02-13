var wrapper = document.createElement("form");
wrapper.className = "pure-form-stacked";
wrapper.style.padding = "50px";

var header = document.createElement("h1");
header.innerHTML = "Тест по программированию";
header.style.margin = "0 0 50px 0";
header.style.textAlign = "center";

var qaItem = [];

var checkbox = [];

var submitButton = document.createElement('button');
submitButton.type = "submit";
submitButton.className = "pure-button pure-button-primary";
submitButton.innerHTML = "Проверить мои результаты";
submitButton.style.margin = "50px 0 0 0";

function checklist(mainBlock) {
  for (var i = 1; i <= 3; i++) {
    var text = document.createTextNode("Вариант ответа №" + i);

    var paragraph = document.createElement("br")

    checkbox[i] = document.createElement("input");
    checkbox[i].type = "checkbox";
    checkbox[i].className = "pure-checkbox";
    checkbox[i].style.margin = "10px 10px 10px 0";

    mainBlock.appendChild(checkbox[i]);
    mainBlock.appendChild(text);
    mainBlock.appendChild(paragraph);
  }
}

document.body.appendChild(wrapper);
wrapper.appendChild(header);

for (var j = 1; j <= 3; j++) {
  qaItem[j] = document.createElement("h1");
  qaItem[j].innerHTML = j + ". Вопрос №" + j;

  wrapper.appendChild(qaItem[j]);
  checklist(wrapper);
}
wrapper.appendChild(submitButton);
