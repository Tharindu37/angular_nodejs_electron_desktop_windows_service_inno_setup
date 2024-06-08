const Service = require('node-windows').Service
const path = require('path');

const svc =  new Service({
    name: "node_express_service",
    description: "Test Server",
    script: path.join(__dirname, 'index.js'),
})

svc.on('install', function(){
    svc.start();
    console.log('Service installed and started successfully.');
});

svc.on('alreadyinstalled', function(){
    console.log('This service is already installed.');
});

svc.on('invalidinstallation', function(){
    console.log('Invalid installation detected.');
});

svc.on('uninstall', function(){
    console.log('Service uninstalled successfully.');
    console.log('The service exists: ', svc.exists);
});

svc.on('start', function(){
    console.log('Service started successfully.');
});

svc.on('stop', function(){
    console.log('Service stopped successfully.');
});

svc.install();