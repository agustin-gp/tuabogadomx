import Nav from './Nav';

export default function Layout({children}) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      <main className="p-6 max-w-4xl mx-auto">{children}</main>
    </div>
  )
}
