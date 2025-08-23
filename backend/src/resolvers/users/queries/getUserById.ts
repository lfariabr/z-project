import { UserModel } from '@/models/User';

export const getUserById = async (_: any, { id }: { id: string }) => {
  return await UserModel.findById(id);
};
