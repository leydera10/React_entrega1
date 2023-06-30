import CartWidGet from "./CartWidget/carWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>CC Refrigeraciones</h3>
            <div>
                <button>Aires Acondicionados</button>
                <button>Repouestos</button>
                <button>Condensadores</button>
            </div>   
            <CartWidGet/>      
        </nav>
    )
}

export default NavBar 