import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	bundle: false,
	dts: false,
	entry: ['src/**/*.routes', '!src/**/*.d.routes'],
	format: ['cjs'],
	minify: false,
	tsconfig: 'tsconfig.json',
	target: 'es2020',
	splitting: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	shims: false,
	keepNames: true
});
