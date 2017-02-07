var wrapper = document.createElement('div');
wrapper.className = "wrapper";

var form = document.createElement('form');
form.className = "pure-form-stacked"

var headerText = document.createElement('legend');
headerText.innerHTML = "Тест по программированию";

var menu = document.createElement('ul');
menu.className = "menu";

var br = document.createElement('br');

var menuItem = [], menuName;
var checkbox = [];
var checkName = [];

var button = document.createElement('button');
button.type = "submit";
button.className = "pure-button pure-button-primary";
button.innerHTML = "Проверить мои результаты";

document.body.appendChild(wrapper);
wrapper.appendChild(form);
form.appendChild(headerText);
form.appendChild(menu);
form.appendChild(button);

for (var i = 1; i <= 3; i++) {
  menuItem[i] = document.createElement('li');
  menuName = i + ". Вопрос №" + i;
  menuItem[i].innerHTML = menuName;
  menu.appendChild(menuItem[i]);

  for (var j = 1; j <= 3; j++) {
    checkbox[j] = document.createElement('input');
    checkbox[j].type = "checkbox"
    checkbox[j].className = "pure-checkbox";
    checkName[j] = document.createElement('span');
    checkName[j].innerHTML = "Вариант ответа №" + j;
    menuItem[i].appendChild(checkbox[j]);
    menuItem[i].appendChild(checkName[j]);
    menuItem[i].appendChild(br);
  }
}
