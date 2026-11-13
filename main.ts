// Coolest-art entry ("Fishing the Moon"): the artwork is entry.png beside this
// file, and this program copies it byte for byte to /output/entry.png.
// Node 22, standard library only. Deterministic: same input, same output bytes.
// The copy is exact, so running the program twice writes identical bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
