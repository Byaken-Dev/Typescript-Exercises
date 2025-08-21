"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //Some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // Call the parent class constructor, very similar to Dotnet's way of inheriting properties from a parent class
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia filter applied");
    }
}
const createInstagramPhoto = new Instagram("landscape", "black-and-white", 3);
//# sourceMappingURL=abstractClass.js.map