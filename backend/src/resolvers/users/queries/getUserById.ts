import User from '../../../models/User.js';

export const getUserById = async (_: unknown, { id }: { id: string }) => {
  return await User.findById(id);
};
