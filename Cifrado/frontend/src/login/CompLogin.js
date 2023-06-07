import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Alert } from "bootstrap";
const bcrypt = require('bcryptjs');



const URI = 'http://127.0.0.1:5000/usuario'

const CompLoginForm = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
      
    const authenticate = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axios.get(URI + '/' + user + '/' + password);
          alert(response.data.message);
          if (!response.data.message.includes('ERROR')) {
            navigate('/dashboard');
          }
        } catch (error) {
          alert(error);
        }
      };
 
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
                <h5>LOG-IN</h5>
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
                            <Link to={"/create"} style={{marginRight: "10px"}} className="btn btn-success" >Crear Cuenta</Link> 
                            <button onClick={authenticate} className="btn btn-primary">Autenticarse</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompLoginForm