import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log('All contacts removed');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();

//========================================================
// import fs from 'fs/promises'; // Використовуємо проміс-орієнтовану версую модуля
// import path from 'path';
// import { PATH_DB } from '../constants/contacts.js';

// export const removeAllContacts = async () => {
//   const dbPath = path.resolve(__dirname, '..', PATH_DB);
//   await fs.writeFile(dbPath, JSON.stringify([]), 'utf8'); // Скидуємо всі контакти
// };
