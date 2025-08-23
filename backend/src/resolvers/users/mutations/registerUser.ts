import { UserModel } from '@/models/User';
import { hash } from 'bcryptjs';

export const registerUser = async (
  _: any,
  { input }: { input: { email: string; name: string; password: string } }
) => {
  const existing = await UserModel.findOne({ email: input.email });
  if (existing) {
    throw new Error('Email already registered.');
  }

  const hashedPassword = await hash(input.password, 10);
  const newUser = new UserModel({
    name: input.name,
    email: input.email,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
};
