'use strict';

const winston = require.main.require('winston');

const plugin = {};

plugin.process = async (data, callback) => {
	let avatar = `https://robohash.org/${data.userData.username}.png`;
	data.userData.picture = avatar;
	winston.info(`[plugins/robo-hash] Set avatar for user ${data.userData.username} to ${avatar}`);
	callback(data);
};

module.exports = plugin;
