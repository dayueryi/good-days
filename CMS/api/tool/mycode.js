const SMSClient = require('@alicloud/sms-sdk')
const accessKeyId = 'LTAIOfo3FSBa2Z7L'
const secretAccessKey = 'HCSm4LmZwg0urNX4rQAAge02WIlCBL'
let smsClient = new SMSClient({accessKeyId, secretAccessKey})
module.exports = {
  sendCode(option){
    console.log(option)
    smsClient.sendSMS({
        PhoneNumbers: option.PhoneNumbers,
        SignName: '王家巍',//按照严格意义来说，此处的签名和模板的ID都是可变的
        TemplateCode: 'SMS_127158450',
        TemplateParam: '{"code":'+option.code+'}'
    }).then(function (res) {
        let {Code}=res
        if (Code === 'OK') {
            //处理返回参数
            console.log(res)
            option.success()
        }
    }, function (err) {
        console.log(err)
    })
  }
}