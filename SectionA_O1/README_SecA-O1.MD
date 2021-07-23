You havent created a class for you SMSMessage object.
In python in order to create a class you need to start it of with the `class` identifier and the name like so:
<pre lang='python'>
class <i>ClassName</i>:
  <i>Class Content</i>
</pre>

You also can just declare class variables directly in the constructer with `self`, you don't have to declare them before as in **line 2**.

The only function that can implemented as a method is the `MarkASRead` function. This is because it afects a class variable of the SMSMessage object it's called from.

The other functions only store in and/or read from the SMSStore array.

In the MarkASRead method you have an `if` statment on **line 10** that checks if the user enters "read". This wont work because the function won't have acces to the `userchoice` variable. Also with functions you only want to do a single task and call it when needed. As you did in the while loop on **line 28**.

I've fixed the code and added the functionality to get the program working as intended.

Some things to note:
1. **Line 22:** I used a dictionary to store all lengths of the SMSStore array incase they are needed in the future.
2. **Line 42:** I use _list comprehension_ to create a list only containing the unread messages from `SMSStore`.
3. **Line 71:** In order to get the specific message I use the string `index()` method to get the index of the message from `SMSStore` and use the number returned from that to run the `MarkASRead` method on.