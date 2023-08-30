import { toEnglishNumber, toFarsiNumber } from "./toFarsiNumber";

export const convertObjectEnglishNumber = (data: any) => {
    let newObj: any = {};
    for (let [k, v] of Object.entries(data)) {
        // @ts-ignore
        newObj[k] = toEnglishNumber(v);
    }

    return newObj;
};

export const convertObjectFarsiNumber = (data: any) => {
    let newObj: any = {};
    for (let [k, v] of Object.entries(data)) {
        // @ts-ignore
        newObj[k] = toFarsiNumber(v);
    }

    return newObj;
};

export function convertObjectToCamelCase(obj: any) {
    const convertedObj: any = {};

    Object.keys(obj).forEach((key) => {
        const camelCaseKey = toCamelCase(key.toLowerCase());
        convertedObj[camelCaseKey] = obj[key];
    });

    return convertedObj;
}

function toCamelCase(str: string) {
    return str.replace(/[-_](\w)/g, function (match, p1) {
        return p1.toUpperCase();
    });
}

export const generateValues = (values: any[]) => {
    if (values) {
        const result = values.reduce((obj, item) => {
            if (item.Value.includes(".")) {
                const [firstNameKey, lastNameKey] = item.Value.split(".");
                obj[firstNameKey] = "";
                obj[lastNameKey] = "";
            } else {
                obj[item.Value] = "";
            }
            return obj;
        }, {});
        return result;
    } else {
        return {};
    }
};
