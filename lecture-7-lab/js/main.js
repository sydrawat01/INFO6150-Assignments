import * as personService from './person-service';
import * as directory from './directory';
import '../scss/main.scss';

const data = personService.list();
data.then((persons) => directory.build(persons));
