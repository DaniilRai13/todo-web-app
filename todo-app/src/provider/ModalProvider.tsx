import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

type ModalValueType = {
  isOpen: boolean;
}

type ModalActionType = {
  setOpen: (value: boolean) => void;
}

export const ModalValueContext = createContext<ModalValueType | null>(null);
export const ModalActionsContext = createContext<ModalActionType | null>(null);

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setOpen = useCallback((openValue: boolean) => {
    setIsOpen(openValue);
  }, []);

  const value = { isOpen }
  const actions = { setOpen }

  return (
    <ModalValueContext.Provider value={value}>
      <ModalActionsContext.Provider value={actions}>
        {children}
      </ModalActionsContext.Provider>
    </ModalValueContext.Provider>
  );
}

export const useModalValue = () => {
  const modalContext = useContext(ModalValueContext)
  if (!modalContext) throw new Error('useModalActions must be used within...')
  return modalContext
}

export const useModalActions = () => {
  const modalContext = useContext(ModalActionsContext)
  if (!modalContext) throw new Error('useModalActions must be used within...')
  return modalContext
}


export default ModalProvider;
