import { dupeMarkup } from '../app/markup.js';
import '../app/script.js';

document.body.innerHTML = dupeMarkup;

await new Promise((resolve) => setTimeout(resolve, 0));
