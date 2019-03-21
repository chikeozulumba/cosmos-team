import db from '../config/database';

/**
 * @name User
 * @returns {array}
 * @description Create User table on database
 */
const User = async () => {
	const client = await db.connect();
	try {
		const query = `CREATE TABLE IF NOT EXISTS users (
          id SERIAL UNIQUE, 
          fullname VARCHAR(255) NOT NULL, 
          positions TEXT[] NOT NULL,
          active INTEGER DEFAULT 0, 
          served INTEGER DEFAULT 0, 
          servetype VARCHAR(255),
          startdate VARCHAR(255),
          enddate VARCHAR(255),
          PRIMARY KEY(id, fullname)
      );`;
		await client.query(query);
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};
export default User;
