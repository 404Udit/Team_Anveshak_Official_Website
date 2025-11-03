import ClientPage from './ClientPage';

// ✅ Tell Next.js to statically prerender all subteam pages
export async function generateStaticParams() {
  const subTeams = ['MECHANICAL', 'ELEC&SOFT', 'ASTROBIO', 'CPR'];

  return subTeams.map((team) => ({
    Sub_Team: team,
  }));
}

// ✅ Force static generation (required for next export)
export const dynamic = 'force-static';

export default function Page(props) {
  return <ClientPage {...props} />;
}
