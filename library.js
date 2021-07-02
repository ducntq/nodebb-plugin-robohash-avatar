'use strict';

var User = require.main.require('./src/user');

const plugin = {};

plugin.process = async (data) => {
        const userslug = await User.getUserField(data.uid, 'userslug');
        let avatar = `https://robohash.org/${userslug}.png`;
        await User.updateProfile(data.uid, {
                uid: data.uid,
                uploadedpicture: avatar,
                picture: avatar,
        }, ['uploadedpicture', 'picture']);
        return data;
};