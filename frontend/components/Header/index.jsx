import './index.css'

export const Header = ({menu, setMenu, filter, setFilter}) => { 
    return (
        <header className='header'>
            <p className="header__name">Pel Eqp Ass</p>
            <div className='header__search'>
                <input type="text" name="" id="" className='header__search-input' value={filter} 
                    onChange={event => setFilter(event.target.value)}/>
                {/* <button className='header__search-button' onClick={() => setFilter("")}>Limpar</button> */}
                <img src="../../assets/img/trash-can.png" 
                alt="" 
                onClick={() => setFilter("")}
                className='header__search-button'
                />
            </div>
            <nav className="header__buttons">
                <button className="header__button" onClick={() => setMenu(!menu)}><img src='../../assets/img/add.png' className='header__button-icon'/></button>
            </nav>
        </header>
    )
}