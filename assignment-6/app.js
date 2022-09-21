// Input form on button click, and add new todo item
const btnNewTodo = document.getElementById('btn-new-todo');
// Event listener for button to add new todo to list
btnNewTodo.addEventListener('click', () => {
  // Hide the button after input form opens up
  btnNewTodo.setAttribute('style', 'display: none');
  // Get the base container div from the index.html file
  const divAdd = document.querySelector('.container');
  // Create a div element to add various input details for new todo item
  const addItemDiv = document.createElement('div');
  // Add a class to above div
  addItemDiv.classList.add('add-item');

  // Inputs for new Todo Item
  // 1. Title Input
  // Create a div for title input
  const divTitle = document.createElement('div');
  divTitle.classList.add('details');
  // Create label for title of todo
  const lblTitle = document.createElement('label');
  lblTitle.textContent = `Title`;
  // Create input element for title of todo
  const title = document.createElement('input');
  // Set the attributes of the label and input elements
  title.setAttribute('id', 'title');
  title.setAttribute('placeholder', 'Title for the todo');
  title.setAttribute('required', 'true');
  // Add label and title input elements to the title div
  divTitle.appendChild(lblTitle);
  divTitle.appendChild(title);

  // 2. Description Input
  // Create a div for description input
  const divDesc = document.createElement('div');
  divDesc.classList.add('details');
  // Create label for description of todo
  const lblDesc = document.createElement('label');
  lblDesc.textContent = `Description`;
  // Create input element for description of todo
  const description = document.createElement('input');
  // Set the attributes of the label and input elements
  description.setAttribute('id', 'description');
  description.setAttribute('placeholder', 'Description of the todo');
  description.setAttribute('required', 'true');
  // Add label and description input elements to the description div
  divDesc.appendChild(lblDesc);
  divDesc.appendChild(description);

  // 3. Due Date Input
  // Create a div for due date input
  const divDue = document.createElement('div');
  divDue.classList.add('details');
  // Create label for due date of todo
  const lblDue = document.createElement('label');
  lblDue.textContent = `Due Date`;
  // Create input element for due date of todo
  const due = document.createElement('input');
  // Set the attributes of the label and input elements
  due.setAttribute('id', 'due');
  due.setAttribute('required', 'true');
  due.setAttribute('pattern', 'd{4}-d{2}-d{2}');
  due.setAttribute('type', 'date');
  due.setAttribute('min', '2022-03-01');
  due.setAttribute('max', '2026-12-31');
  // Add label and due date input elements to the due date div
  divDue.appendChild(lblDue);
  divDue.appendChild(due);

  // 4. Time Input
  // Create a div for time input
  const divTime = document.createElement('div');
  divTime.classList.add('details');
  // Create label for time of input
  const lblTime = document.createElement('label');
  lblTime.textContent = `Time`;
  // Create input element for time of todo
  const time = document.createElement('input');
  // Set the attributes of the label and input elements
  time.setAttribute('id', 'time');
  time.setAttribute('type', 'time');
  time.setAttribute('required', 'true');
  // Add label and time input elements to the time div
  divTime.appendChild(lblTime);
  divTime.appendChild(time);

  // Button to add new Todo Item to the list
  // Create a div for the add todo button
  const btnDiv = document.createElement('div');
  btnDiv.classList.add('details-btn');
  // Creating the button to add new todo to the list
  const btnAdd = document.createElement('button');
  // Setting the attributes of the button
  btnAdd.setAttribute('type', 'button');
  btnAdd.textContent = `Add item to list`;
  const btnDone = document.createElement('button');
  // Setting the attributes of the button
  btnDone.setAttribute('type', 'button');
  btnDone.textContent = `Done`;
  // Attach the buttons to their div
  btnDiv.appendChild(btnAdd);
  btnDiv.appendChild(btnDone);
  const mainList = document.getElementById('main-list');

  // Event listener on click to add items to the list
  btnAdd.addEventListener('click', () => {
    // Get input elements for the new Todo item
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const due = document.getElementById('due');
    const time = document.getElementById('time');
    // JS object allocation to it's respective input values
    const details = {
      description: description.value,
      due_date: due.value,
      due_time: time.value,
      status: 'open',
    };
    // Using ternary operators for validation checks
    // Check to see if title field is empty
    title.value === ''
      ? title.classList.add('error')
      : title.classList.remove('error');
    // Check to see if description field is empty
    description.value === ''
      ? description.classList.add('error')
      : description.classList.remove('error');
    // Check to see if due date field is empty
    due.value === ''
      ? due.classList.add('error')
      : due.classList.remove('error');
    // Check to see if time field is empty
    time.value === ''
      ? time.classList.add('error')
      : time.classList.remove('error');
    // Check to see if any field is not empty
    // Only then add the new todo item to the list
    if (
      title.value !== '' &&
      description.value !== '' &&
      due.value !== '' &&
      time.value !== ''
    ) {
      // Add the new todo item with details to the main todo list
      addTodo(title.value, details, mainList);
    }
  });
  // Attach all the input elements to the main app div -> container
  divAdd.appendChild(addItemDiv);
  addItemDiv.appendChild(divTitle);
  addItemDiv.appendChild(divDesc);
  addItemDiv.appendChild(divDue);
  addItemDiv.appendChild(divTime);
  addItemDiv.appendChild(btnDiv);

  // Event listener on click to remove
  btnDone.addEventListener('click', () => {
    const container = document.getElementById('add');
    const form = document.querySelector('.add-item');
    // Remove add-item div from the DOM
    container.removeChild(form);
    // Displaying the add button again
    btnNewTodo.setAttribute('style', 'display: block');
  });
});

