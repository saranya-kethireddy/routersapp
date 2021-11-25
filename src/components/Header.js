const Header = () => {
    return (
        <>
            <h1>React Router Tutorial</h1>
            <ul className='nav'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='profile'>Profile</a>
                </li>
            </ul>
        </>
    )
}

export default Header