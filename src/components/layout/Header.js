import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <img src="images/logo_arte.png" width="100" alt='arte'/>
                <h1>Atelier</h1>
            </div>
        </header>

    );
}

export default Header;