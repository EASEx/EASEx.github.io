---
sidebar_position: 2
---

# Rules

We provide a configurable set of rules to trigger active actions. Rules are simple binary equations that operate on a set of data streams. Each data stream has a boolean expression and update frequency that can be used to calculate whether the stream should be triggered.

:::tip

Although, we use the word stream here, data in the streams cannot be updated faster than 10 seconds. Using a frequency of less than 10 seconds would not raise any error, but it would not update faster.

We recommend using durations like "11s", "101s" in the rules.

:::


## Data Streams

### Responsiveness

This data stream relates to the responsiveness of the student, and can be used to trigger actions that capture or bring back the attention of the student on the task.

- Mouse Movement [`duration`] : This data stream relates to mouse movement in the Google Collab notebook. This stream is activated after there is no mouse movement for the given number of seconds.

- Keyboard Activity [`duration`] : This data stream relates to keyboard activity in the Google Collab notebook. This stream is activated after there is no keyboard activity for the given number of seconds.

- No Cell Execution [`duration`] : This data stream relates to no cell being executed in the Google Collab notebook. This stream is activated after there has been no cell execution for the given number of seconds.


### Stuck

This data stream relates to the student being stuck in a loop of repeatedly doing the same thing (wheel spinning!), and can be used to trigger actions that could provide them with new information that allows being unstuck from the impasse situation.

#### High Error Frequency [`duration`] 

This data stream relates to the student making many errors really fast. It can be configured further as follows:

- Minimum Normalized Frequency [`number`]
- Time [`duration`]

This stream is triggered when the student has made an average of `Minimum Normalized Frequency` errors over the past `Time` duration. You can use the optional "Early Trigger" to bypass the 10s update frequency discussed above for this data stream.

#### No Successful Cell Executions [`duration`] 

This data stream relates to the student making not having successful cell executions or spending too much time to resolve an error execution. It can be configured further as follows:

- Time [`duration`]

This stream is triggered when the student has not been able to solve an errored execution for the past `Time` duration. 

### Function or Module Usage

This data stream relates to a programming function/module usage by the student. We have implemented a parser that can resolve all named and unnamed modules/functions.

For example, the following code generates :

```python
import matplotlib.pyplot as plt
plt.plot()
import seaborn
seaborn.__version__()
from matplotlib.pyplot import plot
plot()
```

this output internally:

```python
modules = [
        {"name": "matplotlib.pyplot", "as": "plt"},
        {"name": "seaborn", "as": "seaborn"},
        {"name": "matplotlib.pyplot.plot", "as": "plot"},
        ]
functions = ["plt.plot", "seaborn.__version__", "plot"]
```

Each module/function can be configured using:

- Time [`duration`]

This stream is triggered when the student has not used a specific module/function for `Time` duration. 