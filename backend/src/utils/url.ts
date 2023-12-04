import { Request } from "express";

export const getPublicURL = (req: Request, path: string): string => {
  const origin = `${req.protocol}://${req.get('host')}`;
  const base = process.env.CDN_BASE_URL || origin;

  return `${base}/static${path}`;
}
