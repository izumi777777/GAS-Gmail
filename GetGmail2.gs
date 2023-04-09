function searchContactMail() {
 
  const query = '"Gmail内にある検索したい文字列を入力する';
  const start = 0;
  const max = 50;
 
  const threads = GmailApp.search(query, start, max);
  const messagesForThreads = GmailApp.getMessagesForThreads(threads);
 
  for(const messages of messagesForThreads){
    console.log(messages[0].getSubject());
  }
 
  const values = [];
  for(const messages of messagesForThreads){
    const message = messages[0];
    const record = [
      message.getDate(),
      message.getFrom(),
      message.getSubject(),
      message.getPlainBody().slice(0,200)
    ];
    values.push(record);
  }
 
  if(values.length > 0){
    SpreadsheetApp.getActiveSheet().getRange(2, 1, values.length, values[0].length).setValues(values);
  }

}