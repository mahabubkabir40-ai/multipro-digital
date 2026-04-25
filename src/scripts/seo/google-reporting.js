const { google } = require('googleapis');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const path = require('path');
const fs = require('fs');

const KEY_FILE = path.join(process.cwd(), 'google-indexing-key.json');

async function run() {
  try {
    if (!fs.existsSync(KEY_FILE)) {
      console.error(`❌ Error: ${KEY_FILE} not found!`);
      process.exit(1);
    }

    console.log('--- Google SEO & Traffic Report ---');

    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: [
        'https://www.googleapis.com/auth/analytics.readonly',
        'https://www.googleapis.com/auth/webmasters.readonly',
      ],
    });

    const authClient = await auth.getClient();

    // 1. Search Console
    console.log('\n🔍 Fetching Google Search Console Data...');
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
    const sites = await searchconsole.sites.list();
    
    if (sites.data.siteEntry) {
      const primarySite = sites.data.siteEntry[0].siteUrl;
      console.log(`Site: ${primarySite}`);
      
      const searchData = await searchconsole.searchanalytics.query({
        siteUrl: primarySite,
        requestBody: {
          startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          endDate: new Date().toISOString().split('T')[0],
          dimensions: ['query'],
          dimensionFilterGroups: [{
            filters: [{
              dimension: 'country',
              operator: 'equals',
              expression: 'usa'
            }]
          }],
          rowLimit: 10
        }
      });
      
      console.log('\nTop 10 Search Queries (Last 30 Days):');
      if (searchData.data.rows) {
        console.table(searchData.data.rows.map(r => ({
          Query: r.keys[0],
          Clicks: r.clicks,
          Impressions: r.impressions,
          CTR: (r.ctr * 100).toFixed(2) + '%',
          Pos: r.position.toFixed(1)
        })));
      } else {
        console.log('No data found yet.');
      }
    } else {
      console.log('❌ Site not verified in Search Console.');
    }

    // 2. Google Analytics
    console.log('\n📊 Fetching GA4 Traffic Data...');
    const propertyId = '337863222';
    const analyticsClient = new BetaAnalyticsDataClient({ keyFilename: KEY_FILE });
    
    const [response] = await analyticsClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pageTitle' }],
      metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }],
      dimensionFilter: {
        filter: {
          fieldName: 'countryId',
          stringFilter: {
            value: 'US'
          }
        }
      },
    });

    console.log('\nTop Pages (Last 30 Days):');
    if (response.rows) {
      console.table(response.rows.slice(0, 5).map(row => ({
        Page: row.dimensionValues[0].value,
        Users: row.metricValues[0].value,
        Views: row.metricValues[1].value
      })));
    } else {
      console.log('No analytics data found.');
    }
    
  } catch (error) {
    console.error('\n💥 Error:', error.message);
  }
}

run();
