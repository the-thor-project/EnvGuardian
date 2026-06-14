#!/usr/bin/env node
import { runCli } from '../src/cli';

runCli().catch((err) => {
  console.error('[envguardian] Unexpected error:', err);
  process.exit(1);
});

