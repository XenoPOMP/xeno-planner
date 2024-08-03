import { PrismaAdapter } from '@lucia-auth/adapter-prisma';

import { prisma } from './prisma-client';

export const adapter = new PrismaAdapter(prisma.session, prisma.user);
