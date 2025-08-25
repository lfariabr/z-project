import User from '../../../models/User.js';

type RegisterInput = {
  email: string;
  name?: string;
  isExplicit?: boolean;
};

export const registerUser = async (
  _: unknown,
  { input }: { input: RegisterInput }
) => {
  // normalize email
  const email = input.email?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid email');
  }

  // If user exists, update prefs; else create new subscribed user
  const existing = await User.findOne({ email });
  if (existing) {
    existing.isExplicit = input.isExplicit ?? existing.isExplicit ?? false;
    existing.subscribed = true;
    if (input.name) existing.name = input.name;
    await existing.save();
    return existing;
  }

  const user = new User({
    email,
    name: input.name,
    isExplicit: input.isExplicit ?? false,
    subscribed: true,
  });
  await user.save();
  return user;
};
