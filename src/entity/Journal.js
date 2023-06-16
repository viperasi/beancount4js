/**
 * 日记账实体, 包括交易记录, 事件等
 *
 * @export
 * @class Journal
 */
import {BeancountException} from "../common/BeancountException";

export class Journal{

    /**
     *
     * @param {string} date 日期, YYYY-MM-dd
     * @param {string} status 状态, *, !
     * @param {string} cmd 指令类型
     * @param {string} payee 受款方
     * @param {string} narration 项目
     * @param {Array} details 日记账详情
     */
    constructor(date, status, cmd, payee, narration, details) {
        if(!date || !cmd || !details){
            throw new BeancountException("Journal", "数据不正确")
        }
        this.date = date
        this.status = status
        this.cmd = cmd
        this.payee = payee
        this.narration = narration
        this.details = details
        this.id = this.date + "_" + this.cmd + "_" + new Date().getTime()
    }
}
