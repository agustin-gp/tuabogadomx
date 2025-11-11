import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';

export default function Dashboard(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return ()=>unsub();
  }, []);

  async function handlePayment(){
    try {
      const resp = await axios.post('/api/mercadopago', {
        title: 'Suscripción TuAbogadoMX',
        price: 49.99
      });
      // redirect to checkout init point (backend returns init_point)
      window.location.href = resp.data.init_point;
    } catch(err){
      alert('Error al crear preferencia: ' + err.message);
    }
  }

  if(loading) return <Layout><p>Cargando...</p></Layout>;
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl">Panel</h2>
        {user ? <div>
          <span className="mr-3">{user.email}</span>
          <button onClick={()=>signOut(auth)} className="px-3 py-1 border rounded">Salir</button>
        </div> : <div>No estás conectado</div>}
      </div>

      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Suscripción</h3>
          <p>Precio de ejemplo: $49.99</p>
          <button onClick={handlePayment} className="mt-2 px-4 py-2 border rounded">Pagar con MercadoPago</button>
        </div>
      </div>
    </Layout>
  )
}
