import db from '../config/database';

/**
 * @name Positions
 * @returns {array}
 * @description Create Position table on database
 */
const Position = async () => {
	const client = await db.connect();
	try {
		const query = `CREATE TABLE IF NOT EXISTS positions (
          id SERIAL UNIQUE, 
          teamlead INTEGER NOT NULL, 
          firstqa INTEGER NOT NULL, 
		  secondqa INTEGER NOT NULL, 
		  dateadded INTEGER NOT NULL,
          PRIMARY KEY(teamlead)
      );`;
		await client.query(query);
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};
export default Position;
