#!/usr/bin/env node
import { execSync } from 'child_process';
import { mkdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const projectName = process.argv[2] || 'my-game';

execSync(`git clone https://github.com/Simonatoo/create-game ${projectName}`);
execSync(`rm -rf ${projectName}/.git`);
console.log(`✅ Projeto criado: cd ${projectName} && npm install`);
