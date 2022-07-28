---
sidebar_position: 1
---

# Creating New Problems

## Requirements

To create a new problem, you must have the following content available:

### Title

You must assign the problem a suitable title, which will be used as an identifier while creating problem-solving sessions. The name should always be unique, and cannot be changed later.

### Notebook URLs

You can add multiple notebook URLs (via google colab) that can be used to connect to the problem-solving session. It is your responsibility to distribute the URLs to the students, and in case of multiple URLs, to distribute them correctly. EASEx will block any sessions from all other possible URLs.

### Answers

_Previously discussed in creating questions here_

### Actions

You need to upload a zip file containing all the actions. The zip file must have the required structure as described below.

```
main.csv
data/
python/
dialogue
```

`main.csv` de3scribes the structure of each action like this:

| dialogue              | code              | data              | type         |
| --------------------- | ----------------- | ----------------- | ------------ |
| Hey! How are you?     | file:/python/a.py | file:/data/a.html | motivational |
| file:/dialogue/b.ssml | file:/python/b.py | file:/data/b.md   | motivational |

#### Dialogue

Dialogue is literally the dialogue spoken by the embodied agent. It can either be text, or the path to a SSML file.

#### Code (Optional)

It refers to any arbitrary code that should be run inside the student's notebook when the action is triggered. It must be a path to a python file.
Note that you will need to import everything you are going to use in the file itself and not rely on modules already imported in the notebook. This is because the code is executed in a isolated context and has no access to notebook's python runtime.

#### Data (Optional)

Data is some textual information that can be presented to the student in the application ( say pandas documentation ). It must be a file path to a markdown or HTML file.

#### Type

It refers to the type of scaffolding being provided in the action. You can read more about it [here](../concepts/scaffoldtype)

You can download a sample zip file [here](/img/actions.zip).
