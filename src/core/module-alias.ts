import ModuleAlias from 'module-alias';
import { join } from 'path';

ModuleAlias.addAliases({
  '@src': join(__dirname, '..'),
});
