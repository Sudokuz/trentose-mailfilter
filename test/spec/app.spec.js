describe("MailModel init", function() {
  it("should initialise mail database correctly", function(){
      MailModel.init();
      expect(msgs).toBe(MailModel.messages);
  });
    
  it("should initialise rules database correctly", function(){
      MailModel.init();
      expect(rules).toBe(MailModel.rules);
  });
 
});