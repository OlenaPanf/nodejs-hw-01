import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

console.log(await countContacts());

//========================================================

// import fs from 'fs/promises'; // Використовуємо проміс-орієнтовану версію модуля
// import path from 'path';
// import { PATH_DB } from '../constants/contacts.js';

// export const countContacts = async () => {
//   const dbPath = path.resolve(__dirname, '..', PATH_DB);
//   const contacts = JSON.parse(await fs.readFile(dbPath, 'utf8'));
//   return contacts.length;
// };
