const fs = require("fs/promises");
const path = require("path");

const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const getBook = await listContacts();
  const contacts = getBook.find(({ id }) => id === contactId);
  return contacts || null;
}

async function addContact(obj) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...obj,
  };
  contacts.push(newContact);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

async function removeContact(contactId) {
  const getContacts = await listContacts();
  const index = getContacts.findIndex(({ id }) => id === contactId);
  const remove = getContacts.splice(index, 1);
  //await fs.writeFile(contactsPath, JSON.stringify(getContacts, null, 2))
  return remove || null;
}
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
