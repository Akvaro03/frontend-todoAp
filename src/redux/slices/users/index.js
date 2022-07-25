import { createSlice } from "@reduxjs/toolkit";
// axios
// import axios from "axios";
import datos from "../../../datos.json"
export const userSlice = createSlice({
    name: "users",
    initialState: {
    list: [],
    list2: []
    },
    reducers: {
        setUserList: (state, action) => {
            const dato = action.payload
            // const valor = dato.payload.payload;

            const todo = {
                "name":"Buys",
                "icon":"cart",
                "theme":"white",
                "active": false,
                "collection":[
                    {
                        "name":"Comprar componentes",
                        "color":"black",
                        "collection":"Buys",
                        "day":"Today",
                        "time":"11:00 AMsdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasadsdasdasdasdasda"
                    },
                    {
                        "name":"Comprar autos",
                        "color":"red",
                        "collection":"work",
                        "day":"Tomorrow",
                        "time":"6:00 PM"
                    },
                    {
                        "name":"Comprar falopa",
                        "color":"red",
                        "collection":"work",
                        "day":"Tomorrow",
                        "time":"6:00 PM"
                    }
                ]
            }

            switch (dato.type) {
                case "iniciar":
                    state.list = dato.payload;
                    break;
                
                case "agregar":
                        state.list2 = [...state.list, todo]
                    break;

                default:
                    break;
            }
        }
    },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
    const datos1 = {
        type: "iniciar",
        payload: datos
    }
    
    try {
        dispatch(setUserList(datos1));
    } catch (error) {
        console.log(error)
    }
};

export const handleChange = () => (dispatch) => {
    const datos1 = {
        type: "agregar",
        payload: datos
    }
    
    try {
        dispatch(setUserList(datos1));
    } catch (error) {
        console.log(error)
    }
};
