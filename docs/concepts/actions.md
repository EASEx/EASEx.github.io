---
sidebar_position: 1
---

# Actions

Actions in EASEx represent scaffolds that can be triggered conditional on student inputs, which in turn result in the embodied agent interacting with the student. 

Actions are of two types:
- __Active__ : They are triggered using a fixed set of rules.
- __Passive__ : They are generic actions and are triggered randomly at points in time.

Actions can consist of one or more of the following elements:

- Dialogue*
- HTML/Markdown/TEXT Data
- Sample Python Code

`* required`

## Dialogue

Each action must necessarily have a dialogue that the embodied agent will speak when that action is triggered. Several options are provided to modify the dialogue.

You can use either a plain-text based dialogue or [SSML](https://www.w3.org/TR/speech-synthesis/)/[EmotionML](https://www.w3.org/TR/emotionml/) for emotionally-charged dialogues. Since using a markup language from scratch can be a challenging task, you can use the intuitive inbuilt EmotionML editor offered within EASEx to automatically generate SSML for your dialogue. We use Azure Neural Speech for subsequently generating speech from these dialogues. 

:::tip

For performance reasons, we recommend using simpler words or providing pronunciations via the editor for difficult words. Using too complex sentences will deteriorate the performance of the gesture generator downstream.

:::

## Data

You can also provide some optional data along with each action that is presented to the student. You are free to use any of Markdown or HTML or Text, but we only support a subset of HTML tags for now.


## Python Code

You can further provide snippets of exemplar code to the students. You must always assume that no libraries have been imported and provide a completely independent code (i.e., your code snippet should succesfully run as `!python xxx.py` in the Google Colaboratory).

:::danger

You must not override any of EASEx behavior in your supplied code.

:::

## Scaffold Type

Scaffold type refers to the type of action, e.g., cognitive, motivational, relational, etc.

You can read more about scaffold types [here](scaffoldtype).

## Internal Schema

```
id: <HEX>
dialogue: <SSML/EML/TEXT>
data: <HTML/MD/TEXT>
pycode: <PYTHON_CODE>
type: <TYPE>
```