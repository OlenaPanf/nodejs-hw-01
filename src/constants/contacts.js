//1.
// import path from 'node:path';
// export const PATH_DB = path.resolve('src/db/db.json');

//2.
import path from 'path';
export const PATH_DB = path.join(process.cwd(), 'src/db/db.json');

//3.
// import path from 'node:path';
// const pathToWorkDir = path.join(process.cwd());
// export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');

//4.
// export const PATH_DB =
//   'D:\\HomeWorks_GOIT\\Node.js\\nodejs-hw-01\\src\\db\\db.json';

//5.
// const PATH_DB = './src/db/db.json';
// module.exports = { PATH_DB };

//6.
// const path = require('path');
// const dbPath = path.join(__dirname, '..', 'db', 'db.json');
// export const PATH_DB = dbPath;
