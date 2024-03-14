import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {
    return (
        <div className='header'>
            <img src={reactLogo}></img>
            <img src={viteLogo}></img>
        </div>
    )
}

export default Header