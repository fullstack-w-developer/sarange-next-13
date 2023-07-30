
export type Checkout =  {
    status: 'درحال انتظار' | "تسویه شده" | "ناموفق",
    _id: string,
    AuthId: string,
    Amount: number,
    WithdrawalTo: string,
    Transaction: string,
    createdAt: string
}