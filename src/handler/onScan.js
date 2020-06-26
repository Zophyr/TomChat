const Qrterminal = require("qrcode-terminal")
const {
    ScanStatus,
    log,
} = require('wechaty')

// module.exports = function onScan(qrcode, status) {
//   Qrterminal.generate(qrcode, { small: true })
// }

module.exports = function onScan(qrcode, status) {

    Qrterminal.generate(qrcode, { small: true })  // show qrcode on console

    const qrcodeImageUrl = [
        'https://api.qrserver.com/v1/create-qr-code/?data=',
        encodeURIComponent(qrcode),
    ].join('')

    log.info('StarterBot', 'onScan: %s', qrcodeImageUrl)
}

