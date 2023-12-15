import { Button } from "@/components/ui/button"
import { List } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@auth0/auth0-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Settings } from "lucide-react"
import { NavLink } from "react-router-dom"
import AvatarMenu from "@/components/AvatarMenu"

type WorkspaceNavbarProps = {
    user?: User,
    onLogout: () => void
}

const WorkspaceNavbar: React.FC<WorkspaceNavbarProps> = ({ user, onLogout }) => {
    return (
        <div className="flex justify-between items-center px-14 h-[6vh]">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <NavLink to="/problems">
                            <List className="hover:text-primary transition-all" />
                        </NavLink></TooltipTrigger>
                    <TooltipContent>
                        <p>Problem List</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className="flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
                <Button>Submit</Button>
            </div>
            <div className="flex space-x-3 items-center">
                <Sheet>
                    <SheetTrigger asChild><Settings className="cursor-pointer" /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Workspace Settings</SheetTitle>
                            {/* <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription> */}
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Font Size
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="16">16px</SelectItem>
                                        <SelectItem value="18">18px</SelectItem>
                                        <SelectItem value="20">20px</SelectItem>
                                    </SelectContent>
                                </Select>
                                {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <AvatarMenu user={user} onLogout={onLogout} />
            </div>
        </div >
    )
}

export default WorkspaceNavbar