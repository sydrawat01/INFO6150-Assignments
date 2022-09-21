const content =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut doloremque odit maiores rerum animi tempora. Praesentium commodi, adipisci aliquam autem corporis sapiente rem reiciendis, ab nisi repudiandae saepe nostrum perspiciatis?';

const addContent = (persons = []) => {
  const ol = document.createElement('ol');
  persons.forEach((person) =>
    addPerson(person.first_name, person.last_name, ol)
  );
  const para = document.getElementById('content');
  para.appendChild(ol);
};

const addPerson = (firstName, lastName, parent) => {
  const li = document.createElement('li');
  li.classList.add('person');
  li.textContent = `${firstName} ${lastName}`;
  parent.appendChild(li);
};

const fetchData = () => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function (response) {
    if (this.status === 200) {
      const data = this.responseText;
      const persons = JSON.parse(data);
      addContent(persons);
    }
  });
  xhr.open('GET', 'data/person.json');
  xhr.send();
};

const showBtn = document.getElementById('show-btn');

showBtn.addEventListener('click', fetchData);
