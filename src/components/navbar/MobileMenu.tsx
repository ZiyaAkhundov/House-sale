import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MenuItem from "./MenuItem";


function UserMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline"><AiOutlineMenu /></Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Ev 10 House
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <MenuItem label="Seçilmişlər" onClick={() => { }} />
            <MenuItem label="Elan Yerləşdir" onClick={() => { }} />
            <MenuItem label="Log in" onClick={() => { }} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default UserMenu; 