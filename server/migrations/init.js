import User from './user';
import Seeders from './seeders';
import drop from './drop';

// Instatiate DB
(async () => {
	await drop();
	await User();
	await Seeders();
	console.log('###############################################################');
	console.log('                   DONE, MIGRATION COMPLETE!                   ');
	console.log('###############################################################');
})().catch((err) => {
	console.log(err);
});
