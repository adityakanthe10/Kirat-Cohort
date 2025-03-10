## Advance Typescript APIs

1. Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type .
2. Partial makes all properties of type optional, creating a type with the same properties, but each marked as optional.
3. ReadOnly - When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties are not changed.
4. Records - Give cleaner type to objects
5. Map - Gives an even fancier way to deal with objects.Very similar map in C++
6. Exclude - In a function that can access several types of inputs but you want to exclude specific types from being passed to it.
7. Can extract the typescript type of any schema with
z.infer<typeof mySchema>