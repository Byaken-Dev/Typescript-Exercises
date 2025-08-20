const enum SeatChoice { //Add const so that Typescript doesn't generate extra code
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
}

const seat = SeatChoice.AISLE; //We reduce the size of the code by using enums
//And reduce the chance of errors by using enums
