import { useRecoilState, useRecoilValue } from "recoil"
import CONFIG from "../config/config.js"
import { storageTableState } from "../atoms/index.js"
import axios from "axios"

// export function createItem(name, category, qtd, description) {

//     // criar item 
//     const newItem = {
//         name,
//         qtd,
//         category,
//         description,
//         "date_cads": Date.now()
//     }
//     console.log("new item : ")
//     console.log(newItem)

//     // mandar para a api
//     axios.post('http://localhost:8000/items/', newItem)
//     .then( response =>{
//         // console.log('FOI!', response)
//     })
//     .catch(error => {
//         // console.log(error)
//         window.alert("Erro ao conectar-se ao servidor! Por favor tente novamente!")
//     })
// }
