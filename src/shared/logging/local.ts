const { log } = console;

function logInit (message: string) {
  log(`🚀 ${message}`);
}

function logInfo (message: string) {
  log(`🔍 ${message}`);
}

function logWarn (message: string) {
  log(`⚠️ ${message}`);
}

function logError (message: string) {
  log(`🚨️ ${message}`);
}

export {
  logInit,
  logInfo,
  logWarn,
  logError,
};