let name: any = "hello";
name = 42;
name = false;
function printHello(): void {
    console.log("Hello!");
}
function throwError(): never {
    throw new Error("An error occurred!");
}
