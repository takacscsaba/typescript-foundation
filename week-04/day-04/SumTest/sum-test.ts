import * as test from "./node_modules/tape";
import { Sum } from "./sum";

test("Summing numbers", t => {
  let sum = new Sum();

  let numList = [1, 2, 3, 5, 8, 13];
  t.equal(sum.sum(numList), 32, '/w correct list');

  let emptyList = [];
  t.equal(sum.sum(emptyList), 0, '/w empty list');

  let oneElementList = [13];
  t.equal(sum.sum(oneElementList), 13, '/w one element list');
  
  t.equal(sum.sum(null), 0, '/w null');

  t.end();
});