const labourUnion = new WebProletarian(function() {
	proletarian.read("event2", console.log);

	setInterval(() => {
		proletarian.fire("event1", "thread: ping");
	}, 1000);
});

labourUnion.read("event1", data => {
	console.log(data);
	labourUnion.fire("event2", "main: pong");
});