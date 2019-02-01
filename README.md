# nlp-chatbot
Exploratory project with node-nlp

##Setup

NOTE: You don't have to do everything twice, the numbered sections are just there to help explain
what's going on if you need

Open terminal, type each following command and press enter:

```
cd desktop
git clone https://github.com/telkandrew/nlp-chatbot/
npm install node-nlp
```

1) open terminal on your Mac, type the following lines and press enter.
2) cd into to the desktop, making your current active directory the desktop
3) clone the repository "git clone https://github.com/telkandrew/nlp-chatbot/" -clones the repository to your desktop
4) "cd nlp-chatbot" -updates your current working folder to nlp-chatbot
5) "npm install node-nlp"  -installs npm dependencies (pre-built libraries which power the app)

##Usage (running the chatbot)

Open terminal

```
cd desktop/nlp-chatbot
```
or if already in desktop...
```
cd nlp-chatbot
``

then type the each line and press enter

```
node .
```
 1) open terminal
 2) cd into the nlp-chatbot folder, likely "cd desktop/nlp-chatbot" if working in a newly opened terminal window. If currently on desktop, only "cd nlp-chatbot" is needed
 3) type "node ." and press enter. This will start the chatbot, and it will likely start training if it hasn't been trained before
 4) once training is complete, you can type in terminal and the chatbot will respond.
 
 
##Files You'll Work In
Within nlp-chatbot you'll find a "responses" folder you'll see two files, "agent.json" and "dialog.json". These are probably the only two I would work on for the moment.

###agent.json
This is the training object for chat messages directed specifically at Harambe. If someone asks Harambe a question or mentions his name, this is where his response will be generated from.

###dialog.json
I haven't made much headway on this yet, but this is the training object for Harambe randomly speaking in the chat, without being prompted by a user, or specifically "chatted to". With this object we'll listen for specific "trigger" phrases and respond accordingly. 


##How It Works

These files are JSON objects, they're the data we're feeding to the Maching Learning bot so it can "learn" what phrases to listen for and how to respond. In each file you'll see...

```
    {
        "type": "badatfortnite"
        "triggers": [
            "you're bad at fortnite",
            "your bad at fortnite",
            "you're horrible at fortnite",
            "your horrible at fortnite",
            "you're useless at fortnite",
            "your useless at fortnite",
            "you're the worst fortnite",
            "your the worst at fortnite",
            "you're so bad at fortnite",
            "your so bad at fortnite",
            "you suck at fortnite"

        ],
        "responses": [
            "Sounds like somebody wants to get lazered...",
            "Harambe would have won Winter Skirmish if not for big thumbs and trash WIFI ",
            "Drop Lucky noob..."
        ]
    }
```

This is a JSON (Javascript Object Notation) object. It's just a way of structuring data. Each group has a type, an array of triggers, and an array of responses.

The type is just for our reference, and is what the we'll use to know what grouping the triggers and responses are for, in this case if someone says Harambe sucks at fortnite.

The triggers are the phrases, "chat messages" which will trigger a response. Thanks to ML the chat message doesn't necessarily have to perfectly match any one of the triggers, they're used to help train the chatbot what it's listening for.

The responses are exactly that, responses. Basically if this group get's triggered, Harambe will respond with one of the responses from that grouping's array.

##Working On The Chatbot

I don't care what you do, the world's your oyster. You can keep building out some of the groupings I already have, and you can create new ones too. If you have any questions text/call me. Have fun homie
