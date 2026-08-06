// Los miembros de `Gradient` se asignan con `Object.defineProperty` en el
// constructor, por lo que TypeScript no puede inferirlos desde el .js.
export declare class Gradient {
	constructor(...args: unknown[])
	initGradient(selector: string): this
	play(): void
	pause(): void
	connect(): Promise<void>
	disconnect(): void
}
