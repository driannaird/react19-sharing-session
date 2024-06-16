import testPerformance from "./testPerformance";

export const SampleComponent = ({ theme }: { theme: boolean }) => {
  const slowTheme = testPerformance(theme);

  return (
    <div
      className={`mt-4 relative z-10 space ${
        slowTheme ? "bg-black" : "bg-white"
      }`}>
      <p className={`${slowTheme ? "text-white" : "text-black"}`}>
        Hello from another component
      </p>
    </div>
  );
};
