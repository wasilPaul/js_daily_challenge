const toSnakeCase = str=> 
	str.split(/(?=[A-Z])/).join('_').toLowerCase();

console.log(toSnakeCase("getColor"));

const toCamelCase = str =>
	str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

console.log(toCamelCase("is_modal_open"));