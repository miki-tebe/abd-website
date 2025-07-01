import * as React from "react";

import { Icons } from "@/assets";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SheetMobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Icons.hamburger className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <a href="/" className="m-5 flex items-center">
          <Icons.logo className="mr-2 size-8" />
          <span className="font-bold">ABD</span>
        </a>
        <ScrollArea className="h-[calc(100vh-8rem)] pb-10 pl-10">
          <div className="mt-2 mb-20">
            <div className="flex flex-col space-y-3">
              <a href="/#" className="text-muted-foreground">
                Home
              </a>
              <a href="/#about" className="text-muted-foreground">
                About
              </a>
              <a href="/#news" className="text-muted-foreground">
                News & Event
              </a>
              <a href="/#testimonial" className="text-muted-foreground">
                Testimonial
              </a>
              <a href="/#contact" className="text-muted-foreground">
                Contact
              </a>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
