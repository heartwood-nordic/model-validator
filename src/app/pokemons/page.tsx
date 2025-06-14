
type RealmsIndexResponse = {
    _links: {
        self: {
            href: string;
        };
    };
    realms: {
        key: {
            href: string;
        };
        name: string;
        id: number;
        slug: string;
    }[];
}

export default async function Page() {
  const response = await fetch('https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-classic-eu&locale=en_US', { headers: { 'Authorization': `Bearer ${process.env.BATTLENET_ACESS_TOKEN}` } })
  const data = await response.json() as RealmsIndexResponse;
  const realms = data.realms || [];

 return (
    <ul className="list-disc pl-5">
      {realms.map((realm) => (
        <li key={realm.id}>{realm.name}</li>
      ))}
    </ul>
  )
}