/* eslint-disable max-len */
import db from '../config/database';

/**
 * @name Meetup
 * @returns {array}
 * @description Create Meetup table on database
 */
const Seeders = async () => {
	const client = await db.connect();
	try {
		const users = 'INSERT INTO users(fullname, active, served, servetype, startdate, enddate, positions) VALUES($1, $2, $3, $4, $5, $6, $7)';

		// USERS
		await client.query(users, ['Chike Ozulumba', 0, 0, 'Team Lead', Date.now(), Date.now(), ['Team Lead', 'QA']]);
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};
export default Seeders;
