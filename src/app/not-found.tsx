import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-scene">
      <span>404</span>
      <h1>Esta ruta no existe.</h1>
      <p>La página solicitada no está dentro del portafolio.</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
