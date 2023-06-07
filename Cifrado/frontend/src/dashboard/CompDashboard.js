import { Link, useNavigate } from "react-router-dom";
const bcrypt = require('bcryptjs');

const CompDashboardMain = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>
                <br></br>
                ¡Bienvenido!
            </h1>

            <br></br>
            <img src = "https://www.autoaccessoriesgarage.com/img/vehicles/big/Ford-Festiva.png"></img>
            <br></br>
            <br></br>
            <Link to={"/"} className="btn btn-danger" >Log-out</Link> 
        </div>
    )
}

export default CompDashboardMain