class TeamController {
	static async baseRequest(req, res, next) {
		console.log(this);
		console.log(req);
	}
}

export default TeamController;
