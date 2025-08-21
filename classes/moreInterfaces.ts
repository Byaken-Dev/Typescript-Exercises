interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

//This class implements both TakePhoto and Story interfaces
//Which is why we have to define the minimum properties in TakePhoto
//And the createStory method from Story interface
class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}
