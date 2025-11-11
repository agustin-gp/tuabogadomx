import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home(){
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">TuAbogadoMX</h1>
      <p className="mb-4">Conecta abogados y clientes — versión inicial.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/login"><a className="p-4 border rounded">Iniciar sesión / Registrarse</a></Link>
        <Link href="/dashboard"><a className="p-4 border rounded">Ir al Panel</a></Link>
      </div>
    </Layout>
  )
}
