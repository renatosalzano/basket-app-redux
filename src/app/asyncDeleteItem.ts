export default function asyncDeleteItem(item: any) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 210);
  });
}
