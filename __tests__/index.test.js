// @ts-check

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reverse from '../src/index.js';

// ✅ ESM-замена __filename и __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Получаем путь к фикстурам
const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

// Читаем файл как текст
const readFixture = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse works with long text from fixture', () => {
  const text = readFixture('input.txt').trim();
  const expected = readFixture('expected.txt').trim();

  expect(reverse(text)).toEqual(expected);
});
