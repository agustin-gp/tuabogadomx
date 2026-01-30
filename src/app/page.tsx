export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-5xl font-extrabold text-[#0A2540] mb-4">
        TuAbogadoMX
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Conectamos personas con abogados confiables en México.
      </p>

      <button className="bg-[#C9A227] text-white px-6 py-3 rounded-xl text-lg hover:opacity-90 transition">
        Encuentra un abogado
      </button>
    </main>
  );
}
