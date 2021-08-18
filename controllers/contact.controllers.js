const addContact = async (req, res) => {
  try {
    const newContact = req.body;
    // test name and email required
    if (!newContact.name || !newContact.email) {
      return res.status(400).send({ msg: "name and email are required !!" });
    }
    // test email is unique
    const contactToFind = await Contact.findOne({ email: newContact.email });
    if (contactToFind) {
      return res.status(400).send({ msg: "Contact already exist !! " });
    }
    // create new document

    const contactToAdd = new Contact(newContact);
    await contactToAdd.save();

    res.status(200).send({ msg: "Contact added succesfuly", contactToAdd });
  } catch (error) {
    res.status(400).send({ msg: "Can not add new Contact", error });
  }
};

const getAll = async (req, res) => {
    try {
      const listContacts = await Contact.find();
      res
        .status(200)
        .send({ msg: "this is the list of contacts", listContacts });
    } catch (error) {
      res.status(400).send({ msg: "Can not get all Contacts", error });
    }
  }
  const getOne = async (req, res) => {
    try {
      const { _id } = req.params;
      const contactToFind = await Contact.findOne({ _id });
      res.status(200).send({ msg: "contact found ", contactToFind });
    } catch (error) {
      res.status(400).send({ msg: "Can not get this Contact", error });
    }
  }
  const deleteOne =  async (req, res) => {
    try {
      const contactId = req.params.id;
      await Contact.deleteOne({ _id: contactId });
      res.status(200).send({ msg: "Contact deleted !!" });
    } catch (error) {
      res.status(400).send({ msg: "Can not delete this Contact", error });
    }
  }
  const updateOne = async (req, res) => {
    try {
      const { _id } = req.params;
      const newContact = req.body;
      let result = await Contact.updateOne(
        { _id },
        { $set: { ...newContact } }
      );
      if (result.nModified === 0) {
        return res.status(400).send({ msg: "Contact already updated !!!" });
      }
      res.status(200).send({ msg: "Contact updated succesfuly !!" });
    } catch (error) {
      res.status(400).send({ msg: "Can not update this Contact", error });
    }
  }
   

module.exports = controllers = { addContact , getAll , getOne , deleteOne , updateOne };
