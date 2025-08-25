import User from '../../../models/User.js';

export const listUsers = async (
  _: unknown,
  { limit = 20, offset = 0 }: { limit?: number; offset?: number }
) => {
  const safeLimit = Math.min(Math.max(limit, 1), 100);
  const safeOffset = Math.max(offset, 0);
  return await User.find({})
    .sort({ createdAt: -1 })
    .skip(safeOffset)
    .limit(safeLimit);
};