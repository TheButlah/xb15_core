/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class LedMatrix {
  constructor(piVersion: number, cols: number, rows: number, rgbSequence?: string | undefined | null)
  fill(r: number, g: number, b: number): void
  render(): void
}
export class LedStrip {
  static withWs2811Gbr(pin: number, count: number, brightness?: number | undefined | null): LedStrip
  setColor(index: number, r: number, g: number, b: number): void
  fill(r: number, g: number, b: number): void
  turnOff(): void
  setBrightness(brightness: number): void
  render(): void
}