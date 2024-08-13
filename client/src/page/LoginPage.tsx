import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../state/AuthState";
import { AuthLogin, profileResquest } from "../api/IAuthEndPoint";
import wAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(wAlert);

const LoginPage = () => {
    const setToken = useAuthStore(state => state.setToken);
    const setProfile = useAuthStore(state => state.setProfile);
    const Navigate = useNavigate();
    
    



    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
      const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
  
      if(email == '' || email == null)
        {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Complete el campo email!",
          });
          return;
        }


        if(password == '' || password == null)
        {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Complete el campo contraseña!",
          });
          return;
        }
  
      const { user } = await AuthLogin(email, password).then(({data}) => {
        if(!data.success){
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
  
     
      await profileResquest(user.Id).then(({data}) => {
        setProfile(data.data);
        MySwal.fire({
          title: <p>Hello World</p>,
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
        <div className="grid justify-items-center justify-center mt-64 bg-black-500">

            <div className="box-border border-violet-800 rounded-xl bg-white h-650 w-650 p-4 border-2 shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-violet-400">Login</h1>
                <p className="text-center text-violet-400">Bienvenido a la app</p>

                <form onSubmit={HandleSubmit} className="flex flex-col gap-2 mt-4">
                    <input type="email" placeholder="email" className="border-2 border-violet-400 rounded-xl p-2 hover:border-violet-600 focus:border-violet-600 active:border-violet-600"/>

                    <input type="password" placeholder="constraseña" className="border-2 border-violet-400 rounded-xl p-2 hover:border-violet-600 focus:border-violet-600 active:border-violet-600" />

                    <button type="submit" className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded">Iniciar sesion</button>
                </form>

            </div>

        </div>
    )
}

export default LoginPage;
