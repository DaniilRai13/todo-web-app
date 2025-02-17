import { ReactNode, useCallback, useState } from 'react';
import { ModalValueContext, ModalActionsContext } from './modalContext';

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setOpen = useCallback((openValue: boolean) => {
    setIsOpen(openValue);
  }, []);

  const value = { isOpen };
  const actions = { setOpen };

  return (
    <ModalValueContext.Provider value={value}>
      <ModalActionsContext.Provider value={actions}>
        {children}
      </ModalActionsContext.Provider>
    </ModalValueContext.Provider>
  );
}

export default ModalProvider;
