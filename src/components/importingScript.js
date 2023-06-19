// [Script] => Import all imgs from assets 
export function importAll(r) {
  const images = {};
  r.keys().forEach((filename) => {
    images[filename] = r(filename);
  });
  return images;
}

export const images = importAll(require.context('../assets/img'));