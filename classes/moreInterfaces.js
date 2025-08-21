"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//This class implements both TakePhoto and Story interfaces
//Which is why we have to define the minimum properties in TakePhoto
//And the createStory method from Story interface
class YouTube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("Story was created");
    }
}
//# sourceMappingURL=moreInterfaces.js.map