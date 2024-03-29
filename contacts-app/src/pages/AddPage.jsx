import React from 'react';
import { addContact } from '../utils/api';
import ContactInput from '../components/ContactInput';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function AddPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onAddContactHandler(contact) {
    await addContact(contact)
    navigate('/');
  }

  return (
    <section>
      <h2>{locale === 'en' ? "Add Contact" : "Tambah kontak"}</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  )
}

export default AddPage;