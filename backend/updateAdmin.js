import mongoose from 'mongoose';
import User from './models/userModel.js';

async function updateAdmin() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/huxnStore');
    const result = await User.updateOne({ _id: '690b280dbfc8e8e935bed02b' }, { isAdmin: true });
    console.log('Update result:', result);
    if (result.modifiedCount > 0) {
      console.log('Admin status updated successfully');
    } else {
      console.log('User not found or already admin');
    }
  } catch (error) {
    console.error('Error updating admin status:', error);
  } finally {
    await mongoose.disconnect();
  }
}

updateAdmin();
