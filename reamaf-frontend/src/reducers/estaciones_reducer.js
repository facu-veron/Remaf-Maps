const INITIAL_STATE = {
    estacion: {
        id: ""
        ,name: ""
        ,precipiatacion: ""
        ,humedad: ""
        ,temperatura: ""
        ,localidad: ""
        ,direc_viento: ""
        ,veloc_viento: ""
        ,punto : "POINT(-58.275585 -26.081926)"
        
        
    },
    estaciones: [],
    error: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_ESTACION":
            return{
                ...state,
                estacion: {
                    id: action.id
                    ,name: action.name
                    ,precipitacion: action.precipiatacion
                    ,humedad: action.humedad
                    ,temperatura: action.temperatura
                    ,localidad: action.localidad
                    ,direc_viento: action.direc_viento
                    ,veloc_viento: action.veloc_viento
                    ,punto: action.punto
                },
            }
            case "SET_ESTACIONES":
            return{
                ...state,
                estaciones: action.payload,
            }
        case "ERROR":
            return {
                ...state,
                error: action.payload
            }
    
        default:
        return state;
    }
}