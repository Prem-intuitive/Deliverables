export class Timer {
    constructor(callback) {
        this.seconds = 0;
        this.interval = null;
        this.callback = callback;
    }

    start() {
        this.interval = setInterval(() => {
            this.seconds++;
            
            if (this.callback) {
                this.callback(this.seconds);
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    reset() {
        this.stop();
        this.seconds = 0;
    }

    getTime() {
        return this.seconds;
    }
}