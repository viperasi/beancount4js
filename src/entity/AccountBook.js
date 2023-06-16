/**
 * 账本实体
 *
 * @export
 * @class AccountBook
 */
import {BeancountException} from "../common/BeancountException";

export class AccountBook {

    /**
     * 账本构造方法
     *
     * @param {string} title 账本标题
     * @param {string} currency 主货币
     * @param {string} assetsName 资产前缀
     * @param {string} liabilitiesName 负债前缀
     * @param {string} equityName 权益前缀
     * @param {string} incomeName 收入前缀
     * @param {string} expensesName 支出前缀
     * @throws {BeancountException}
     */
    constructor(title, currency, assetsName, liabilitiesName, equityName,
                incomeName, expensesName) {
        if(!title || !currency){
            throw new BeancountException("AccountBook", "账本标题或货币未设置")
        }
        this.title = title
        this.currency = currency
        this.assetsName = assetsName ?? "Assets"
        this.liabilitiesName = liabilitiesName ?? "Liabilities"
        this.equityName = equityName ?? "Equity"
        this.incomeName = incomeName ?? "Income"
        this.expensesName = expensesName ?? "Expenses"

        // 账户数组, 内为Map对象数组
        this.accounts = new Array([]);
        // 日记账数组
        this.journals = new Array([]);
    }

}
