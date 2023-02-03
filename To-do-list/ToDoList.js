const ITEMS_CONTAINER = document.getElementById('items');
const ITEM_TEMPLATE = document.getElementById('itemTemplate');
const ADD_BUTTON = document.getElementById('add');

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo-test") || "[]";
    return JSON.parse(value);
}

function setItems(items) {
    const itemsJSON  = JSON.stringify(items);
    localStorage.setItem("todo-test", itemsJSON)
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });
    setItems(items);
    refreshList();
}

function updateItem(item, key, value) {
    item[key] = value;

    setItems(items);
    refreshList();
}

function refreshList() {
    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });
        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
});


refreshList();