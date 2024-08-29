import '../styles/components/pages/ContactoPage.css'
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }
    
    return (

        <main className="holder contacto">
            <div>
                <h2>Contacto rápido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                       <label>Nombre</label>
                       <input type="text" name='nombre' value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                       <label>Email</label>
                       <input type="text" name='email' value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                       <label>Telefono</label>
                       <input type="text" name='telefono' value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                       <label for="mensaje">Mensaje</label>
                       <textarea name='comentario' value={formData.comentario} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"></input></p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
            <div className="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 4637224</li>
                    <li>Email: contacto@arte.com.ar</li>
                    <li>Facebook:</li>
                    <li>Instagram:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;