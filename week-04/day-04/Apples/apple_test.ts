import * as test from "./node_modules/tape";
import { Apple } from "./apple";

test('Apple creation', t => {
  let apple = new Apple();

  t.equal(apple.getApple(), 'apple');
  t.end();
});