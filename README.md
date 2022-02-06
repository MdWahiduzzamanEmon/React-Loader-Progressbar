# What is this?

Get React Loader|| ProgressBar with styled components.

## Installation

`npm install react-loader-spinner --save`

`npm install --save styled-components`

## Components

    <CircularLoaderEditable/>
    <CircularTimeLoader/>
    <CircularEffect/>
    <PulseLoader/>
    <DoubleCircularLoader/>
    <AnimatedProgressBar/>
    <PercentProgressBar/>
    <LinearProgressBar/>
    <LinearProgressBarTwo/>

### uses

`import CircularLoaderEditable, { CircularEffect, CircularTimeLoader, PulseLoader, DoubleCircularLoader, AnimatedProgressBar, PercentProgressBar, LinearProgressBar, LinearProgressBarTwo } from 'react-loader-progressbar';`

```sh
 <CircularLoaderEditable color="red" stroke="5px" size="50px" delay="3s" />
```
## Options for props

`color`: Color of the loader. Default: `#00AABB`

`delay`: Animation delay. Default: `3s`

`size`: Size of the loader

`margin`: Margin of the loader. Default: `0`

`stroke`: Border width of the progress bar. Default: `1px`




## PercentProgressBar

`percent`: Percent of the progress bar. Default: `0`

`fontSize`: Font size of the percent. Default: `12px`

`textColor`: Color of the percent. Default: `#00AABB`

## LinearProgressBarTwo

`width`: Width of the progress bar. Default: `50%`

`height`: Height of the progress bar. Default: `5px`

## DoubleCircularLoader

`borderColor`: Color of the border. Default: `#00AABB`