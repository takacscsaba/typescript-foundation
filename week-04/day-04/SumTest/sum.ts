export class Sum {
  sum(numList: number[]) {
    let sum: number = 0;

    try {
      numList.forEach(x => sum += x);
    } catch(e) {
      console.log('Something went wrong');
      sum = 0;
    }

    return sum;
  }
}