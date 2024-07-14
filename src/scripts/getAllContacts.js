import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting contacts:', error);
  }
};

console.log(await getAllContacts());

//========================================================

// import fs from 'fs/promises'; // Використовуємо проміс-орієнтовану версую модуля
// import path from 'path';
// import { PATH_DB } from '../constants/contacts.js';

// export const getAllContacts = async () => {
//   const dbPath = path.resolve(__dirname, '..', PATH_DB);
//   const contacts = JSON.parse(await fs.readFile(dbPath, 'utf8'));
//   return contacts;
// };
