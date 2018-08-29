import Proletarian from './proletarian'

/**
 * Allows to developers to init inline function in other thread using WebWorkers
 * @class
 */
export class WebProletarian {
	/**
	 * Creates new WebProletarian, checking if worker provided is a function
	 * and preparing WebWorker to communicating with the user.
	 * @param  {function} worker Function to exec into the WebWorker
	 */
	constructor(worker) {
		if (!Worker) 
			throw new Error("WebProletarian Error: Current browser version does not support WebWorkers :(");

		if ({}.toString.call(worker) !== '[object Function]')
			throw new Error("WebProletarian Error: Worker function provided is not a function.");

		let raw = this.injectProletarian(worker);
		let blob = new Blob([ raw ], { type: "text/javascript" });
		let url = window.URL.createObjectURL(blob);

		this.listeners = {}

		this.worker = new Worker(url);
		this.worker.addEventListener('message', e => this.handler(e));
	}

	/**
	 * Injects required code from Proletarian class into document body.
	 * @private
	 * @param  {string} raw The user code
	 */
	injectProletarian(raw) {
		return [
			`${ Proletarian };`, 
			'const proletarian = new Proletarian();', 
			`(${ raw })();`
		].join("\n\n");
	}

	/**
	 * Checks if current Proletarian has associated event listener to the incoming 
	 * event and exec it with data received as argument. 
	 * @private
	 * @param  {Object} e Contains event handler alias and data from workerk. 
	 */
	handler(e) {
		let event = e.data.event;
		let data = e.data.data;
		if (Object.prototype.hasOwnProperty.call(this.listeners, event)) this.listeners[event](data);
	}
	
	/** 
	 * Register new event listener for current WebProletarian
	 * @param  {string} event Event handler alias
	 * @param  {function} func Event listener function
	 */
	listen(event, func) {
		this.listeners[event] = func;
	}
	
	/**
	 * Emit event to worker
	 * @param  {string} event Event handler alias to emit
	 * @param  {Object} data Data to emit
	 */
	emit(event, data) {
		this.worker.postMessage({ event, data });
	}
	
	/**
	 * Stop WebWorker associated to current WebProletarian
	 */
	stop() {
		this.worker.postMessage("terminate");
	}
}