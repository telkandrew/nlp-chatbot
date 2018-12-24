
const fs = require('fs');
const agent = require('./responses/agent.json')

module.exports = async function trainnlp(manager, say) {


	/*=======================================================
	= TODO - throwing "undefined" error while using 
	= nlp addDocument()
	*/

  // dynamically "addDocument" for response object
  const createAddDocuments = (responseGroup, groupName) => {    
    responseGroup.forEach(group => {
      const type = group.type

      // addDocuments for "triggers"
      group.triggers.forEach(trigger => {
        let document = `'en', '${trigger}', '${groupName}.${type}'`
        console.log(document)
        manager.addDocument(document)
      })

      // addAnswers for "responses"
      // group.responses.forEach(response => {
      //   manager.addAnswer(`'en', '${groupName}.${type}', '${response}'`)
      // })
    })
  }
  
  	/*=======================================================*/





  // if (fs.existsSync('./model.nlp')) {
  //   manager.load('./model.nlp');
  //   return;
  // }

  createAddDocuments(agent, 'agent')


  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');

  await 
  manager.save('./model.nlp');
}