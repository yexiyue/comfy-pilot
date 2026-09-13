import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

// Both src/ and dist/ resolve to the server package's local environment file.
const envFile = new URL('../.env', import.meta.url);
if (process.env.NODE_ENV !== 'test' && existsSync(envFile)) {
  loadEnvFile(envFile);
}

const appKey = process.env.OBSERVE_APP_KEY;
const appSecret = process.env.OBSERVE_APP_SECRET;
const disabled = process.env.NODE_ENV === 'test' || process.env.OBSERVE_ENABLED === 'false';

if (!disabled && Boolean(appKey) !== Boolean(appSecret)) {
  throw new Error('OBSERVE_APP_KEY and OBSERVE_APP_SECRET must be configured together.');
}

export const observeOptions = !disabled && appKey && appSecret
  ? {
      appKey,
      appSecret,
      serviceId: process.env.OBSERVE_SERVICE_ID ?? 'comfy-pilot-server',
    }
  : undefined;
