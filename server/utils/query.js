import Pool from '../config/database';

const Query = async (type, data = null) => {
	try {
		const client = await Pool.connect();
		const result = await client.query(type, data);
		return result;
	} catch (error) {
		throw new Error(error);
	}
};

export default Query;
