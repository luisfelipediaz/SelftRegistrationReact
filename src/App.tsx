import { useState } from 'react';
import Register from './Register';
import ListResults from './ListResults';
import { SelfRegistration } from './models';

const LOCALSTORAGE_ITEM = 'registers';

function getCurrentItems(): SelfRegistration[] {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEM) || '[]');
}

function App() {
  window.addEventListener('storage', (eventoStorage: StorageEvent) => {
    setCurrentItems(getCurrentItems());
  });

  const [id, setId] = useState(new Date().getTime());
  const [currentItems, setCurrentItems] = useState<SelfRegistration[]>(
    getCurrentItems()
  );

  const saveIntoLocalStorage = (newData: SelfRegistration) => {
    const newItems = currentItems.slice();
    newItems.push({ ...newData, id });

    localStorage.setItem(LOCALSTORAGE_ITEM, JSON.stringify(newItems));
    setCurrentItems(newItems);
    setId(new Date().getTime());
  };

  return (
    <>
      <Register onSave={saveIntoLocalStorage} key={id} />
      <ListResults items={currentItems} />
    </>
  );
}

export default App;
