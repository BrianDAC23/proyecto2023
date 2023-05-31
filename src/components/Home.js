import { useAuth } from '../context/authContext';
import "../CSS/home.css";
import { Link } from "react-router-dom";

export function Home() {

    const { user, logout, loading } = useAuth()

    const handleLogout = async () => {
        await logout();
    }

    if (loading) return <h1>Cargando</h1>

    return (
        <div>
            <h1>Bienvenido: {user.email}</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <div className="video-background">
                <div className="cont-principal text-center m-0 p-0">
                    <Link to="/post" className="col-md-6 box">
                        <span></span>
                        <div className="content">
                            <h2>Añadir Publicación</h2>
                        </div>
                    </Link>
                    <Link to="/post" className="col-md-6 box2">
                        <span></span>
                        <div className="content">
                            <h2>Ver Publicaciones</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
