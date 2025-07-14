function oldEnough(age: number): never | boolean {
    if(age > 59) {
        throw Error("Too old!");
    }
    if(Age <= 18) {
        return false;
    }
    return true;
}