// Add todo list items to the ordered list
const addTodo = (
  title,
  { description: todoDescription, due_date, due_time, status },
  parent
) => {
  // Create a div for the list items
  const listItem = document.createElement('div');
  listItem.classList.add('list-item');
  // Create checkbox input element for marking todo item as done
  const checkbox = document.createElement('input');
  // Set the attributes for the checkbox
  checkbox.setAttribute('id', 'check');
  checkbox.setAttribute('type', 'checkbox');
  // Create the list element for the todo item
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.textContent = title;

  if (status === 'closed') {
    li.setAttribute('style', 'text-decoration: line-through');
    checkbox.checked = true;
  } else {
    li.setAttribute('style', 'text-decoration: none');
  }

  // Apply strike-through style if check box value is checked
  checkbox.addEventListener('change', () => {
    checkbox.checked
      ? li.setAttribute('style', 'text-decoration: line-through')
      : li.setAttribute('style', 'text-decoration: none');
  });

  // Append all elements to parent element
  parent.appendChild(listItem);
  listItem.appendChild(checkbox);
  listItem.appendChild(li);

  // Event listner on the todo list item to display the todo details
  li.addEventListener(
    'click',
    () => {
      // Create a div to hold todo details
      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('todo-item-details');
      // Create paragraph tags to hold all the todo details
      const description = document.createElement('p');
      const due = document.createElement('p');
      const time = document.createElement('p');
      // Add the CSS class to all the todo details
      description.classList.add('details');
      due.classList.add('details');
      time.classList.add('details');
      // Setting the text for the todo details paragraph tags
      description.textContent = `${todoDescription}`;
      due.textContent = `Due by: ${due_date}`;
      time.textContent = `Complete by: ${due_time}`;
      // Appending the details to their respective divs
      detailsDiv.appendChild(description);
      detailsDiv.appendChild(due);
      detailsDiv.appendChild(time);
      // Appending the details to the todo list item
      li.appendChild(detailsDiv);
    },
    { once: true }
  );
};

// Displaying the Todo List
const displayContent = (todos = []) => {
  // Create an ordered list for the todo list
  const ol = document.createElement('ol');
  // Set attributes and add CSS class to the todo list
  ol.classList.add('list');
  ol.setAttribute('id', 'main-list');
  // Iterate through each list item to add it to the todo list
  todos.forEach((item) => addTodo(item.title, item.details, ol));
  // Get the div for displaying the todo list
  const content = document.getElementById('content');
  // Append the todo list to this div
  content.appendChild(ol);
};

// Fetch data from JSON using XHR
const fetchData = () => {
  // Creating a new XML Http Request
  const xhr = new XMLHttpRequest();
  // Event listener on XHR, when the page loads
  xhr.addEventListener('load', function (response) {
    // Display the todo only when the the request is successful
    if (this.status === 200) {
      const data = this.responseText;
      const todos = JSON.parse(data);
      // Display the JSON data
      displayContent(todos);
    }
  });
  // Get the data from the JSON file
  xhr.open('GET', './data/data.json');
  // Send the XHR request
  xhr.send();
};

// Fetch pre-prepared Todo list from JSON on page load
fetchData();
