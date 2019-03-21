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
		await client.query(users, ['Chike Ozulumba', 0, 0, '', Date.now(), Date.now(), []]);
		await client.query(users, ['Martins Aloba', 0, 0, '', Date.now(), Date.now(), []]);
		await client.query(users, ['Micah Akpan', 0, 0, '', Date.now(), Date.now(), []]);
		await client.query(users, ['Raymond Akalonu', 0, 0, '', Date.now(), Date.now(), []]);
		await client.query(users, ['Sulaiman Sanusi', 0, 0, '', Date.now(), Date.now(), []]);
		await client.query(users, ['Tolulope Olaniyan', 0, 0, '', Date.now(), Date.now(), []]);
		await client.query(users, ['Adebajo Oluwaseyi', 0, 0, '', Date.now(), Date.now(), []]);
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};
export default Seeders;
