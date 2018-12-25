
const fs = require('fs');
const agent = require('./responses/agent.json')

module.exports = trainnlp = async ( manager, say ) => {


	/*=======================================================
	= TODO - throwing "undefined" error while using 
	= nlp addDocument()
  */
  
  //console.log("manager", manager)

  // dynamically "addDocument" for response object
  const createAddDocuments = (responseGroup, groupName) => {    
    responseGroup.forEach(group => {
      const type = group.type

      // addDocuments for "triggers"
      group.triggers.forEach(trigger => {
        const responseObj = `${groupName}.${type}`

        manager.addDocument('en', trigger, responseObj);
      })

      // addAnswers for "responses"
      group.responses.forEach(response => {
        const responseObj = `${groupName}.${type}`
        
        manager.addAnswer('en', responseObj, response)
      })
    })
  }
  
  	/*=======================================================*/





  // if (fs.existsSync('./model.nlp')) {
  //   manager.load('./model.nlp');
  //   return;
  // }
  createAddDocuments(agent, "agent")

  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');
}