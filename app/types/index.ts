import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAr" | "emailVerified"
> & {
  createdAt: string;
  updatedAr: string;
  emailVerified: string | null;
};
