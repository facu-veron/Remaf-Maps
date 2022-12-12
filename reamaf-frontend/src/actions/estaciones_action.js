import axios from "axios"

export const set_estacion = (id, name) => async (dispatch) => {
    try {

        //console.log(id)
        //let datos = ""
        const dato = (await axios.post("http://25.60.214.193:3000/datos/get_datos" ,{
            id_estacion: id
        })).data[0]

        const {punto} = (await axios.post("http://25.60.214.193:3000/datos/get_point", {
            id_estacion: id
        })).data[0]
        //console.log(punto)
        
        //.then( res => {console.log(res)})
        
        //console.log(data)
        dispatch({
            type: "SET_ESTACION"
            ,id: id
            ,name: name
            ,precipiatacion: dato.precipitacion
            ,humedad: dato.humedad
            ,temperatura: dato.temperatura
            ,localidad: dato.localidad
            ,direc_viento: dato.direcc_viento
            ,veloc_viento: dato.veloc_viento 
            ,punto: punto
        })

    } catch (error) {
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })
    }
}

export const set_estaciones = () => async (dispatch) => {
    try {
        
        const datos = await axios.get("http://25.60.214.193:3000/datos/")
        //console.log(datos);
        dispatch({
            type: "SET_ESTACIONES",
            payload: datos
        })
    } catch (error) {
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })
    }
}

export const get_estacion = (id ,fecha_ini, fecha_fin) => async (dispatch) => {
    try {
        let datos = []

        const dato = await axios.post("http://25.60.214.193:3000/datos/get_fechas" ,{
            fecha_ini: fecha_ini
            , fecha_fin: fecha_fin
            ,id_estacion: id
        })

        const cantidad = dato.data.length / 7

        const cant = dato.data.length
        //console.log(cantidad)
        let suma = 0
        
        for (let i = 0; i < 7; i++) {
            suma += 28
            //console.log(suma)
           // console.log(dato.data[suma])
           let temperat_min = ""
           let temperat_max = ""
            let humedad = 0
            let precipitacion = 0
           
            for (let j = suma - 28; j < suma; j++) {
                if(temperat_min == ""){
                    temperat_min = dato.data[j].temperatura
                    temperat_max = dato.data[j].temperatura
                }
               
                temperat_min = dato.data[j].temperatura < temperat_min ? dato.data[j].temperatura : temperat_min
                temperat_max = dato.data[j].temperatura >= temperat_max ? dato.data[j].temperatura : temperat_max
                
                
                humedad += dato.data[j].humedad
                precipitacion += dato.data[j].precipitacion
            }
            
            humedad = humedad / 28
            precipitacion = precipitacion / 28

            datos.push( {
                dato: dato.data[suma]
                ,temperat_max: temperat_max
                ,temperat_min: temperat_min
                ,humedad: humedad
                ,precipitacion: precipitacion
            })
            console.log("datoss")
            console.log(humedad)
            console.log(precipitacion)
            //console.log(datos[datos.length - 1])
            //console.log("minima " + i + " " + minimo)
            //console.log("maxima " + i + " " + maximo)
            //console.log("suma " + suma)
            
        }
        console.log(datos)
        return datos
    } catch (error) {
        console.log("no anda")
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })
    }
}