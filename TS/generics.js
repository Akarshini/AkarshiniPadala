function identity(value) {
    return value;
}
var result = identity({ name: "TypeScript" });
// If we dont include the type parameter explicitly,
// result would have the type { name: string } instead
