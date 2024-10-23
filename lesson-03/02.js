const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const message = words.indexOf("апельсин") !== -1
    ? "Ура! нашел"
    : "Придется поискать в другом магазине…";

console.log(message);
