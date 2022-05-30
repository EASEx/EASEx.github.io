---
sidebar_position: 1
---

# Creating New Problem-solving Sessions

## Requirements

To create new problem-solving sessions for students, you must have the following content available. Please note that this is an exhaustive list and it is possible to omit some requirements for non-core features:

## Problem

As an instructor or course designer, you will need to develop/write a problem as per your requirements. Currently, we only support problems with a numeric rank order (e.g., rank order datasets A, B, C based on criterion) or an option based answer (e.g., based on criterion, which of datasets A, B, C is most representative), along with a short explanation/reasoning for the answer. 

Problems must be created using the template jupyter notebook available in the administrator dashboard.

Do not edit jupyter notebook cells that have been clearly marked not to be tampered with. These cells are necessary for the functioning of the environment. Deleting such cells can lead to unintended loss of data.

__Please note that we currently offer jupyter notebook based problem-solving only via Google Colaboratory__.

You are free to use any custom jupyter widget as long as it does not tamper with the existing data.


## Students

As an instructor or course designer, you will further need to register students for the problem-solving session. We have implemented stringent security protcols and only authorized students can attempt the designed problems. 

Owing to anonymity requirements for research, we do not collect any personal data of students. 

You can provide a list of students to EASEx and it will generate user accounts with the passwords for each student. You can then share these accounts with students to open the problem-solving session. No personal data would be collected in the process, since EASEx only asks you the number of participants for whom login credentials need to be created.


## Actions

As an instructor or course designer, you will also need to setup several actions that you would like to be triggered during the course of the problem-solving session. Actions can constitute several things:

- Dialogue*
- HTML/Markdown/TEXT Data
- Sample Python Code

`* required`

See [here](../concepts/actions) for further explantion regarding actions.

You are free to decide how many actions you want but choosing a low number of actions may not have the desired effect on students (e.g., one motivational prompt for an hour long problem-solving session), and choosing a high number of actions may disrupt students' learning experience and make it impossible to precisely judge what impacts student performance. Generally, you should try to ensure that there are enough actions for every rule.

## Rules

As an instructor or course designer, you may configure rules that decide when, why and how actions are triggered. 

See [here](../concepts/rules) for further explantion regarding rules. 

## Answers _(Optional)_

Finally, as an instructor or course designer, if you want to automatically check student explanation to determine whether they fall into certain reasoning clusters, you can do so using the NLU module. In order for this to work, you must provide already available student answers (e.g., from prior cohorts) as well as their predefined category labels. Accuracy of this module will strongly depend on this input. 

Answer checking happens through semantic similarity algorithms, and you can read more it [here](https://www.sbert.net/docs/usage/semantic_textual_similarity.html). Please note that this module can be used to trigger additional actions that can point students in a particular direction in the problem-space. This can especially come handy when students give the right numerical answer (e.g., right multiple choice option or rank order) but provide a wrong or suboptimal explanation.