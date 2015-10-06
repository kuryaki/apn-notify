var apn = require('apn');

exports.notify = function (options, alert, tokens) {
    var apnConnection = new apn.Connection(options);

    var note = new apn.Notification();
    note.alert = alert || "\ue021 Notified \ue021";

    tokens.forEach(function (token) {
        var device = new apn.Device(token);
        apnConnection.pushNotification(note, device);
    });

    apnConnection.on('error', console.error);
    apnConnection.on('socketError', console.error);
    apnConnection.on('transmissionError', console.error);

    apnConnection.on('transmitted', logEvent('transmitted'));

    apnConnection.on('connected', logEvent('connected'));
    apnConnection.on('disconnected', logEvent('disconnected'));

    apnConnection.on('completed', function (){
        process.nextTick(function() {
            process.exit(0);
        });
    });

    function logEvent (event) {
        return function () {
            if(process.env.DEBUG==='notify'){
                console.log(event);
                console.dir(arguments);
            }
        }
    }
}


