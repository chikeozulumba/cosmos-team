import User from './user';
import Seeders from './seeders';
import drop from './drop';
import Foreign from './foreign';
import Position from './positions';

// Instatiate DB
(async () => {
	await drop();
	await User();
	await Position();
	await Seeders();
	await Foreign();
	console.log('###############################################################');
	console.log('                   DONE, MIGRATION COMPLETE!                   ');
	console.log('###############################################################');
})().catch((err) => {
	console.log(err);
});
