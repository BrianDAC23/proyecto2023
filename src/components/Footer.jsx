import React from 'react';
import "../CSS/footer.css";
import '../CSS/footer.css'


class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            style: []
        }
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.getWidthListaProductos)
    }

    render() { 
        return (
            <>
            
    <footer className="footer">
      <div className="container">
        <div className="row">          
          <div className="col-lg-3 col-md-3 col-12">
            <a className="col-sm-12" href='/'>
                <img src={''} className="imgf" alt="logo" style={{height: '80px'}} />
            </a>
          </div> 
          <div className="col-lg-3 col-md-3 col-12">
            <h5 className="text-title mb-3 ">Información</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Acerca de nosotros</a></li>
              <li><a href="/" className="text-white">Servicios</a></li>
              <li><a href="/" className="text-white">Productos</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-12 ">
            <h5 className="text-title mb-3">Redes sociales</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-facebook"></i><a href="" className="text-white px-2"> Facebook</a></li>
              <li><i className="bi bi-instagram"></i><a href="" className="text-white px-2"> Instagram</a></li>
              <li><i className="bi bi-whatsapp"></i><a href="" className="text-white px-2">Correo electronico</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-12 ">
            <h5 style={{textAlign: "center"}} className="text-logo mb-3"> "Somos el lugar que todo foraneo deberia conocer"</h5>
          
          </div>
          
          

        </div>
        
      </div>
    </footer>
            </>
        );
    }
}
 
export default Footer;