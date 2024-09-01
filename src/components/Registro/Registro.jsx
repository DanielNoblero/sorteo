import React, { useState } from 'react';
import { registerUser } from '../../service/firebase/firebase'; // Ajusta la ruta según corresponda

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Registrar el usuario en Firebase
            const userId = await registerUser(formData);
            console.log('Usuario registrado con ID:', userId);

            // Añadir un log para depurar
            console.log('Redirigiendo a Mercado Pago');

            // Redirigir a la página de pago de Mercado Pago
            window.location.href = 'https://link.mercadopago.com.uy/sorteoprueba';
        } catch (error) {
            console.error('Error al registrar', error);
        }
    };

    return (
        <div className='container'>
            <div className='frame'>
                <form className='form-signin' onSubmit={handleSubmit}>
                    <label>
                        Nombre de usuario:
                    </label>
                    <input className='form-styling' type="text" name="username" value={formData.username} onChange={handleChange} required />

                    <br />
                    <label>
                        Email:
                    </label>
                    <input className='form-styling' type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <br />
                    <label>
                        Contraseña:
                    </label>
                    <input className='form-styling' type="password" name="password" value={formData.password} onChange={handleChange} required />

                    <br />
                    <label>
                        Teléfono:
                    </label>
                    <input className='form-styling' type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                    <br />
                    <div className='btn-animate'>
                        <button className='btn-signin' type="submit">Registrar y Pagar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
