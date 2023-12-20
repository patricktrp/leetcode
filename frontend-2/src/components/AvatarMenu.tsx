import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { User } from '@auth0/auth0-react'
import { LogOut, CreditCard, Settings, FileBarChart2, Database } from "lucide-react"
import { useNavigate } from "react-router-dom"

type AvatarMenuProps = {
    user?: User,
    onLogout: () => void
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ user, onLogout }) => {
    const navigate = useNavigate()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <Avatar>
                    <AvatarImage src={user?.picture} />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 mt-2">
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <FileBarChart2 className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <Database className="mr-2 h-4 w-4" />
                    <span>Workspace Data</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Manage Subscription</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AvatarMenu