exports.handler = async function (context, event, callback) {

	for (const attribute in event) {
		console.log(`${attribute}:${event[attribute]}`);
	}

	const response = new Twilio.Response();

	response.appendHeader('Access-Control-Allow-Origin', '*');
	response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST');
	response.appendHeader('Content-Type', 'application/json');
	response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

	callback(null, response);
}

