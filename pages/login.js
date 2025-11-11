import { useState } from 'react';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Login(){
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mode, setMode] = useState('login');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  async function handleSubmit(e){
    e.preventDefault();
    setMsg('');
    try {
      if(mode === 'register'){
        await createUserWithEmailAndPassword(auth, email, pass);
      } else {
        await signInWithEmailAndPassword(auth, email, pass);
      }
      router.push('/dashboard');
    } catch(err){
      setMsg(err.message);
    }
  }

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">{mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Correo" className="w-full p-2 border rounded" />
        <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Contraseña" type="password" className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 border rounded">{mode === 'login' ? 'Entrar' : 'Crear cuenta'}</button>
          <button type="button" onClick={()=>setMode(mode === 'login' ? 'register' : 'login')} className="px-4 py-2 border rounded">{mode === 'login' ? 'Ir a registro' : 'Ir a login'}</button>
        </div>
        {msg && <p className="text-red-600">{msg}</p>}
      </form>
    </Layout>
  )
}
