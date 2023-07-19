
import "./styles.css";
import CartWidGet from "./CartWidget/carWidget"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to= '/' >
                <h3>CC Refrigeraciones</h3>
            </Link>
            <div className="Categories">
                <NavLink to = {`/category/Aires Acondicionados`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Aires Acondicionados</NavLink>
                <NavLink to = {`/category/Generadores`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Generadores</NavLink>
                <NavLink to = {`/category/Repuestos`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Repuestos</NavLink>
            </div>   
            <CartWidGet/>      
        </nav>
    )
}

export default NavBar 