import mongoose, {ConnectOptions} from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/mydatabase';

const options: ConnectOptions = {
    // insert options as needed
};

mongoose
    .connect(mongoURI, options)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: Error) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

export default mongoose;