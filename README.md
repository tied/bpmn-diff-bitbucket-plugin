# BPMN Diff Plugin for Bitbucket
This plugin allows to visually compare BPMN files during pull requests in Bitbucket. The plugin adds "BPMN Visual Diff"
button to the Pull Request Diff page. The button is visible only for BPMN files and leads to a separate page which 
allows to visually compare two BPMN file versions.

## Build Requirements
 - **Node** 12.13.0 (you can use nvm)
 - **Maven** 3.6.2
 - **Java JDK** 1.8
 - [**Atlassian SDK 8**](https://developer.atlassian.com/server/framework/atlassian-sdk/downloads/)
 
## Usage Requirements
 - Bitbucket Server **7.0**
 - CSE Runtime **1.2.3**

## Starting Bitbucket

To start Bitbucket, first install all the maven dependencies:

```sh
atlas-package -DskipTests
```

Next, run this command to start Bitbucket:

```sh
atlas-run -DskipTests
```

## Developing the plugin

In the project directory, you can run:

### `npm start`

It builds the frontend and puts it in the watch mode with hot reload.
In other words, if you have the whole plugin, and an instance already working,
this will enable you to make quick changes with an instant preview.

