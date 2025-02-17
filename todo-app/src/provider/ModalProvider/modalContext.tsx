import { createContext, useContext } from 'react';

type ModalValueType = {
  isOpen: boolean;
};

type ModalActionType = {
  setOpen: (value: boolean) => void;
};

export const ModalValueContext = createContext<ModalValueType | null>(null);
export const ModalActionsContext = createContext<ModalActionType | null>(null);

export const useModalValue = () => {
  const modalContext = useContext(ModalValueContext);
  if (!modalContext) throw new Error('useModalValue must be used within ModalProvider');
  return modalContext;
};

export const useModalActions = () => {
  const modalContext = useContext(ModalActionsContext);
  if (!modalContext) throw new Error('useModalActions must be used within ModalProvider');
  return modalContext;
};
