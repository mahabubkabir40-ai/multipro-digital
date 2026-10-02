import { NextResponse } from 'next/server';
import { ALL_LOCATION_SLUGS } from '@/config/locations';

export async function GET() {
  const KEY = "78d38865f1e1499da689269788f28712";
  const HOST = "www.multiprodigital.com";
  const baseUrl = `https://${HOST}`;
  
  // 1. Static active routes
  const staticRoutes = [
    `${baseUrl}/`,
    `${baseUrl}/free-audit`,
    `${baseUrl}/locations`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/privacy-policy`,
  ];

  // 2. Dynamic location routes
  const locationRoutes = ALL_LOCATION_SLUGS.map((slug) => `${baseUrl}/locations/${slug}`);

  const urlList = [...staticRoutes, ...locationRoutes];

  // 3. Send the Ping to IndexNow
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${baseUrl}/${KEY}.txt`,
        urlList: urlList,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ 
        message: "Indexing Ping Sent Successfully!", 
        urlsSubmitted: urlList.length,
        urls: urlList 
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ message: "Ping Failed", error: errorText }, { status: 500 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
