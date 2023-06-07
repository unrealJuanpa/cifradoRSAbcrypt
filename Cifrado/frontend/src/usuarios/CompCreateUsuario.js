import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Alert } from "bootstrap";
const bcrypt = require('bcryptjs');

const URI = 'http://127.0.0.1:5000/usuario'

const CompCreateUsuarioForm = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const crear = async(event) => {
        event.preventDefault(); 

        await axios.post(URI, {user: user, password: password})
            .then(response => {
                alert(response.data.message)  
                navigate('/')
            })
            .catch(error => {
                alert(error)
            });
    }
 
    return (
        <div className='container text-left'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="card-header">
                <h5>Crear Usuario</h5>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form>
                            <div class="form-group">
                                <label>Nombre de usuario</label>
                                <input minLength={4} onChange={(e) => setUser(e.target.value)} type="text" className="form-control" placeholder="Ingrese su nombre de usuario"></input>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label>Contraseña</label>
                                <input minLength={4} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Ingrese su contraseña"></input>
                            </div>
                            <br></br> 
                            <br></br>
                            <Link to={"/"} style={{marginRight: "10px"}} className="btn btn-danger" >Cancelar</Link> 
                            <button onClick={crear} className="btn btn-success">Crear cuenta</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateUsuarioForm