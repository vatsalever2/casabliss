import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

/**
 * Reads a local image from the public folder and generates a base64 blur hash.
 * This should ONLY be called from Server Components or build-time functions.
 */
export async function getLocalImageBlur(imagePath: string): Promise<string | undefined> {
  try {
    if (imagePath.startsWith("http")) return undefined;

    const fullPath = path.join(process.cwd(), "public", imagePath);
    const file = await fs.readFile(fullPath);
    const { base64 } = await getPlaiceholder(file, { size: 10 });

    return base64;
  } catch (err) {
    console.warn(`[Plaiceholder] Could not generate blur for ${imagePath}.`);
    return undefined;
  }
}
