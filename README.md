# Changes in Sprint2

There has been a change in the data structure. 
- We have more information about the messages: email address of the messages (*from*) and *subject*. 
- Rules can apply to the *from* field or to the *subject*

This means that the *filter* function should filter out messages if any of the two conditions are given:
- the subject matches the "subject" fiter rule
- the from matches the "from" filter rule.

The interface of the demo app remains the same. 


```
var rules = [{
  from : "spam.com"
}, 
{
  from : "compratutto.it"
},
{
  subject : "special offer"
}];

var msgs = [{
  from : "news@spam.com",
  subject : "we have a special offer for you"
},
{
  from : "carlo@gmail.com", 
  subject : "let's meet on monday"
}, 
{
  from : "jessy@compratutto.it",
  subject : "xmas is near"
},
{ 
  from : "trentose2@googlegroups.com",
  subject : "exam on tuesday"
},
{ 
  from : "maria@gmail.com",
  subject : "special offers just for you"
}];

```

## Example of usage:

```
MailModel.init()
MailModel.filter() 
-> ["carlo@gmail.com", "trentose2@googlegroups.com"]
```