import { connect } from 'mongoose';

try {
    const connectionString =
        process.env.MONGODB_CONNECTION_STRING + 'mongoose?retryWrites=true&w=majority';

    await connect(connectionString);

    console.log('MongoDB Connected');
} catch (e) {
    console.log('something went wrong in database');
    console.error(e);
}
