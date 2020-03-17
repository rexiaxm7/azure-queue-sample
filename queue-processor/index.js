const azure = require('azure-storage')

module.exports = async function (context, myTimer) {
    const timeStamp = new Date().toISOString();

    if (myTimer.IsPastDue) {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);

    const queueService = azure.createQueueService(process.env['AzureWebJobsStorage'])
    queueService.getMessage('sample', function (error, result, response){
        if (!error) {
            if (result === undefined) return
            queueService.deleteMessage('sample', result.messageId, result.popReceipt, function (error, response) {
                if (!error) {
                    context.log('Queue message deleted!!')
                }
            })
        }
    })

};