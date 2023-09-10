import { atom } from "recoil";

const mock = [
    {
        "id": 1,
        "name": "Estaca metálica",
        "qtd": 14,
        "category": "12",
        "description": "Estaca com alça",
        "date_cads": "2023-08-20T11:03:00-03:00"
    },
    {
        "id": 2,
        "name": "Bote Pneumatico de Assalto Zodiac Milpro FC530",
        "qtd": 6,
        "category": "5",
        "description": "2 baixados / 4 em condições",
        "date_cads": "2023-08-20T11:05:00-03:00"
    },
    {
        "id": 3,
        "name": "Colete salva vidas",
        "qtd": 25,
        "category": "5",
        "description": "Vencido",
        "date_cads": "2023-08-20T11:07:46-03:00"
    },
    {
        "id": 4,
        "name": "Reforçador de solo",
        "qtd": 147,
        "category": "5",
        "description": "Modelo novo - 2000",
        "date_cads": "2023-08-20T11:09:09-03:00"
    }
]


export const items = atom({
    key: 'items',
    default: []
    
})
// export const itemsFilter = atom({
//     key: 'itemsFilter',
//     default: []
// })

