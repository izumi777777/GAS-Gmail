function searchContactMail() {
 
  const query = '"Gmail内にある検索したい文字列を入力する"';
  const start = 0;
  const max = 50;
 
  const threads = GmailApp.search(query, start, max);
  const messagesForThreads = GmailApp.getMessagesForThreads(threads);
 
  for(const messages of messagesForThreads){
    console.log(messages[0].getSubject());
  }
 
}