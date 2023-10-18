const fs = require("fs/promises")
const path = require("path")

const {nanoid} = require ("nanoid")

const contactsPath = path.join(__dirname, "contacts.json") 

async function listContacts () {
  const data = await fs.readFile(contactsPath)
  return JSON.parse(data)
}

async function getContactById(contactId) {
  const getBook = await listContacts()
  const contacts = getBook.find(({id}) => id === contactId)
  return contacts || null
}

async function addContact(obj) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
...obj
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify());
  return newContact;
}

async function removeContact(contactId) {

  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}



module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
}
