---
sidebar_position: 3
---

# R3D

The R3D ( 3D Rendering Unit ) lies is responsible for rendering the embodied agent. It consists of the following parts:

## Text-to-Speech

We use the commercially available Microsoft Neural Text to Speech Engine for all tasks. The choice has been made keeping in mind extensive support for SSML. You can read more about it [here](https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/).

## Forced Alignment

Whilst TTS provides us with speech, we still need timestamps for each word to sync the video w/ audio. This is done using forced alignment which is a ML algorithm that determines timestamps of words in an audio given both the audio and the transcript. We use the open source [FlashLight ASR ](https://github.com/flashlight/flashlight) for the task. We did not see any significant erros in our test runs.

## 3D Mesh

Before we move on to rendering, we first discuss the meshes (i.e. agent skins) available to use. Unlike most competing systems, we offer the ability to customize the skin. All the meshes are standard RPM skins. You can create your own skin [here](https://readyplayer.me/) and upload them while creating a test to use it. We also offer some prebuilt skins if you don't really want to go about designing your own skin.

## VOCA

We use the open source VOCA to generate body movements for running speech. This is rendered using Blender's Python API, merged with the audio stream, overlayed with subtitles and present to the user as a video stream.
