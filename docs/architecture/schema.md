# GraphQL Schema

<details>
  <summary><strong>Table of Contents</strong></summary>

- [Query](#query)
- [Mutation](#mutation)
- [Objects](#objects)
  - [ErrorMetrics](#errormetrics)
  - [Metric](#metric)
  - [MetricDescription](#metricdescription)
  - [NewTestResponse](#newtestresponse)
  - [Question](#question)
  - [Response](#response)
  - [ResponsivenessMetrics](#responsivenessmetrics)
  - [StuckMetrics](#stuckmetrics)
  - [Subscription](#subscription)
- [Inputs](#inputs)
  - [ActionsInput](#actionsinput)
  - [Error](#error)
  - [ErrorIndicator](#errorindicator)
  - [ErrorIndicators](#errorindicators)
  - [ExtraConfig](#extraconfig)
  - [HighErrorFrequency](#higherrorfrequency)
  - [LastExecutionIsAnError](#lastexecutionisanerror)
  - [Module](#module)
  - [Modules](#modules)
  - [QuestionInput](#questioninput)
  - [ResponsiveIndicators](#responsiveindicators)
  - [Responsiveness](#responsiveness)
  - [ResponsivenessIndicator](#responsivenessindicator)
  - [Rules](#rules)
  - [ScaffoldingConfig](#scaffoldingconfig)
  - [ScaffoldingsSequencesInput](#scaffoldingssequencesinput)
  - [Stuck](#stuck)
  - [StuckIndicators](#stuckindicators)
  - [TestDataInput](#testdatainput)
- [Scalars](#scalars)
  - [Boolean](#boolean)
  - [Float](#float)
  - [ID](#id)
  - [Int](#int)
  - [String](#string)
  - [Upload](#upload)

</details>

## Query

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Questions</strong></td>
<td valign="top">[<a href="#question">Question</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Statistics</strong></td>
<td valign="top"><a href="#response">Response</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Mutation

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ScaffoldingsSequences</strong></td>
<td valign="top">[[<a href="#int">Int</a>!]!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#scaffoldingssequencesinput">ScaffoldingsSequencesInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NewTest</strong></td>
<td valign="top"><a href="#newtestresponse">NewTestResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#testdatainput">TestDataInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NewQuestion</strong></td>
<td valign="top"><a href="#response">Response</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">data</td>
<td valign="top"><a href="#questioninput">QuestionInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### ErrorMetrics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>SyntaxChecker</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>JupyterOutput</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Metric

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ID</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>error</strong></td>
<td valign="top"><a href="#errormetrics">ErrorMetrics</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stuck</strong></td>
<td valign="top"><a href="#stuckmetrics">StuckMetrics</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>responsiveness</strong></td>
<td valign="top"><a href="#responsivenessmetrics">ResponsivenessMetrics</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MetricDescription

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Average</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NewTestResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Response</strong></td>
<td valign="top"><a href="#response">Response</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Credentials</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Question

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Response

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>message</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ok</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ResponsivenessMetrics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>NoCellExecution</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NoKeyboardActivity</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NoMouseMovement</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### StuckMetrics

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ErrorsOccured</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NoCellExecution</strong></td>
<td valign="top"><a href="#metricdescription">MetricDescription</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Subscription

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Metrics</strong></td>
<td valign="top">[<a href="#metric">Metric</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">TestID</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### ActionsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>Responsiveness</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Stuck</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Error</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ModuleUsage</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>FunctionUsage</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Passive</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Error

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>expr</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>indicators</strong></td>
<td valign="top"><a href="#errorindicators">ErrorIndicators</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ErrorIndicator

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>threshold</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>enabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ErrorIndicators

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>syntax_checker</strong></td>
<td valign="top"><a href="#errorindicator">ErrorIndicator</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>jupyter_output</strong></td>
<td valign="top"><a href="#errorindicator">ErrorIndicator</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ExtraConfig

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>scaffolding</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### HighErrorFrequency

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>enabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_normalized_frequency</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>time</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>early_trigger</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### LastExecutionIsAnError

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>enabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>threshold</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>reset_threshold</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Module

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>threshold</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Modules

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>modules</strong></td>
<td valign="top">[<a href="#module">Module</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expr</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### QuestionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>NotebookURLS</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>Actions</strong></td>
<td valign="top"><a href="#actionsinput">ActionsInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ResponsiveIndicators

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>no_cell_execution</strong></td>
<td valign="top"><a href="#responsivenessindicator">ResponsivenessIndicator</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>no_keyboard_activity</strong></td>
<td valign="top"><a href="#responsivenessindicator">ResponsivenessIndicator</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>no_mouse_movement</strong></td>
<td valign="top"><a href="#responsivenessindicator">ResponsivenessIndicator</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Responsiveness

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>frequency</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expr</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>indicators</strong></td>
<td valign="top"><a href="#responsiveindicators">ResponsiveIndicators</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ResponsivenessIndicator

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>enabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>threshold</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Rules

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>stuck</strong></td>
<td valign="top"><a href="#stuck">Stuck</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>error</strong></td>
<td valign="top"><a href="#error">Error</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>modules_usage</strong></td>
<td valign="top"><a href="#modules">Modules</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>responsiveness</strong></td>
<td valign="top"><a href="#responsiveness">Responsiveness</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ScaffoldingConfig

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>scaffolding</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>priority</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### ScaffoldingsSequencesInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>scaffolding_config</strong></td>
<td valign="top">[<a href="#scaffoldingconfig">ScaffoldingConfig</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>extra_config</strong></td>
<td valign="top">[<a href="#extraconfig">ExtraConfig</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Stuck

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>frequency</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expr</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>indicators</strong></td>
<td valign="top"><a href="#stuckindicators">StuckIndicators</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### StuckIndicators

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>high_error_frequency</strong></td>
<td valign="top"><a href="#higherrorfrequency">HighErrorFrequency</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>last_execution_is_an_error</strong></td>
<td valign="top"><a href="#lastexecutionisanerror">LastExecutionIsAnError</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TestDataInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>question_id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>time_duration</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>error_policy</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rules</strong></td>
<td valign="top"><a href="#rules">Rules</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sequences</strong></td>
<td valign="top">[[<a href="#int">Int</a>]]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end_time</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>start_time</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>students</strong></td>
<td valign="top"><a href="#upload">Upload</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String`scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Upload
