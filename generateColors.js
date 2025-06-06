const {
  generateScale,
} = require('./src/themes/default/assets/javascript/generateScale');

const inputHex = process.argv[2];

if (!inputHex) {
  console.error(
    '❌ Please add your color in hex format, e.g. node generateColors.js "#079a91"'
  );
  process.exit(1);
}

const css = generateScale(inputHex);
console.log(css);
