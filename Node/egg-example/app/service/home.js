"use strict";

const Service = require("egg").Service;

class HomeService extends Service {
  async user() {
    // 假设从数据库获取的用户信息
    // return {
    //   name: '嘎子',
    //   slogen: '网络的世界太虚拟,你把握不住'
    // };

    const { ctx, app } = this;
    const QUERY_STR = "id, name";
    let sql = `select ${QUERY_STR} from list`; // 获取 id 的 sql 语句
    try {
      console.log("*******************************" + app.mysql);
      const result = await app.mysql.query(sql); // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 新增
  async addUser(name) {
    const { ctx, app } = this;
    try {
      const result = await app.mysql.insert("list", { name }); // 给 list 表，新增一条数据
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 编辑
  async editUser(id, name) {
    const { ctx, app } = this;
    try {
      let result = await app.mysql.update(
        "list",
        { name },
        {
          where: {
            id,
          },
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 删除
async deleteUser(id) {
  const { ctx, app } = this;
  try {
    let result = await app.mysql.delete('list', { id });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
}
module.exports = HomeService;
