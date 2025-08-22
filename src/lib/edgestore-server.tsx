// /lib/edgestore-server.ts
import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { initEdgeStoreClient } from "@edgestore/server/core";

export const es = initEdgeStore.create();

// Define router
export const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});

// Export the type for client
export type EdgeStoreRouter = typeof edgeStoreRouter;

// Create Next.js route handler
export const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

// Optional: backend client for server-side logic
export const backendClient = initEdgeStoreClient({
  router: edgeStoreRouter,
});
