import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = (number) => {
  fs.readFile(PATH_DB, 'utf8')
    .then((data) => {
      const contacts = JSON.parse(data);
      for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
      }
      return fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    })
    .catch((error) => {
      console.error('Error generating contacts:', error);
    });
};

generateContacts(5);
