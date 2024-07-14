import * as fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);
    contacts = []; // Очищуємо масив контактів
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    return true;
  } catch (error) {
    console.error('Error removing all contacts:', error);
    throw error;
  }
};

removeAllContacts();
