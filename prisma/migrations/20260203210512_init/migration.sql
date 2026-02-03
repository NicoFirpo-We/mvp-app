-- CreateTable
CREATE TABLE "Store" (
    "store_id" INTEGER NOT NULL,
    "access_token" TEXT NOT NULL,
    "installed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'installed',

    CONSTRAINT "Store_pkey" PRIMARY KEY ("store_id")
);
