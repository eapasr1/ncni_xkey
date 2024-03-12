const genId1 = require('oevg_xid');
const genId2 = require('bzks_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|9L68nUXLAE|' + genId2()).digest('base64');
}


module.exports = generateKey;
