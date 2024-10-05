// import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [inputs, setInputs] = useState({
        userName: "",
        password: "",
    });
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    };
    return (
        <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
            <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='p-2 label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text'
                            placeholder='Enter username'
                            value={inputs.userName}
                            onChange={(e) => { setInputs({ ...inputs, userName: e.target.value }) }}
                            className='w-full h-10 input input-bordered' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            value={inputs.password}
                            onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }}
                            type='password'
                            placeholder='Enter Password'
                            className='w-full h-10 input input-bordered'
                        />
                    </div>
                    <Link to={'/signup'} className='inline-block mt-3 text-sm text-gray-50 hover:underline hover:text-blue-700'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='mt-2 border btn btn-block btn-sm border-slate-700' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;