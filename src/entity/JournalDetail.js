/**
 * 日记账详情
 *
 * @export
 * @class JournalDetail
 */
import {BeancountException} from "../common/BeancountException";

export class JournalDetail{

    /**
     *
     * @constructor
     * @param {string} account 账户
     * @param {number} amount 金额
     * @param {string} currency 货币
     * @param {string} comment
     * @throws {BeancountException}
     */
    constructor(account, amount, currency, comment) {
        if(!account){
            throw new BeancountException("JournalDetail", "账户为空")
        }
        this.account = account
        this.amount = amount
        this.currency = currency
        this.comment = comment
    }

}
