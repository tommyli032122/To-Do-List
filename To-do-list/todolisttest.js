const ITEMS_CONTAINER = document.getElementById('items');
const ITEM_TEMPLATE = document.getElementById('itemTemplate');
const ADD_BUTTON = document.getElementById('add');

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo-test") || "[]";
    return JSON.parse(value);
}

console.log(items);

function setItems(items) {
    const itemsJSON  = JSON.stringify(items);
    localStorage.setItem("todo-test", itemsJSON)
}

let test1 = setItems(items);
console.log(test1);

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });
    setItems(items);
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
});