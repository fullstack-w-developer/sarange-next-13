export const generateObjectInitailValue = (name: string, edit: any[], create: any[]) => {
    if (name === "ویرایش" && edit) {
        return edit?.reduce((acc, item) => {
            acc[item.Value] = "";
            return acc;
        }, {});
    }
    if (name === "ایجاد" && create) {
        return create?.reduce((acc, item) => {
            acc[item.Value] = "";
            return acc;
        }, {});
    }

    return {};
};

export function getObjectValue(obj: any, propertyString: any) {
    const propertyNames = propertyString.split(".");
    let result = obj;

    for (let propertyName of propertyNames) {
        if (result && result.hasOwnProperty(propertyName)) {
            result = result[propertyName];
        } else {
            result = null;
            break; // Exit the loop if any property is not found
        }
    }

    return result;
}
