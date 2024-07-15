export function loopArr(arr, direction, steps) {
  const result = [...arr];
  for (let i = 0; i < steps; i++) {
    if (direction === "left") {
      result.push(result.shift());
    } else {
      result.unshift(result.pop());
    }
  }

  return result;
}
