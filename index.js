const { program } = require('commander');

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const getId = await contacts.getContactById(id);
      return console.log(getId);

    case "add":
      const addContact = await contacts.addContact(name, email, phone );
      return console.log(addContact);

    case "remove":
      const removeContacts = await contacts.removeContact(id);
      return console.log(removeContacts);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>")

program.parse();

const argv = program.opts();
invokeAction(argv);

//invokeAction({ action: "list"})
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" })
//invokeAction({ action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22" })
//invokeAction({action: "remove", id: "qdggE76Jtbfd9eWJHrssH"})
