const Service = require('node-windows').Service
const path = require('path');

const svc =  new Service({
    name: "node_express_service",
    description: "Test Server",
    script: path.join(__dirname, 'index.js'),
})

svc.on('uninstall', function(){
    console.log('Service uninstalled successfully.');
    console.log('The service exists: ', svc.exists);
});

svc.uninstall();