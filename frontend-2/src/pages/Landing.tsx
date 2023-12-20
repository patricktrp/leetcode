import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { Brackets } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Demo from '@/assets/demo.png'

const Landing = () => {
    const navigate = useNavigate()
    const { isAuthenticated, loginWithRedirect } = useAuth0()

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/problems")
        }
    }, [isAuthenticated, navigate])

    const scroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        section && section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className="flex justify-between items-center px-14 h-[6vh]">
                <Brackets className="hover:text-primary cursor-pointer transition-hover" />
                <nav>
                    <ul className="flex space-x-8">
                        <li><a className="hover:text-primary" href="#home" onClick={(e) => scroll(e, "home")}>Home</a></li>
                        <li><a className="hover:text-primary" href="#about" onClick={(e) => scroll(e, "about")}>About</a></li>
                        <li><a className="hover:text-primary" href="#pricing" onClick={(e) => scroll(e, "pricing")}>Pricing</a></li>
                        <li><a className="hover:text-primary" href="#about" onClick={(e) => scroll(e, "about")}>Contact</a></li>
                    </ul>
                </nav>
                <Button onClick={() => loginWithRedirect()}>Sign In</Button>
            </div>

            <section id="hero" className="flex flex-col items-center gap-y-6 h-[94vh] justify-center">
                <h1>Learn to code, <span className="text-primary">level up your skills</span>, and <span className="text-primary">ace your coding interviews!</span></h1>
                <p>
                    Join our community of coders and start improving your algorithmic thinking and problem-solving skills.
                </p>
                <Button size={"lg"} onClick={() => loginWithRedirect()}>Get Started</Button>
                <img className="w-6/12 rounded-lg" src={Demo}></img>
            </section>

            <section id="about" className="flex flex-col items-center gap-y-6 h-[94vh] justify-center">
                About
            </section>
            <section id="pricing" className="flex flex-col items-center gap-y-6 h-[94vh] justify-center">
                Pricing
            </section>
            <section id="about" className="flex flex-col items-center gap-y-6 h-[94vh] justify-center">
                About
            </section>
        </div >
    )
}

export default Landing