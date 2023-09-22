export const Hello = () => {
  return (
    <h2>
      Hello, World!
      <hr/>
      <p>What a beautiful day!</p>
    </h2>
  );
};

export function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}
