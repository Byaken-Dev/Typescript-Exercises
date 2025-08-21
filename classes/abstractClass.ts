abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //Some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); // Call the parent class constructor, very similar to Dotnet's way of inheriting properties from a parent class
  }
  getSepia(): void {
    console.log("Sepia filter applied");
  }
}

const createInstagramPhoto = new Instagram("landscape", "black-and-white", 3);
