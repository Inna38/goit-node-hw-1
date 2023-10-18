 const contacts = require("./db/contacts")

// const { Command } = require('commander');
// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const allContacts = await contacts.listContacts()
         return console.log(allContacts);
     

    case 'get':
          const getId = await contacts.getContactById(id)
          return console.log(getId);
    

    case 'add':
          const addContact = await contacts.addContact({name, email, phone})
          return console.log(addContact)
   

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction(argv);


 //invokeAction({ action: "list"})
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" })
 invokeAction({ action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22" })
// invokeAction({action: "remove", id: "qdggE76Jtbfd9eWJHrssH"})