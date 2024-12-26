import ModuleAlias from 'module-alias';
import { join } from 'path';

ModuleAlias.addAliases({
  '@src': join(__dirname, '..'),
  '@core': join(__dirname, '..', 'core'),
  '@domain': join(__dirname, '..', 'domain'),
  '@presentation': join(__dirname, '..', 'presentation'),
  '@shared': join(__dirname, '..', 'shared'),
});
