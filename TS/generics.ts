//generic in functions
type ProgrammingLanguage = {
    name: string;
  };
  
  function identity<T>(value: T): T {
    return value;
  }
  
  const result = identity<ProgrammingLanguage>({ name: "TypeScript" });
  // If we dont include the type parameter explicitly,
  // result would have the type { name: string } instead