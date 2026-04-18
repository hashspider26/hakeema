import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const setupPrisma = () => {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (url && authToken) {
        try {
            const libsql = createClient({
                url: url,
                authToken: authToken,
            });
            const adapter = new PrismaLibSQL(libsql);
            return new PrismaClient({ adapter });
        } catch (error) {
            console.error("Prisma: Failed to initialize Turso adapter:", error);
        }
    }

    // Fallback logic that prevents crashing if DATABASE_URL is missing
    return new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_URL || "file:./dev.db"
            }
        }
    });
};

export const prisma = globalForPrisma.prisma ?? setupPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


