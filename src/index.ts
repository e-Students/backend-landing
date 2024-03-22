import app from './app';
import { connectDB } from './db';
import 'dotenv/config';

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
