export default {
	async tail(events) {
		for (const event of events) {
			console.log(JSON.stringify(event));
		}
	}
} satisfies ExportedHandler<Env>;
