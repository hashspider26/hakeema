import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const setupPrisma = () => {
    // 1. HARDCODE YOUR URL HERE FROM TURSO
    const url = "libsql://hakeemstore-hashspider1.aws-ap-south-1.turso.io";
    
    // 2. HARDCODE YOUR TOKEN HERE FROM TURSO
    const authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzY0MTc0MTUsImlkIjoiMDE5ZDlhOTEtMjMwMS03NWVjLWE5YTYtZGY1MjU0ODRiMDhiIiwicmlkIjoiMjJkMDA3ODMtMmYzNS00NjRmLWI5ZjUtN2VmZjdlYmE1NDY4In0.7m5LdCfcItaZFxkQvoOEbYTJPzaYIEOluHdwHSmv2OlweuC2zszQc2QlEIp6V8SKfGSfe0d7jZgXwpACqLyLAQ";

    console.log("PRISMA TEST: Using Hardcoded Credentials");

    try {
        const libsql = createClient({ url, authToken });
        const adapter = new PrismaLibSQL(libsql);
        return new PrismaClient({ adapter });
    } catch (error) {
        console.error("PRISMA TEST: FAILED", error);
        return new PrismaClient();
    }
};

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? setupPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
