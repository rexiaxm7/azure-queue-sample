module.exports = async function (context) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.res = { body: "Hello" };
    context.bindings.outputQueueItem = ['test-message']

};