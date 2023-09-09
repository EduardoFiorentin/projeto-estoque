import './index.css'

export const Header = ({menu, setMenu}) => { 
    return (
        <header className='header'>
            <p className="header__name">Almox</p>
            {/* <div>
                <input type="text" name="" id="" />
                <button>Limpar</button>
            </div> */}
            <nav className="header__buttons">
                <button className="header__button" onClick={() => setMenu(!menu)}>{menu ? "Fechar menu" : "Abrir menu"}</button>
            </nav>
        </header>
    )
}