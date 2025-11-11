import Link from 'next/link';
import { useState } from 'react';

export default function Nav(){
  const [lang, setLang] = useState('es');
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-petroleo text-white flex items-center justify-center">TA</div>
        <Link href="/"><a className="font-semibold">TuAbogadoMX</a></Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/login"><a>Login</a></Link>
        <Link href="/dashboard"><a>Dashboard</a></Link>
        <select value={lang} onChange={(e)=>setLang(e.target.value)} className="border rounded p-1">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  )
}
