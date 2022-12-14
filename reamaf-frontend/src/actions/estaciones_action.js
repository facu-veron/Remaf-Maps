import axios from "axios"

export const set_estacion = (id, name = "") => async (dispatch) => {
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
        let datos_final = []
        const datos = await axios.get("http://25.60.214.193:3000/datos/")

        // const dato = (await axios.post("http://25.60.214.193:3000/datos/get_datos" ,{
        //     id_estacion: id
        // })).data[0]
        //datos_final = datos.data
        datos.data.forEach(elem => {
            datos_final.push({ location: elem })
        })

        datos_final = await Promise.all(
            datos_final.map(async elem => {
                let res = await axios.post("http://25.60.214.193:3000/datos/get_datos" ,{
                    id_estacion: elem.location.id_weather_station
                });

                elem.location.data = res.data[0];

                return elem;
            })
        );

        //console.log("set_Estacionessssssssssss");
        //console.log(datos_final);
        dispatch({
            type: "SET_ESTACIONES",
            payload: datos_final
        })

        return datos_final;

        //.slice(6, -1).split(" ")
    } catch (error) {
        //console.log(error);
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })

        return false;
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
            let humedad_min = ""
            let humedad_max = ""
            let temperat_min = ""
            let temperat_max = ""
            let precipit_min = ""
            let precipit_max = ""
           
            for (let j = suma - 28; j < suma; j++) {
                if(humedad_min == ""){
                    humedad_min = dato.data[j].humedad
                    humedad_max = dato.data[j].humedad
                    temperat_min = dato.data[j].temperatura
                    temperat_max = dato.data[j].temperatura
                    precipit_min = dato.data[j].precipitacion
                    precipit_max = dato.data[j].precipitacion
                }
               
                humedad_min = dato.data[j].humedad < humedad_min ? dato.data[j].humedad : humedad_min
                humedad_max = dato.data[j].humedad >= humedad_max ? dato.data[j].humedad : humedad_max
                temperat_min = dato.data[j].temperatura < temperat_min ? dato.data[j].temperatura : temperat_min
                temperat_max = dato.data[j].temperatura >= temperat_max ? dato.data[j].temperatura : temperat_max
                precipit_min = dato.data[j].precipitacion < precipit_min ? dato.data[j].precipitacion : precipit_min
                precipit_max = dato.data[j].precipitacion >= precipit_max ? dato.data[j].precipitacion : precipit_max
                
                
            }
            
            
            datos.push( {
                dato: dato.data[suma]
                ,humedad_min: humedad_min
                ,humedad_max: humedad_max
                ,temperat_max: temperat_max
                ,temperat_min: temperat_min
                ,precipit_min: precipit_min
                ,precipit_max: precipit_max
            })
            //console.log(datos[datos.length - 1])
            //console.log("minima " + i + " " + minimo)
            //console.log("maxima " + i + " " + maximo)
            //console.log("suma " + suma)
            
        }
        //console.log(datos)
        return datos
    } catch (error) {
        console.log("no anda")
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })
    }
}