import { ParticleEvent, Point, Transformable } from "./interfaces";
import { EventManager, cubicBezier } from "./utils";
export interface ParticleConstructorParam {
  // initial position
  x?: number;
  y?: number;
  // volocity
  dx: number;
  dy: number;
  // rotation:
  deg: number;
  ddeg: number;
}

abstract class Particle extends EventManager<ParticleEvent> implements Transformable {
  protected x: number;
  protected dx: number;
  protected dy: number;
  protected deg: number;
  protected ddeg: number;
  protected y: number;
  protected dpi: number = 1;
  private static SPAWN_FRAMES_COUNT = 60;
  private static CURVE = cubicBezier(0, 0, 1.5, 1);
  private age = 0;
  // public static readonly DPI = window.devicePixelRatio || 1;
  public DPI: number = 1;
  public static readonly STROKE_WIDTH = 1; // 如果仍然需要静态值，可以将它设置为一个默认值
  public static readonly BASE_LENGTH = 30; // 同样地，可以给它一个默认值
  constructor(opts?: Partial<ParticleConstructorParam>) {
    super();
    this.x = opts?.x || 0;
    this.y = opts?.y || 0;
    this.dx = opts?.dx || 0;
    this.dy = opts?.dy || 0;
    this.deg = opts?.deg || 0;
    this.ddeg = opts?.ddeg || 0;
    // this.ctx = ctx;
    this.DPI = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  }

  move(): void {
    // Update the x and y coordinates using the existing instance variables
    // this.x = x;
    // this.y = y;
  }

  rotate(refreshRate: number): void {}

  draw(ctx: CanvasRenderingContext2D, refreshRate = 60) {
    const { deg } = this;
    const { x: centerX, y: centerY } = this.center;
    if (!this.visible(ctx)) {
      this.emit("leave");
    }
    let animationSpeedFactor = this.computeSpeedFactor(refreshRate);
    const totalFramsCount = Particle.SPAWN_FRAMES_COUNT / animationSpeedFactor;
    const progress = this.age / totalFramsCount;
    const scale = this.age < totalFramsCount ? Particle.CURVE(progress) : 1;

    ctx.save();

    ctx.strokeStyle = "#AAA";
    ctx.lineWidth = Particle.STROKE_WIDTH;
    ctx.translate(centerX, centerY);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);

    this.drawParticle(ctx, scale);
    ctx.restore();
    this.age = Math.min(totalFramsCount, this.age + 1);
  }

  private computeSpeedFactor(refreshRate: number) {
    let animationSpeedFactor = 1;
    if (refreshRate >= 100) {
      animationSpeedFactor = 0.5;
    } else if (refreshRate <= 55) {
      animationSpeedFactor = 2;
    }
    return animationSpeedFactor;
  }

  protected abstract drawParticle(ctx: CanvasRenderingContext2D, scale: number): void;
  protected abstract get center(): Point;
  protected abstract get verticies(): Point[];
  protected visible(ctx: CanvasRenderingContext2D): boolean {
    for (const { x, y } of this.verticies) {
      if (x < 0 || y < 0 || x > ctx.canvas.width || y > ctx.canvas.height) {
        return false;
      }
    }
    return true;
  }
  public nextFrame() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.move();
    // this.rotate();
  }
}

export default Particle;
