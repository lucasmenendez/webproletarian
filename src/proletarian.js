/**
 * Implements required functions to communicate WebWorker with user code.
 * @class
 */
export default class Proletarian {
	/**
	 * Initializes new Proletarian with list of listeners and setting general
	 * message handler.
	 */
	constructor() {
		this.listeners = {}
		self.addEventListener('message', e => this.handler(e));
	}

	/**
	 * Listener for incomming events. Check if event received is 'terminate' 
	 * event to stop the worker or if current Proletarian has associated event 
	 * listener and exec it.
	 * @private
	 * @param  {Object} e Contains event handler alias and data from main thread.
	 */
	handler(e) {
		if (e.data === "terminate")
			return self.close();

		let event = e.data.event;
		let data = e.data.data;
		if (Object.prototype.hasOwnProperty.call(this.listeners, event)) this.listeners[event](data);
	}

	/** 
	 * Register new event listener for current Proletarian
	 * @param  {string} event Event handler alias
	 * @param  {function} func Event listener function
	 */
	listen(event, func) {
		this.listeners[event] = func;
	}

	/**
	 * Emit event to main thread
	 * @param  {string} event Event handler alias to emit
	 * @param  {Object} data Data to emit
	 */
	emit(event, data) {
		self.postMessage({ event, data });
	}
}