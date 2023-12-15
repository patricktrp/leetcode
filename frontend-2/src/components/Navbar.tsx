import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { Brackets } from "lucide-react"
import AvatarMenu from "@/components/AvatarMenu"

const NAV_LINKS = [
    {
        "text": "Home",
        "path": "/",
        "authenticated": false
    },
    {
        "text": "Problems",
        "path": "/problems",
        "authenticated": false
    },
    {
        "text": "Dashboard",
        "path": "/dashboard",
        "authenticated": true
    }
]

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0()
    return (
        <div className="flex justify-between items-center px-14 h-[6vh]">
            <Brackets className="hover:text-primary cursor-pointer transition-hover" />
            <nav>
                <ul className="flex space-x-3">
                    {NAV_LINKS.map(link => (
                        (isAuthenticated || !link.authenticated) &&
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-primary' : "hover:text-primary transition-all"} key={link.path} to={link.path}>{link.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {isAuthenticated ? <AvatarMenu user={user} onLogout={logout} /> : <Button onClick={() => loginWithRedirect()}>Get Started</Button>}
        </div>
    )
}

export default Navbar