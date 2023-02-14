const list = document.querySelector('select');

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(list);
    list.remove(list.selectedIndex);
    console.log(list);
});