import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const KEY = "78d38865f1e1499da689269788f28712";
  const HOST = "www.multiprodigital.com";
  const baseUrl = `https://${HOST}`;
  
  // 1. Start with static routes
  const urlList = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/service-areas`,
    `${baseUrl}/movers-marketing-tips`,
    `${baseUrl}/privacy-policy`,
  ];

  // 2. Dynamically add blog routes
  try {
    const blogDir = path.join(process.cwd(), 'src/app/movers-marketing-tips');
    if (fs.existsSync(blogDir)) {
      const folders = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      folders.forEach(slug => {
        urlList.push(`${baseUrl}/movers-marketing-tips/${slug}`);
      });
    }
  } catch (e) {
    console.error("Error adding blog routes to IndexNow:", e);
  }

  // 3. Dynamically add service area routes
  try {
    const locationDir = path.join(process.cwd(), 'src/app/service-areas');
    if (fs.existsSync(locationDir)) {
      const folders = fs.readdirSync(locationDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      folders.forEach(slug => {
        urlList.push(`${baseUrl}/service-areas/${slug}`);
      });
    }
  } catch (e) {
    console.error("Error adding location routes to IndexNow:", e);
  }

  // 4. Send the Ping to IndexNow
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${baseUrl}/${KEY}.txt`,
        urlList: urlList
      })
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
