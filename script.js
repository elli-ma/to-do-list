let form = document.getElementById('input')
let list = document.getElementById('list')
let textInput = document.getElementById('textInput')
let sum = document.getElementById('sum')
let a = 0;
let all = document.getElementById('all')
let act = document.getElementById('act')
let gut = document.getElementById('gut')
let counter = 0;

form.onsubmit = (event) => {
    a = a + 1;
    event.preventDefault()
        // Создаем строку
    let li = document.createElement('li')


    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.id = 'check' + counter
    counter = counter + 1
        //создает чекбокс

    checkbox.onclick = function(event) {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through'
            a = a - 1;
            sum.innerText = a;
        } else {
            li.style.textDecoration = ''
            a = a + 1;
            sum.innerText = a;
        }

    }

    //обработчик события онклик
    let label = document.createElement('label')
    label.innerText = textInput.value
    label.setAttribute('for', checkbox.id)

    li.appendChild(checkbox)
    li.appendChild(label)

    textInput.value = ''
    list.appendChild(li)
    sum.innerText = a;
}
act.onclick = function(event) {
    for (let i = 0; i < list.children.length; i++) {
        let li = list.children[i]
        if (li.style.textDecoration == 'line-through') {
            li.style.display = 'none';
        } else {
            li.style.display = 'block'
        }
    }
}
gut.onclick = function(event) {
    for (let i = 0; i < list.children.length; i++) {
        let li = list.children[i]
        if (li.style.textDecoration == '') {
            li.style.display = 'none';
        } else {
            li.style.display = 'block'
        }
    }
}

all.onclick = function(event) {
    for (let i = 0; i < list.children.length; i++) {
        let li = list.children[i]
        li.style.display = 'block';
    }
}