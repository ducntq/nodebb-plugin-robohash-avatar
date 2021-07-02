'use strict';

const winston = require.main.require('winston');
var User = require.main.require('./src/user');

const plugin = {};

plugin.process = async (uid, next) => {
	const userslug = await User.getUserField(uid, 'userslug');
	let avatar = `https://robohash.org/${userslug}.png`;
	winston.info(`[plugins/robo-hash] Set avatar for user ${userslug} to ${avatar}`);
	await User.updateProfile(uid, {
		uid: uid,
		uploadedpicture: avatar,
		picture: avatar,
	}, ['uploadedpicture', 'picture']);
	return {uid: uid, next: next};
};

module.exports = plugin;
