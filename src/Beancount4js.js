/**
 * 主入口
 *
 * @export
 * @class Beancount4js
 */
export class Beancount4js {
    constructor() {
    }

    /**
     * 测试方法1
     *
     * @param {string} file 文件路径
     * @return {string} 文件内容
     * @memberOf Beancount4js
     */
    testOne(file){
        console.log(file);
    }

    /**
     * 解析内容
     *
     * @param {string} content 文本内容
     * @return {Object} 解析后的对象
     * @memberOf Beancount4js
     */
    testTwo(content){
        console.log(content);
    }
}
