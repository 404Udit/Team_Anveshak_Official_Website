import ClientPage from './ClientPage';

// ✅ Static generation for all competition pages
export async function generateStaticParams() {
  const competitions = ['IRC', 'URC', 'ARC', 'ERC', 'IROC'];
  return competitions.map((competition) => ({
    competitions: competition,
  }));
}

// ✅ Tell Next.js this page should be statically generated
export const dynamic = 'force-static';

export default function Page(props) {
  return <ClientPage {...props} />;
}
