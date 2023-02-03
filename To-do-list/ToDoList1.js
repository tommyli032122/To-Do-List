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

// function deleted() {
//     for (const item of items) {
//         const itemElement = ITEM_TEMPLATE;
//         const DELETED_BUTTON = itemElement.querySelector(".deleted");
//         DELETED_BUTTON.addEventListener("click", () => {
//             item.shift();
//         })
//     }
//     setItems(items);
//     refreshList();
// }

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


localStorage.clear();

// const DELETED_BUTTON = document.getElementsByClassName('deleted');
// console.log(DELETED_BUTTON);
// for (let i = 0; i < DELETED_BUTTON.length; i++) {
//     const button = DELETED_BUTTON[i];
//     button.addEventListener('click', (e) => {
//         console.log(123);
//     })
// }
// function deleted(event) {
//     const buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     console.log(123);
// }
// DELETED_BUTTON.addEventListener("click", () => {
//     deleted();
// })

refreshList();