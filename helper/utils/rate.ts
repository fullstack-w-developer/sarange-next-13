type NumberRate = { OneStar: number; TwoStar: number; ThreeStar: number; FourStar: number; FiveStar?: number };
export const rateToDriver = (object: NumberRate, length: number) => {
    const numbers = { OneStar: 1, TwoStar: 2, ThreeStar: 3, FourStar: 4, FiveStar: 5 };
    const result = Object.entries(object).reduce((acc, [key, value]) => {
        // @ts-ignore
        const multiplier = numbers[key] || 1;
        return acc + value * multiplier;
    }, 0);

    return result / length;
};
