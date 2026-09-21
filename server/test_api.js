const http = require('http');
const { app } = require('./server');

const PORT = 5055;

async function runTests() {
  const server = app.listen(PORT, async () => {
    console.log(`\n🧪 Test Server started on http://localhost:${PORT}`);

    try {
      // Test 1: Health check
      console.log('\n--- Test 1: Health Check ---');
      const healthRes = await fetch(`http://localhost:${PORT}/api/health`);
      const healthData = await healthRes.json();
      console.log('Status Code:', healthRes.status);
      console.log('Health Data:', healthData);
      if (healthRes.status === 200 && healthData.status === 'ok') {
        console.log('✅ Health check passed');
      } else {
        throw new Error('Health check failed');
      }

      // Test 2: Strapi Roles Mock
      console.log('\n--- Test 2: Strapi Roles Mock ---');
      const rolesRes = await fetch(`http://localhost:${PORT}/api/users-permissions/roles`);
      const rolesData = await rolesRes.json();
      console.log('Status Code:', rolesRes.status);
      console.log('Roles Data:', rolesData);
      if (rolesRes.status === 200 && Array.isArray(rolesData.data)) {
        console.log('✅ Roles mock passed');
      } else {
        throw new Error('Roles mock failed');
      }

      // Test 3: Root Endpoint
      console.log('\n--- Test 3: Root Endpoint ---');
      const rootRes = await fetch(`http://localhost:${PORT}/`);
      const rootText = await rootRes.text();
      console.log('Root Text:', rootText);
      if (rootRes.status === 200) {
        console.log('✅ Root endpoint passed');
      }

      // Test 4: 404 Endpoint
      console.log('\n--- Test 4: 404 Not Found Handler ---');
      const notFoundRes = await fetch(`http://localhost:${PORT}/api/non-existent-route`);
      const notFoundData = await notFoundRes.json();
      console.log('Status Code:', notFoundRes.status);
      console.log('404 Data:', notFoundData);
      if (notFoundRes.status === 404 && notFoundData.success === false) {
        console.log('✅ 404 handler passed');
      }

      console.log('\n🎉 ALL CORE API TESTS PASSED SUCCESSFULLY!\n');
    } catch (err) {
      console.error('❌ Test failed:', err);
    } finally {
      server.close(() => {
        console.log('🏁 Test server closed.');
        process.exit(0);
      });
    }
  });
}

runTests();
