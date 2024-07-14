import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Contact added:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
//===================================
// export const addOneContact = async () => {
//   const dbPath = path.resolve(__dirname, '..', PATH_DB);
//   const contacts = JSON.parse(await fs.readFile(dbPath, 'utf8'));
//   const newContact = createFakeContact();
//   contacts.push(newContact);
//   await fs.writeFile(dbPath, JSON.stringify(contacts), 'utf8');
// };
