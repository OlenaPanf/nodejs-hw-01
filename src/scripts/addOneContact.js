import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = () => {
  fs.readFile(PATH_DB, 'utf8')
    .then((data) => {
      const contacts = JSON.parse(data);
      const newContact = createFakeContact();
      contacts.push(newContact);
      return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    })
    .then(() => {
      console.log('Contact added');
    })
    .catch((error) => {
      console.error('Error adding contact:', error);
    });
};

addOneContact();
