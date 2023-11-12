const withMT = require("@material-tailwind/html/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#292524', // Dodaj niestandardową zmienną koloru
        // Dodaj więcej niestandardowych kolorów według potrzeb
      },
    },
  },
  plugins: [],
});