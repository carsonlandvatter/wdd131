const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        const li = document.createElement('li');

        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        input.value = '';

        deleteButton.addEventListener('click', function () {
            
            li.remove();
        });

        input.focus();
    } else {

        alert('Please enter a chapter');
    }
});