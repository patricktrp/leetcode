import { Button } from "@/components/ui/button"
import { List } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@auth0/auth0-react"

type WorkspaceNavbarProps = {
    user?: User
}

const WorkspaceNavbar: React.FC<WorkspaceNavbarProps> = ({ user }) => {
    return (
        <div className="h-16 lg:h-20 min-h-50 flex justify-between items-center px-20">
            <List />
            <Button>Submit</Button>
            <Avatar>
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.email?.slice(0, 1) || 'U'}</AvatarFallback>
            </Avatar>
        </div >
    )
}

export default WorkspaceNavbar