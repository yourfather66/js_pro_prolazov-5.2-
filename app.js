let str = ``;
const dollar = 26;
for (let i = 10; i <= 100; i++) {
  if (i % 10 === 0) {
    str += i * dollar + ` `;
  }
}
console.log(str.trim());
