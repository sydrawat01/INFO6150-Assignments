export const build = (data = []) => {
  const ol = document.getElementById('list');
  data.forEach((person) => {
    const li = document.createElement('li');
    li.textContent = `${person.firstName} ${person.lastName}`;
    ol.appendChild(li);
  });
};
