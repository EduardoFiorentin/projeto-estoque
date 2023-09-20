import { useState } from 'react'
import './index.css'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { items } from '../../atoms/items'

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

export const CreateItemScreen = ({setMenu}) => {

    const [name, setName] = useState('')
    const [qtd, setQtd] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const [storage, setStorage] = useRecoilState(items)
    const [waiting, setWaiting] = useState(false)


    const createItem = () => {
        setWaiting(true)
        const newItem = {
            name, qtd, description, category
        }
        axios.post(`http://localhost:8000/items/`, newItem)
        .then(response => {
            setWaiting(false)
            setStorage([...storage, response.data])
        })
        .catch(error=>{
            setWaiting(false)
            window.alert("Erro ao conectar-se ao servidor! Por favor tente novamente!")
        })
    }

    return (
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
                <textarea name="" id="" cols="10" rows="10" className="createItems__input createItems__input--textarea" maxLength={300} value={description} onChange={event => setDescription(event.target.value)}></textarea>
            </div>
            <div className="createItems__inputs">
                <p className="createItems__text">Categoria</p>
                <select name="" id="" className='createItems__select createItems__input' onChange={event => setCategory(event.target.value)}>
                    {CATEGORY.map(item => {
                        return <option value={item[0]}>{item[1]}</option>
                    })}
                </select>
            </div>

            <button className='createItems__text createItems__button' onClick={createItem}>
            {
                waiting 
                ? <img src="../../assets/img/loading.png" alt="" className='createItems__loading'/>
                : "Criar"
            }
            </button>
            <button className='createItems__text createItems__button' onClick={() => setMenu(false)}>Fechar</button>
        </div>
    )
}