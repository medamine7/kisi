import fs from 'fs';

export const getImageDimensions = (filePath: string) => {
  try {
    const buffer = fs.readFileSync(filePath);

    const width = buffer.readUInt16BE(18);
    const height = buffer.readUInt16BE(22);

    return { width, height };

  } catch (err) {
    return null;
  }
};