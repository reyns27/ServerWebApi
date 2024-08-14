import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/AuthState";
import { AuthLogin, profileResquest } from "../api/IAuthEndPoint";
import wAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const imageUrl = 'https://static.vecteezy.com/system/resources/previews/001/594/577/non_2x/blue-purple-gradient-geometric-shape-free-vector.jpg';

const MySwal = withReactContent(wAlert);

const LoginPage = () => {
  const setToken = useAuthStore(state => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);
  const Navigate = useNavigate();





  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.elements);
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
            // `MySwal` is a subclass of `Swal` with all the same instance & static methods
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
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
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

        <div className="box-border border-violet-800 rounded-xl bg-white h-650 w-650 p-4 border-2 shadow-2xl ">
          <h1 className="text-3xl font-bold text-center text-violet-600">Login</h1>
          <p className="text-center font-bold text-violet-600">Bienvenido a la app</p>

          <form onSubmit={HandleSubmit} className="flex flex-col gap-2 mt-4 max-w-md w-96" >
            <div className="relative z-0 w-full mb-5 group">
              <input type="email" name="email" id="email" className="block font-semibold py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="password" id="password" className="block font-semibold py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
            </div>

            <button type="submit" className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded">Iniciar sesion</button>
          </form>

          <Link className="text-violet-400 text-center mt-4" to="/register">Registrar</Link>
        </div>

      </div>
    </div>

  )
}

export default LoginPage;
