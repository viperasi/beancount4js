/**
 * beancount的账户实体
 *
 * @export
 * @class Account
 */
import {BeancountException} from "../common/BeancountException";

export class Account {

    /**
     * 构造方法
     *
     * @constructor
     * @param {string} fullName 账户完整名
     * @param {Array} currencies 货币数组
     * @throws {BeancountException}
     */
    constructor(fullName, currencies) {
        const typeStart = fullname.indexOf(":")
        const nameStart = fullname.lastIndexOf(":")
        if (typeStart <= 0 || nameStart <= 0) {
            throw new BeancountException("Account", "beancount account is not valid.")
        }
        // 账户全名
        this.fullName = fullName
        // 账户支持的货币数组
        this.currencies = currencies
        // 账户启示的类型
        this.type = fullname.slice(0, typeStart)
        // 账户最后的名称
        this.name = fullname.slice(nameStart + 1)
        // 账户中间描述
        this.desc = fullname.slice(typeStart + 1, nameStart)
    }

    /**
     * 判断是否是名字的子节点
     *
     * @param {string} name 账户名
     * @param {string} of 检查节点
     * @return {boolean} 是否校验成功
     */
    isDescendant(name, of) {
        if (of === "") {
            return true;
        }
        return name === of || name.startsWith(`${of}:`)
    }
}
