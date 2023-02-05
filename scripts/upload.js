/*import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import open from 'open';


const fileUrl = `fmp://${process.env.FILEMAKER_SERVER}/${'LSDevelop Recovered'}?script=${process.env.FILEMAKER_EXECUTE_SCRIPT}&param=`;
const __dirname = dirname(fileURLToPath(import.meta.url));

const thePath = path.join(__dirname, "../", "dist", "index.html");
const url = fileUrl + encodeURIComponent(thePath);
open(url);*/

import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import open from 'open';
import dotenv from 'dotenv';
dotenv.config();

const fileUrl = `fmp://${process.env.FILEMAKER_SERVER.replace(/\\/g, "")}/${process.env.FILEMAKER_FILE}?script=${process.env.FILEMAKER_EXECUTE_SCRIPT}&param=`;
const __dirname = dirname(fileURLToPath(import.meta.url));

const thePath = path.join(__dirname, "../", "dist", "index.html");
const url = fileUrl + encodeURIComponent(thePath);
open(url);