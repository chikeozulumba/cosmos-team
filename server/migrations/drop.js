import db from '../config/database';

/**
 * @name dropAllTables
 * @description Remove all tables
 */
const dropAllTables = async () => {
	const client = await db.connect();
	try {
		const dropTables = 'DROP TABLE IF EXISTS users, positions';
		await client.query(dropTables);
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};

export default dropAllTables;
