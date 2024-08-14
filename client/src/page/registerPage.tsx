import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/AuthState";
import { AuthLogin, profileResquest } from "../api/IAuthEndPoint";
import wAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(wAlert);
const imageUrl = 'https://static.vecteezy.com/system/resources/previews/001/594/577/non_2x/blue-purple-gradient-geometric-shape-free-vector.jpg';

/*interface IRegisterPage {
    company: string;
    description: string;
    activity: string;
    address: string;
    phone: string;
    user: {
        username: string;
        name: string;
        lastname: string;
        email: string;
        password: string;
        rolid: number;
    }
}*/

const RegisterPage = () => {
    const setToken = useAuthStore(state => state.setToken);
    const setProfile = useAuthStore(state => state.setProfile);
    const Navigate = useNavigate();

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

        if (email == '' || email == null) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Complete el campo email!",
            });
            return;
        }


        if (password == '' || password == null) {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Complete el campo contraseña!",
            });
            return;
        }

        const { user } = await AuthLogin(email, password).then(({ data }) => {
            if (!data.success) {
                MySwal.fire({
                    title: <p>Autenticando invalida.....</p>,
                    timer: 2000,
                    didOpen: () => {
                        MySwal.showLoading()
                    }
                }).then(() => {
                    return null;
                });
            }
            setToken(data.data.token);
            return data.data;
        });


        await profileResquest(user.Id).then(({ data }) => {
            setProfile(data.data);
            MySwal.fire({
                title: <p>Autenticando....</p>,
                timer: 2000,
                didOpen: () => {
                    MySwal.showLoading()
                }
            }).then(() => {
                MySwal.close();
                return Navigate('/home');
            });

        });

    };
    return (
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover"
            style={{ backgroundImage: `url( ${imageUrl} )` }}>
            <div className="grid justify-items-center justify-center bg-black-500">

                <h1 className="text-3xl font-bold text-center text-violet-400 mb-10 shadow-2xl">Formulario de registro</h1>

                <div className="box-border border-violet-800 rounded-xl bg-white h-650 w-650 p-4 border-2 shadow-2xl">

                    <form className="max-w-md mx-auto" onSubmit={HandleSubmit}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Compañia</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="activity" id="activity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                            <label htmlFor="activity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Actividad</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="description" id="description" className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Crear cuenta</button>
                            <Link to="/" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancelar</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}


export default RegisterPage;