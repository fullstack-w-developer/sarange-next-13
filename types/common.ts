export type ListType = {
    data: any[];
    Total: number;
    Headers: { Name: string }[];
    operation: { Total: number; create: any[]; edit: any[]; names: { Action: string }[] };
};



export type BaseResponse = {
    status:boolean,
    message:string
}