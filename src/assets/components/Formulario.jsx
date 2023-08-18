import React, { useState } from "react";
const usuarios = [
    {
        nroDocumento: "1233903422",
        tipoDocumento: "CC",
        apellidoUno: "Arcos",
        apellidoDos: "Lucero",
        nombreUno: "Ricardo",
        nombreDos: "Nicolas",
        fechaNacimiento: "13/12/1998",
        sexo: "MASCULINO",
        tipoPoblacion: "Listado Censales",
        telefono: "3112233244",
        resguardo: "WACOYO",
        comunidad: "ACACIOS",
        IPS: "MATSULUDANI",
        direccion: "calle 163#73-33",
        fechaAfiliacion: "13/12/2016",
    },
    {
        nroDocumento: "555123789",
        tipoDocumento: "Cédula de Extranjería",
        apellidoUno: "Martinez",
        apellidoDos: "López",
        nombreUno: "Ana",
        nombreDos: "Carolina",
        fechaNacimiento: "02/07/1985",
        sexo: "FEMENINO",
        tipoPoblacion: "Inmigrante",
        telefono: "3229988776",
        resguardo: "N/A",
        comunidad: "EL PARAISO",
        IPS: "SALUDFUTURO",
        direccion: "Calle 8 #20-45",
        fechaAfiliacion: "15/09/2019",
    },
    {
        nroDocumento: "987654321",
        tipoDocumento: "Tarjeta de Identidad",
        apellidoUno: "González",
        apellidoDos: "López",
        nombreUno: "María",
        nombreDos: "Isabel",
        fechaNacimiento: "25/08/2002",
        sexo: "FEMENINO",
        tipoPoblacion: "Urbano",
        telefono: "3004455667",
        resguardo: "N/A",
        comunidad: "LOS ROSALES",
        IPS: "SALUDVIDA",
        direccion: "Av. Principal #45-67",
        fechaAfiliacion: "10/02/2018",
    },
];

const Formulario = () => {
    const [numeroDocumento, setNumeroDocumento] = useState(""); 
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

    const BuscarUsuario = () => {
        const usuarioEncontrado = usuarios.find(
            (user) => user.nroDocumento === numeroDocumento
        );

        if (usuarioEncontrado) {
            setUsuarioEncontrado(usuarioEncontrado);
        } else {
            alert("Usuario no encontrado :(");
            setUsuarioEncontrado(null);
        }
    };

    const borrarCampos = () => {
        setNumeroDocumento("");
        setUsuarioEncontrado(null);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label
                    className=" font-bold mb-2 text-center align-middle "
                    htmlFor="id"
                >
                    Numero de documento
                </label>

                <div className="flex">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  space-y-90 leading-tight focus: outline-offset-2 outline-sky-600 invalid:border-pink-400"
                        id="id"
                        type="text"
                        placeholder="Ingrese Documento "
                        value={numeroDocumento}
                        onChange={(e) => setNumeroDocumento(e.target.value)}
                    />
                    <button
                        className="bg-sky-600 rounded focus:outline-none py-2 px-4 focus:shadow-outline text-white ml-5 w-30 h-30 hover:bg-sky-700 focus:ring animate-pulse"
                        onClick={BuscarUsuario}
                    >
                        Search
                    </button>
                    <button
                        className="bg-red-700 rounded focus:outline-none py-2 px-4  focus:shadow-outline text-white ml-5 w-30 h-30  hover:bg-red-800  focus:ring "
                        onClick={borrarCampos}
                    >
                        Clear
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 gris-rows-3 place-content-center">
                {[
                    "tipoDocumento",
                    "apellidoUno",
                    "apellidoDos",
                    "nombreUno",
                    "nombreDos",
                    "fechaNacimiento",
                    "sexo",
                    "tipoPoblacion",
                    "telefono",
                    "resguardo",
                    "comunidad",
                    "IPS",
                    "direccion",
                    "fechaAfiliacion",
                ].map((campo, index) => (
                    <div key={index}>
                        <label className="inline-block text-gray-00 text-sm font-bold mb-3 text-center align-middle">
                            {campo}
                        </label>
                        <input
                            className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full "
                            type="text"
                            value={usuarioEncontrado?.[campo] || ""}
                            readOnly
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Formulario;
