// app/controller/post.js
const Controller = require("egg").Controller;
const nodemailer = require("nodemailer");
class PostController extends Controller {
  async login() {
    const { email, code } = this.ctx.request.body;

    const trueEmail = this.ctx.session.emailValidate.email;
    const trueCode = this.ctx.session.emailValidate.code;

    console.log("email, code", email, code);
    console.log("trueEmail, trueCode", trueEmail, trueCode);
    if (email === trueEmail && code === trueCode) {
      this.ctx.body = {
        code: 0,
      };
    } else {
      this.ctx.body = {
        code: 1,
      };
    }
  }
  async authorize() {
    const { email } = this.ctx.request.body;
    const code = "1234";
    this.ctx.session.emailValidate = {
      email,
      code,
    };

    const mailTransport = nodemailer.createTransport({
      service: "qq",
      secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
      port: 465,
      auth: {
        user: "1115808717@qq.com", //发送邮件的邮箱
        pass: "pmhhcxbreozrhcae", //第三方授权密码，POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务
      },
    });

    const mailOptions = {
      from: "1115808717@qq.com",
      to: email,
      subject: "博客邮箱验证码",
      text: code,
    };

    try {
      await mailTransport.sendMail(mailOptions);
      this.ctx.body = {
        code: 0,
        msg: "发送成功",
      };
    } catch (e) {
      this.ctx.body = {
        code: 1,
        msg: e,
      };
    }
  }
}
module.exports = PostController;
