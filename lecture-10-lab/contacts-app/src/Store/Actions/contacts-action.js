export const ContactsActionType = {
  ADD_CONTACT: '[Contact] Add contact action',
};

export const addContact = (payload) => {
  return {
    type: ContactsActionType.ADD_CONTACT,
    payload,
  };
};
