import ClientPage from './ClientPage';

export const dynamic = 'force-static'; // ✅ Ensures no dynamic fetch breaks prerender

export async function generateStaticParams() {
  const rovers = [
    'ISAAC',
    'HEISENBERG',
    'HUBBLE',
    'GALILEO',
    'FORESIGHT',
    'DARKNIGHT',
    'CAESAR',
    'BADGER',
    'AURORA',
  ];

  return rovers.map((rover) => ({
    Rover: rover,
  }));
}

export default function Page(props) {
  return <ClientPage {...props} />;
}
