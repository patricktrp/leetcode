import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { Brackets } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    const { isAuthenticated, loginWithRedirect, user } = useAuth0()
    return (
        <div className="flex justify-between items-center px-10 h-[6vh]">
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
            {isAuthenticated ? <Avatar>
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.email?.slice(0, 1) || 'U'}</AvatarFallback>
            </Avatar> : <Button onClick={() => loginWithRedirect()}>Get Started</Button>}
        </div>
    )
}

export default Navbar