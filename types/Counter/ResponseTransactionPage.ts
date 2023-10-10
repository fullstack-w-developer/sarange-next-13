import { Transaction } from "../User";
import { BaseResponse } from "../common";

export interface ResponseTransactionPage extends BaseResponse {
    data:{Transactions:Transaction[]}
}