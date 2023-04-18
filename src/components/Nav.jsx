const Nav = () => {
    return(
        <nav className="flex items-center justify-between  border-b-blue-800 border-solid">
            <img src="https://foodfire-chapter09.netlify.app/Food%20Fire%20Logo.feaf9db9.png" 
            className="w-[90px]" alt="Logo" />
            <ul className="flex gap-4 mr-6 font-bold">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Logout</li>
            </ul>
        </nav>
    )
}

export default Nav;