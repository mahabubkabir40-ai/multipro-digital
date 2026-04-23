
const { google } = require('googleapis');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const path = require('path');

const KEY_FILE = path.join(__dirname, '..', '..', 'multipro-analytics-a701c3f764cd.json');

async function run() {
  try {
    console.log('--- Google API Connection Test ---');

    // 1. Authenticate
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: [
        'https://www.googleapis.com/auth/analytics.readonly',
        'https://www.googleapis.com/auth/webmasters.readonly',
      ],
    });

    const authClient = await auth.getClient();

    // 2. Search Console Sites
    console.log('\nChecking Search Console...');
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });
    const sites = await searchconsole.sites.list();
    
    if (sites.data.siteEntry) {
      console.log('Successfully found Search Console sites:');
      sites.data.siteEntry.forEach(s => console.log(`- ${s.siteUrl}`));
      
      const primarySite = sites.data.siteEntry[0].siteUrl;
      console.log(`\nFetching last 7 days of Search Data for: ${primarySite}`);
      
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
      
      console.log('\nTop 10 USA Search Queries:');
      if (searchData.data.rows && searchData.data.rows.length > 0) {
        console.table(searchData.data.rows.map(r => ({
          Query: r.keys[0],
          Clicks: Math.round(r.clicks),
          Impressions: Math.round(r.impressions),
          CTR: (r.ctr * 100).toFixed(2) + '%',
          Position: r.position.toFixed(1)
        })));
      } else {
        console.log('  No search data found yet. This is normal if the site is very new or the service account was just invited.');
      }
    } else {
      console.log('No Search Console sites found. Error: Ensure you invited ai-analyst@multipro-analytics.iam.gserviceaccount.com as a User in Search Console Settings.');
    }

    // 3. Analytics Properties
    console.log('\nChecking Google Analytics (GA4)...');
    const propertyId = '337863222';
    const analyticsClient = new BetaAnalyticsDataClient({ keyFilename: KEY_FILE });
    
    console.log(`Fetching Analytics Traffic for Property: ${propertyId} (Last 30 Days)...`);
    
    const [response] = await analyticsClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pageTitle' }, { name: 'deviceCategory' }],
      dimensionFilter: {
        filter: {
          fieldName: 'countryId',
          stringFilter: {
            value: 'US'
          }
        }
      },
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'averageSessionDuration' },
        { name: 'screenPageViews' }
      ],
    });

    console.log(`\n--- GA4 USA-Only Traffic Summary (Last 30 Days - ${new Date().toLocaleDateString('en-US')}) ---`);
    let totalUsers = 0;
    let totalViews = 0;
    const deviceStats = {};

    response.rows.forEach(row => {
      totalUsers += parseInt(row.metricValues[0].value);
      totalViews += parseInt(row.metricValues[3].value);
      const device = row.dimensionValues[1].value;
      deviceStats[device] = (deviceStats[device] || 0) + parseInt(row.metricValues[0].value);
    });

    console.log(`Total Active Users: ${totalUsers}`);
    console.log(`Total Page Views: ${totalViews}`);
    console.log('\nDevice Breakdown:');
    Object.entries(deviceStats).forEach(([device, count]) => {
      console.log(`- ${device}: ${Math.round((count/totalUsers)*100)}%`);
    });

    console.log('\nTop 5 Pages by Traffic:');
    const topPages = response.rows
      .slice(0, 5)
      .map(row => ({
        Page: row.dimensionValues[0].value,
        Users: row.metricValues[0].value,
        Views: row.metricValues[3].value
      }));
    console.table(topPages);
    
  } catch (error) {
    console.error('\n[ERROR] Connection failed:');
    console.error(error.message);
    if (error.response && error.response.data) {
      console.error('Details:', JSON.stringify(error.response.data.error || error.response.data, null, 2));
    }
  }
}

run();
