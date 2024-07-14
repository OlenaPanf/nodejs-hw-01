import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      const removedContact = contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact removed:', removedContact);
    } else {
      console.log('No contacts to remove');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();

//========================================================

// import fs from 'fs/promises'; // Використовуємо проміс-орієнтовану версую модуля
// import path from 'path';
// import { PATH_DB } from '../constants/contacts.js';

// export const removeLastContact = async () => {
//   const dbPath = path.resolve(__dirname, '..', PATH_DB);
//   let contacts = JSON.parse(await fs.readFile(dbPath, 'utf8'));
//   if (contacts.length > 0) {
//     contacts.pop(); // Видаляємо останній контакт
//     await fs.writeFile(dbPath, JSON.stringify(contacts), 'utf8');
//   }
// };
