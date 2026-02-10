export function Footer() {
  return (
    <footer className="w-full">
      <hr className="border-border" />
      <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:py-6">
        <div className="text-xs text-muted-foreground sm:text-sm">
          &copy; {new Date().getFullYear()} Sagar Sehwag. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
