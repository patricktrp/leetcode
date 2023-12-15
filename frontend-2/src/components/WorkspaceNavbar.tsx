import { Button } from "@/components/ui/button"
import { List } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@auth0/auth0-react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
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
import { Settings } from "lucide-react"

type WorkspaceNavbarProps = {
    user?: User
}

const WorkspaceNavbar: React.FC<WorkspaceNavbarProps> = ({ user }) => {
    return (
        <div className="flex justify-between items-center px-10 h-[6vh]">
            <div>
                <List />
            </div>
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
                                        <SelectItem value="light">16px</SelectItem>
                                        <SelectItem value="dark">18px</SelectItem>
                                        <SelectItem value="system">20px</SelectItem>
                                    </SelectContent>
                                </Select>
                                {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                {/* <Input id="username" value="@peduarte" className="col-span-3" /> */}
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <Avatar>
                    <AvatarImage src={user?.picture} />
                    <AvatarFallback>{user?.email?.slice(0, 1) || 'U'}</AvatarFallback>
                </Avatar>
            </div>
        </div >
    )
}

export default WorkspaceNavbar