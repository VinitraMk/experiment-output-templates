
# Experiment Report Generator (ERG) [![npm version](https://badge.fury.io/js/experiment-report-generator.svg)](https://badge.fury.io/js/experiment-report-generator)


[![forthebadge made-with-electron](https://raw.githubusercontent.com/VinitraMk/experiment-report-generator/master/demo/made-with-react.svg)](https://reactjs.org/)

This a react app which can be installed as an npm package. Primary
purpose of this package is to provide a very simple way for a data engineer
to showcase their work, with a simple command.

In effect, the only thing a developer would have to do is run a simple
command to start the app and voila, it will start an app in their
localhost and they can showcase different reports on their Experiment
results.

The app is at a very primitive stage. User is supposed to follow
a specific folder structure for the app to fit and work perfectly.
In the future this will be more generalized, simplified and easy-to-use.



## Installation

#### Prerequisites
* Node

This package simply uses two folders - one that's holding images and
another that's holding json files of the experiment run configurations -
and displaying them in a simple grid.

#### Steps

    1. Create a folder called reports to hold all your outputs in your project root. Make sure to save all your outputs in specific folders inside reports based on their content.

    2. Create two more folders - visualizations and experimental_logs. These two
        will hold files for visual outputs and json data of individual experiments respectively.
        The internal files have been labelled based on the experiment id they belong to.
        for ex - visualizations/exp_1_loss_plot.png, experimental_logs/exp_1.json. This is to ensure we always display the details related to the relevant experiment only.

    3. Change directory to the root of your project i.e just outside
    of your reports folder.

    4. Run the following command to install the package:
        npm install experiment-report-generator
    5. Create a file called ergconfig.json with the follwing configurations.
        {
            "model_keys":[
                "model_filename",
                "final_accuracy",
                "average_loss",
                "lr",
                "batch_size"
            ],
            "view":"grid",
            "files_list":[],
            "erg":{
                "output_directory":"output",
                "experiment_logs_directory":"experimental_logs",
                "visualizations_directory":"visualizations",
                "report_output_directory":"./reports",
                "report_template_directory":"/src/assets/reports"
            }
        }
       This is a default configuration to be set. You may change the values under model_keys
       and erg to customize to some extent your report view and if you
       want to place your folders under different naming conventions.
    6. Run npx makereport

After executing the above steps, a webserver should start from the reports
folder of your project and if you hit it, you should be able see
the UI of the react app.


    
## Features

- Simple Previews of your experiments
- Creation of instant views to showcase experiment progress
in a simple, effective manner with very little effort.
- Currently only supports creation of a grid display of your
image plots and it's details. It will be further expanded in the future,
to create user defined customized views.


## Tech Stack

**Client:** React, SCSS

**Server:** Node, Express


## Screenshots

![App Screenshot](https://raw.githubusercontent.com/VinitraMk/experiment-report-generator/master/demo/erg-doc.gif)