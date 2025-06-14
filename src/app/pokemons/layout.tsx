export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-gray-50">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1>About Section Layout</h1>
        </header>
        <div className="flex min-h-[90vh]">
          <aside className="w-52 bg-blue-100 p-4">
            <nav>
              <ul className="list-none p-0">
                <li>
                  <a href="/about" className="text-blue-600 no-underline">About Home</a>
                </li>
                <li>
                  <a href="/" className="text-blue-600 no-underline">Go to Home</a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}