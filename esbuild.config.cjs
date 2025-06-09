const esbuild = require('esbuild');
const path = require('path');
const { execSync } = require('child_process');

const repo_root = execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' }).trim();
console.log(repo_root);

// ----- drop artifactz folder and recreate it
const artifactz_path = path.join(repo_root, 'artifactz');
execSync(`rm -rf ${artifactz_path}`, { stdio: 'inherit' });
// execSync('sleep 1');
execSync(`mkdir -p ${artifactz_path}/static`, { stdio: 'inherit' });

// copy the index.html file to the artifactz folder
execSync(`cp ${repo_root}/public/index.html ${artifactz_path}`, { stdio: 'inherit' });
execSync(`cp ${repo_root}/public/favicon.svg ${artifactz_path}/static`, { stdio: 'inherit' });

// ----- build the React app

esbuild.build({
    entryPoints: ['src_ui/index.jsx'],
    bundle: true,
    outfile: `${artifactz_path}/static/rv_bundle.js`,
    sourcemap: true,
    target: ['chrome110', 'firefox110'],
    loader: {
        '.js': 'jsx',
        '.css': 'css'
    },
    define: { 'process.env.NODE_ENV': '"development"' },
    minify: false,
}).catch(() => process.exit(1));
