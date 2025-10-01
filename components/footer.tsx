export function Footer() {
  return (
    <footer className="bg-background">
      <div className="my-8 flex flex-col justify-center items-center text-sm text-muted-foreground">
        <span>
          &copy; {new Date().getFullYear()} Austin Men&apos;s Soccer
          Association.
        </span>
        <span>
          Created by{' '}
          <a
            href="https://justobii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            justobii.com
          </a>
        </span>
      </div>
    </footer>
  );
}
