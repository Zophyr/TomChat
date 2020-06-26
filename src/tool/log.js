module.exports = msg => {
    console.log("=============================")
    console.log(`msg : ${msg}`)
    console.log(
        `from: ${msg.from() ? msg.from().name() : null}: ${
        msg.from() ? msg.from().id : null
        }`
    )
    console.log(`to: ${msg.to()}`)
    console.log(`text: ${msg.text()}`)
    console.log(`isRoom: ${msg.room()}`)
    console.log("=============================")
}