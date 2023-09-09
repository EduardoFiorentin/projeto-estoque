import { RecoilRoot } from 'recoil';
import { ItemsTable } from '../components/ItemsTable';
import { Header } from '../components/Header';
import './reset.css'
import { CreateItemScreen } from '../components/CreateItemScreen';
import { useState } from 'react';
import { CreateEditTable } from '../components/CreateEditTable';

function App() {

  const [menu, setMenu] = useState(false)
  const [itemEdit, setItemEdit] = useState(false) // usado em ItemsTable 
  
  return (
    <RecoilRoot>
      <Header menu={menu} setMenu={setMenu}/>
      {menu ? <CreateItemScreen setMenu={setMenu}/> : null}
      {itemEdit ? <CreateEditTable item={itemEdit} setItemEdit={setItemEdit}/> : null}
      <ItemsTable itemEdit={itemEdit} setItemEdit={setItemEdit}/>
    </RecoilRoot>
  )
}

export default App
