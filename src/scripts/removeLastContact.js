import * as fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop(); //видаляю
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact removed');
      return true;
    } else {
      console.log('No contacts to remove.');
      return false;
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
    throw error;
  }
};

removeLastContact();
