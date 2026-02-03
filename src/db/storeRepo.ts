import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function upsertStore(params: {
  store_id: number;
  access_token: string;
  token_type?: string;
  scope?: string;
}) {
  return prisma.store.upsert({
    where: { store_id: params.store_id },
    update: {
      access_token: params.access_token,
      token_type: params.token_type ?? "bearer",
      scope: params.scope,
      status: "installed",
    },
    create: {
      store_id: params.store_id,
      access_token: params.access_token,
      token_type: params.token_type ?? "bearer",
      scope: params.scope,
      status: "installed",
    },
  });
}

export async function getStore(store_id: number) {
  return prisma.store.findUnique({ where: { store_id } });
}
