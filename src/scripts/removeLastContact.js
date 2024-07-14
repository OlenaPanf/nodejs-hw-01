import * as fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8'); // Читаємо вміст файлу
    let contacts = JSON.parse(data); // Парсуємо отримані дані до масиву
    // Перевіряємо, чи існує хоча б один елемент у масиві
    if (contacts.length > 0) {
      contacts.pop(); // Видаляємо останній контакт
      // Записуємо змінений масив назад у файл
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact removed');
      return true; // Повертаємо результат операції
    } else {
      console.log('No contacts to remove.');
      return false;
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
    throw error; // Ви можете вибрати, чи хочете повертати помилку або не робити цього
  }
};

removeLastContact();
