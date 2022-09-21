import { Person } from './person';

const url = '../data/person.json';

export const list = async () => {
  const promise = fetch(url, {
    method: 'GET',
  });
  const response = await promise;
  const data = await response.json();

  const persons = [];
  data.forEach((item) => {
    const person = getPerson(item.first_name, item.last_name);
    persons.push(person);
  });
  return persons;
};

const getPerson = (firstName, lastName) => new Person(firstName, lastName);
