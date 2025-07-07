function solution(n, k) {
    const lambPrice = 12000;
    const drinkPrice = 2000;
    const freeDrinks = Math.floor(n / 10);
    const payDrinks = k - freeDrinks;
    return (n * lambPrice) + (payDrinks * drinkPrice);
}