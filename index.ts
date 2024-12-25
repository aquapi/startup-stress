const cwd = process.cwd();
console.log('Current directory:', cwd);

const SRC = `${import.meta.dir}/src/`;
const OUT = `${import.meta.dir}/dist/`;
const paths = Array.from(new Bun.Glob('*.ts').scanSync(SRC));

const result = await Bun.build({
  entrypoints: Array.from(
    new Bun.Glob('*.ts').scanSync(SRC)
  ).map((path) => SRC + path),
  outdir: OUT,
  minify: true
});

await Bun.$`hyperfine --warmup=10 ${
  result.outputs.map((output) => `bun run ${output.path.replace(cwd, '.')}`)
}`;
