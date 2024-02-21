import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  // 추가 지연
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('losdding');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
