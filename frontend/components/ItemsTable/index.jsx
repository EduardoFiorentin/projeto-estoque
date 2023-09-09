import { useRecoilState } from "recoil"
import { items } from "../../atoms/items"
import { useEffect } from "react"
import axios from 'axios';
import './index.css'

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

export const ItemsTable = ({setItemEdit, itemEdit}) => {
    const [storage, setStorage] = useRecoilState(items)
    const loadData = () => {
        axios.get('http://localhost:8000/items/')
        .then(response => {
            // console.log('Sucesso! ', response)
            setStorage(response.data)
        })
        .catch(error => {
            // console.log(error);
            window.alert("Erro ao conectar-se ao servidor! Por favor tente novamente!")
            setStorage([])
        });
    }

    useEffect(() => {
        loadData() 
    }, [])

    const deleteItem = item => {
        // deletar do servidor 
        // console.log(item.id)
        axios.delete(`http://localhost:8000/items/${item.id}/`)
        .then(response => {
            // deletar da tela - state 
            var data = storage
            // console.log(data)
            setStorage(data.filter(act => act != item))
        })
        .catch(error=>{
            // console.log(error)
            window.alert("Erro ao conectar-se ao servidor! Por favor tente novamente!")
        })
    } 
    
    return (
        <table className="table">
            <tr className="table__header">
                <th className="table__header-item name">Nome</th>
                <th className="table__header-item category">Categoria</th>
                <th className="table__header-item qtd">Quantidade</th>
                <th className="table__header-item description">Descrissão</th>
                <th className="table__header-item options">Opções</th>
            </tr>

            {
                storage.map(item => {
                    // console.log(item)
                    return(
                        <tr className="table__row">
                            <th className="table__item name">{item.name}</th>
                            <th className="table__item category">{CATEGORY[item.category-1][1]}</th>
                            <th className="table__item qtd">{item.qtd}</th>
                            <th className="table__item description">{item.description}</th>
                            <th className="table__item options">
                                <img 
                                    src="../../assets/img/delete.png" 
                                    alt=""  
                                    className="table__icon" 
                                    onClick={() => {deleteItem(item)}}
                                />
                                <img 
                                    src="../../assets/img/edit.png" 
                                    alt="" 
                                    className="table__icon"
                                    onClick={() => {setItemEdit(item)}}
                                    />  
                            </th>
                        </tr>
                    )
                })
            }
            
        </table>
    )
}
