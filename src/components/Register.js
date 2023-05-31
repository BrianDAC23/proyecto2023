import { useState } from "react";
import { useAuth } from '../context/authContext'
import { useNavigate } from "react-router-dom";

export function Register() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password);
            navigate('/')
        } catch (error) {
            setError(error.message)
        }

    }
    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Ingrese su Email" onChange={handleChange} />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" onChange={handleChange} placeholder="******"/>

                <button>Registro</button>
            </form>
        </div>
    );
}

export default Register;