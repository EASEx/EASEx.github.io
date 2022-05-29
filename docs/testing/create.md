---
sidebar_position: 1
---

# Creating New Tests

## Requirements

To create new tests, the instructor must have the following content available with him. Note that this is an exhaustive list and it is definitely possible to omit some requirements for non core features :

## Question

Put Simply, this instructor needs to develop/write a question as per his/her requirements. As of now, we only support questions with a numeric order/option based answer along with a short explanation for the answer. 

Questions must be created using the template jupyter notebook available in the administrator dashboard, and you must not edit any cells that have been clearly marked to not be tampered with. These cells. are necessary for the functioning of the environment. Deleting such cells can lead to unintended loss of data.

__TEST NOTEBOOK MUST BE SHARED ON GOOGLE COLABORATORY__. 

We do not have any formal arrangement with google colaboratory, but due to plethora of jupyter environments available, it was not possible to cater all of them. We may support more jupyter environments in future.

You are free to use any custom jupyter widget as long as they do not tamper with the existing data.


## Students

Like questions, you will also need students for the test. We have implemented stringent security protcols and only authorized students can give a test. 

Secondly, owing to anonymity requirements for research, we cannot collect and personal data of students. 

You can provide a list of students to the application and it will generate user accounts w/ passwords for each students. You can then share these accounts with students to open the test. No personal data would be collected in the process, since the application only asks you the number of participants.

## Actions

The instructor also needs to setup several actions he chooses to trigger during the course of the test. Actions can constitute several things:

- Dialogue*
- HTML/Markdown/TEXT Data
- Sample Python Code

`* required`

See [] for further explantion regarding actions.

You are free to decide how many actions you want but choosing a low amount of actions would have no effect on students, and choosing a large amount of actions can make it impossible to judge the performance of the system. 

We do not comment upon a recommended number of actions since it can vary largely depending upon user case. However you should try to ensure that there are enough actions for every rule.

## Rules

Rules are literally `rules`  that decide when/why/how actions are triggered. 
See [here](../concepts/rules) for a detailed description regarding rules. 

## Answers _(Optional)_

If you want to automatically check student answers to determine that they fall into some school of thought or mentality, then you can do so using the NLU module. But you must provide some previous answers as well as their catergories for this feature to work. 

Answer checking happens through semantic similarity algorithms, and you can read more at [here](https://www.sbert.net/docs/usage/semantic_textual_similarity.html). Note that this is not 100% accurate, and you should not blindly trust the module and neither use it for autograding. Rather, this module can be used to trigger additional actions that can help you to point the students in right direction, and comes especially handy when students give the right numerical answer but provide a wrong explanation.









