import { useState } from 'react';

function Contacto() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="firstName" name="firstName" value={formState.firstName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="lastName" name="lastName" value={formState.lastName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={formState.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Mensaje</label>
        <textarea className="form-control" id="message" name="message" rows="5" value={formState.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Contacto;
