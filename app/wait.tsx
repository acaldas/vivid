export default async function Wait() {
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  return <p>Done</p>;
}
