import fs from 'fs/promises';
import path from 'path';

export const readFromSource = async (fileName: string) => {
  try {
    const fileLocation = path.join(
      path.dirname(path.dirname(path.dirname('.'))),
      path.join('src', fileName)
    );
    return await fs.readFile(fileLocation, { encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};
