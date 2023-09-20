import { useState } from 'react'
import '../CreateItemScreen/index.css'
import { useRecoilState } from 'recoil'
import { items } from '../../atoms/items'
import axios from 'axios'

const CATEGORY = [
    ['1', 'Vestuário Tático'],
    ['2','Armamento e Munição'],
    ['3','Equipamento de Comunicação'],
    ['4','Equipamento de Sobrevivência'],
    ['5','Equipamento de Missões Especiais'],
    ['6','Veículos Militares'],
    ['7','Equipamentos de Engenharia'],
    ['8','Equipamento de Inteligência e Vigilância'],
    ['9','Equipamento Médico Militar'],
    ['10','Equipamento de Logística'],
    ['11','Equipamento de Treinamento'],
    ['12','Equipamento de Sapa'],
    ['13', 'Outros'],
]

export const CreateEditTable = ({item, setItemEdit}) => {

    const [name, setName] = useState(item.name)
    const [qtd, setQtd] = useState(item.qtd)
    const [description, setDescription] = useState(item.description)
    const [category, setCategory] = useState(item.category)

    const [storage, setStorage] = useRecoilState(items)
    const [waiting, setWaiting] = useState(false)

    function replaceItemAtIndex(arr, index, newValue) {  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]; }

    const saveData = () =>{
        setWaiting(true)
        let  data = storage
        // console.log(data)
        const index = data.indexOf(item)
        const newItem = {
            name,
            qtd,
            description,
            category,
            id: item.id,
            date_cads: item.date_cads
        }
        // console.log("index: ", index)

        axios.patch(`http://localhost:8000/items/${item.id}/`, newItem)
        .then(response => {
            setWaiting(false)
            data = replaceItemAtIndex(data, index, newItem)
            setStorage(data)
            
            setItemEdit(false)
            
            setStorage(data.filter(act => act != item))
        })
        .catch(error=>{
            setWaiting(false)
            window.alert("Erro ao conectar-se ao servidor! Por favor tente novamente!")
        })
    }


    return (     
        <div>
             <div className="createItems__screen">
            <div className="createItems__inputs">
                <p className="createItems__text">Nome</p>
                <input type="text" name="" id="" className="createItems__input" value={name} onChange={event => setName(event.target.value)}/>
            </div>
            <div className="createItems__inputs">
                <p className="createItems__text">Quantidade</p>
                <input type="number" name="" id="" className="createItems__input" value={qtd} onChange={event => setQtd(event.target.value)}/>
            </div>
            <div className="createItems__inputs">
                <p className="createItems__text">Descrissão</p>
                <textarea name="" id="" cols="10" rows="10" className="createItems__input createItems__input--textarea" maxLength={300} 
                    value={description}  onChange={event => setDescription(event.target.value)}></textarea>
            </div>
            <div className="createItems__inputs">   
                <p className="createItems__text">Categoria</p>
                <select name="" id="" className='createItems__select createItems__input ' 
                    onChange={event => setCategory(event.target.value)}>
                    {CATEGORY.map(opt => {
                        return <option 
                            value={opt[0]} 
                            selected={item.category == opt[0] ? true : false}>{opt[1]}</option>
                    })}
                </select>
            </div>

            <button className='createItems__text createItems__button' onClick={saveData}>
                {
                    waiting 
                    ? <img src="../../assets/img/loading.png" alt="" className='createItems__loading'/>
                    : "Salvar"
                }
                </button>
            <button className='createItems__text createItems__button' onClick={() => {
                // console.log(category)
                setItemEdit(false)
            }}>Cancelar</button>
        </div>
        </div>
    )
}