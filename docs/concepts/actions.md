---
sidebar_position: 1
---

# Actions

Actions are the primary concept of our architecture, and they represent events that can be triggered using some conditions over user inputs, resulting in the agent interacting with the subject. 

For starters, actions consist of the following elements:

- Dialogue*
- HTML/Markdown/TEXT Data
- Sample Python Code


Actions are of two types:
- __Active__ : They are triggered using a fixed set of rules.
- __Passive__ : They are generic actions and are triggered randomly at points in time.

`* required`

## Dialogue

Each action must necessarily have a dialogue that the agent will speak when the action is triggered. We provide you with several options to modify the dialogue.

You can use either a text based dialogue or [SSML](https://www.w3.org/TR/speech-synthesis/)/[EmotionML](https://www.w3.org/TR/speech-synthesis/) for dialogues. Since using a markup language can be a challenging task, you can use the [] inbuilt EML editor to generate SSML for your dialogue using an intuitive editor. 

We use Azure Neural Speech for generating the speech from these dialogues. 

:::tip

For pure performance reasons, we recommend using simpler words or providing pronunciations via the editor for difficult words. 

Using too complex sentences will drastically deteriorate the performance of the gesture generator.

:::

## Data

You can also provide some optional data along with each action that is presented to the student. You are free to use any of Markdown or HTML or Text, but we only support a subset of HTML tags at this point.

:::tip

Keep the data short and brief so that the student does not unnecessarily spend too much time upon it.

:::

## Python Code

You may want to provide some code examples to the students, and this can be done via providing some python code. You must always assume that no libraries have been imported and provide a completely independent code.

Essentially, `!python xxx.py` should run in Google Colaboratory.

:::danger

Python Code is not executed in an isolated environment. You must not override any of EASEx behavior in your supplied code,

:::

## Type

Type refers to the type of action i.e. motivation, xx or 

You can read more about types [here](types).

## Internal Schema

```
id: <HEX>
dialogue: <SSML/EML/TEXT>
data: <HTML/MD/TEXT>
pycode: <PYTHON_CODE>
type: <TYPE>
```


