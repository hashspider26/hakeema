import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const setupPrisma = () => {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (!url || !authToken) {
        console.error("Prisma: Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN. Falling back to dummy datasource.");
        return new PrismaClient({
            datasources: {
                db: {
                    url: "file:./dev.db"
                }
            }
        });
    }

    try {
        console.log("Prisma: Attempting Turso Connection...");
        const libsql = createClient({
            url: url,
            authToken: authToken,
        });
        const adapter = new PrismaLibSQL(libsql);
        console.log("Prisma: Turso connection successful");
        return new PrismaClient({ adapter });
    } catch (error) {
        console.error("Prisma: Turso initialization failed:", error);
        return new PrismaClient({
            datasources: {
                db: {
                    url: "file:./dev.db"
                }
            }
        });
    }
};

export const prisma = globalForPrisma.prisma ?? setupPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


