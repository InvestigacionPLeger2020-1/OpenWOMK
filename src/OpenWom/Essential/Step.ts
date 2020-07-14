export interface Step {
  doStep(period): void;
  reinit(): void;
}
