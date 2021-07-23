# An SMS Simulation class SMSMessage(object):
# removed "hasBeenRead = False messageText = text fromNumber = number"
class SMSMessage:
    def __init__(self, hasBeenRead, messageText, fromNumber):
        self.hasBeenRead = hasBeenRead
        self.messageText = messageText
        self.fromNumber = fromNumber

    def MarkASRead(self):
        # removed "if userChoice == read:"
        self.hasBeenRead = True


def add_sms():
    number = raw_input("Recipient number: ")
    message = raw_input("Message: \n")

    SMSStore.append(SMSMessage(False, message, number))


def get_count():
    totals = {
        "read": 0,
        "unread": 0,
        "total": len(SMSStore),
    }

    for i in SMSStore:
        if i.hasBeenRead:
            totals["read"] += 1
        else:
            totals["unread"] += 1

    return totals


def get_message(num, messageArray):
    return messageArray[num].messageText


def get_unread_messages():
    return [message for message in SMSStore if not message.hasBeenRead]


def remove(message):
    SMSStore.remove(message)


no_1 = SMSMessage(False, "Hello", "0798653452")
no_2 = SMSMessage(True, "WYD", "0845673864")
no_3 = SMSMessage(False, "How are you?", "0631873298")

SMSStore = [no_1, no_2, no_3]
userChoice = ""

while userChoice != "quit":
    userChoice = raw_input("What would you like to do - read/send/quit?\n")
    if userChoice == "read":
        count = get_count()["unread"]
        print("\nYou have {0} unread messges".format(count))

        if count != 0:
            messages = get_unread_messages()
            for i in range(0, len(messages)):
                print("{0}: {1}".format(i + 1, messages[i].fromNumber))

            userChoice = raw_input("Which message would you like to read?\n")
            userNum = int(userChoice) - 1
            if userNum in range(0, count):
                message = get_message(userNum, messages)
                SMSStore[SMSStore.index(messages[userNum])].MarkASRead()
                print(message)
                delete = raw_input(
                    "Would you like to delete the message? [y|n]\n")

                if delete == "y":
                    remove(messages[userNum])
                    print("Message deleted")
                elif delete == "n":
                    pass
                else:
                    print("Oops - incorrect input")

            else:
                print("Oops - incorrect input")

    elif userChoice == "send":
        add_sms()
        print("SMS sent!")

    elif userChoice == "quit":
        print("Goodbye")

    else:
        print("Oops - incorrect input")
