import { ValidationResult } from '../env/validator';

export function consoleReporter(envPath: string, result: ValidationResult) {
  if (result.valid) {
    console.log(`✅ ${envPath} is valid.`);
    return;
  }

  console.log(`❌ ${envPath} has ${result.issues.length} issue(s):`);
  for (const issue of result.issues) {
    console.log(`  - [${issue.key}] ${issue.message}`);
  }
}
