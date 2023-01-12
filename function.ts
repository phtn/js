// * Call Signatures
type DescFunc = {
  name: string;
  (): boolean;
};
function doSomething(fn: DescFunc) {
  console.log(fn.name + " returned " + fn());
}
doSomething(function Elon() {return true});

// * Generics
function FifthElement<Type>(arr: Type[]): Type | undefined {
    console.log(arr[4])
    return arr[4]
    // * Type is consistent on input and output, hence generic
}

FifthElement(['air','earth','water','fire','love'])



