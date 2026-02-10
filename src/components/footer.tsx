export function Footer() {
  return (
    <footer className="w-full">
      <hr className="border-border" />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row py-6">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sagar Sehwag. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
