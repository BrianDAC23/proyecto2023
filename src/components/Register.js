import { useState } from "react";
import { useAuth } from '../context/authContext'
import { useNavigate } from "react-router-dom";
import '../CSS/login.css';


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
        <div className="login-container-wrapper">
            <div className="login-container">
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <h1>Registrarse</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Ingrese su Email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" onChange={handleChange} placeholder="**" />
                    </div>
                    <button className="btn btn-primary mt-3">Registrate</button>
                    <p className="register-link mt-3">
                        ¿Ya tienes cuenta? <a href="login">Inicia sesiòn</a>
                    </p>
                </form>
            </div>

        </div>
    );
}

export default Register;