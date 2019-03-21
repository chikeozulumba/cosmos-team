import shuffle from 'shuffle-array';

import Query from '../utils/query';

class TeamController {
	constructor() {
		console.log(this);
	}

	async baseRequest(req, res, next) {
		const { rows } = await Query('SELECT * FROM users');
		console.log(this);
		this.users = shuffle(rows.filter(row => row.served === 0));
		this.res = res;
		return res.json(this.manage());
	}

	static async manage() {
		switch (this.users.length) {
		case 3: return this.handleLevelThree();
		default: return this.normalLevel();
		}
	}

	static async normalLevel() {
		return this.res.json(this.users);
	}

	static async handleLevelThree() {
		return this.res.json(this.users);
	}
}

export default TeamController;
