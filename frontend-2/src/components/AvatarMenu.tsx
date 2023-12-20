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
import { LogOut, CreditCard, Settings } from "lucide-react"

type AvatarMenuProps = {
    user?: User,
    onLogout: () => void
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ user, onLogout }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <Avatar>
                    <AvatarImage src={user?.picture} />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
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