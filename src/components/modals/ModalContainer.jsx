// components/modals/ModalContainer.jsx
import React from 'react';
import SearchModal from './SearchModal.jsx';
import MenuPanel from './MenuPanel.jsx';
import AccountModal from './AccountModal.jsx';
import { useModal } from '../context/ModalContext.jsx';



const ModalContainer = () => {
  const { modals, closeModal } = useModal();
  console.log(modals,"MODALSS====");
  

  return (
    <>
      <SearchModal isOpen={modals.search} onClose={() => closeModal('search')} />
      <MenuPanel isOpen={modals.menu} onClose={() => closeModal('menu')} />
      {/* <CartPanel isOpen={modals.cart} onClose={() => closeModal('cart')} /> */}
      <AccountModal isOpen={modals.account} onClose={() => closeModal('account')} />
      {/* <FavoritesModal isOpen={modals.favorites} onClose={() => closeModal('favorites')} /> */}
      {/* <NewsletterModal isOpen={modals.newsletter} onClose={() => closeModal('newsletter')} /> */}
      {/* <GDPRNotification isOpen={modals.gdpr} onClose={() => closeModal('gdpr')} /> */}
    </>
  );
};

export default ModalContainer;