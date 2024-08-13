const NotAuthPage = () => {
    return (
        // Suggested code may be subject to a license. Learn more: ~LicenseLog:882059330.
        // Suggested code may be subject to a license. Learn more: ~LicenseLog:1651871205.
        <div className="grid justify-items-center justify-center mt-64 bg-black-500">

            <div className="box-border border-violet-800 rounded-xl bg-white h-650 w-650 p-4 border-2 shadow-2xl">
                <h1>No esta autorizado</h1>
                <p>No tienes permiso para acceder a esta pagina</p>
                <p>Intenta iniciar sesion nuevamente</p>
                <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Iniciar sesion</a>
            </div>

        </div>
    )
}
export default NotAuthPage;