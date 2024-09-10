const crypto = require('crypto');
const zod = require("zod");

function generateShortUrl(originalUrl) {
  return crypto.createHash('md5').update(originalUrl).digest('hex').slice(0, 6);
}

const urlValidator = zod.object({
  url : zod.string().url()
});

module.exports = {generateShortUrl, urlValidator};
