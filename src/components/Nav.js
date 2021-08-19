import user from '../img/user.svg'
import search from '../img/search.svg';
import { useState } from 'react';


const Nav = () => {

    const [openNav, setOpenNav] = useState(false);
    const [searchOpen, setSearchBtn] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const showNav = (e)=>{
        setOpenNav((openNav)=>!openNav)
    }
    const searchBtn = (e)=>{
        e.target.previousElementSibling.focus()
        setSearchBtn(searchOpen =>!searchOpen);
    }

    const searchForm=(e)=>{
        setSearchValue(e.target.value)
    }

    const controlSearch = (e)=>{
        e.preventDefault();
        setSearchBtn(searchOpen =>!searchOpen);
        setSearchValue("")
    }

    return (
        <div>
            <div className="fixedTop">
                <div onClick={showNav}  className={`burger ${openNav ? "showNav" : ""}`}>
                    <div className="menu"></div>
                </div>
                <div className={`inputwrapper ${searchOpen ? "showSearchBar" : ""}`}>
                    <form onSubmit={controlSearch} >
                        <input type="text" value={searchValue} onChange={searchForm} />
                        <img className="search" onClick={searchBtn} src={search} alt="search" />
                    </form>
                    <div className="seaching" style= {{display:`${!searchOpen?"none": "block"}`}}>{searchValue}</div>
                </div>

                <h2 className="pageTitle">ALCATRAZ MILITARY CAMP</h2>
                <img src={user} className="user" alt="search" />
            </div>
            <div className={`nav ${openNav ? "toggleOpen": ""}`}>
                <ul className="navLink">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#chat">Chat with us</a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Nav
