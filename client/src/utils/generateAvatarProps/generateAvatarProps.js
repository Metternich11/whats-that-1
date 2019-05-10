import options from "./options.js";

function generateAvatarProps() {
  return Object.keys(options).reduce((acc, key) => {
    const id = Math.floor(Math.random() * (options[key].length - 1));
    acc[key] = options[key][id];
    return acc;
  }, {});
}

export default generateAvatarProps;
