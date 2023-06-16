/**
 * 自定义异常
 *
 * @export
 * @class BeancountException
 */
export class BeancountException {

    /**
     * @constructor
     * @param {string} clsname 错误类名
     * @param {string} message 错误内容
     */
    constructor(clsname, message) {
        this.clsname = clsname
        this.message = message
    }

    toString(){
        return this.clsname + ":" + this.message
    }
}
