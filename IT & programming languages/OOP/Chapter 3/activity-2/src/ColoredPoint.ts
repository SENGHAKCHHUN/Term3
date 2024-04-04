import { Point } from "./Point";
export class ColoredPoint extends Point {
  private color: string;
  constructor(x: number, y: number, color: string) {
    super(x, y);
    this.color = color;
  }
  /**
   * @returns information about the colored point
   */
  getInfo(): string {
    // TODO : must get the info from point and add the color
    return  super.getInfo() + " and color is " + this.color;
  }
}