import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/MergeSort.js'
import { getQuickSortAnimations } from '../sortingAlgorithms/QuickSort.js'
import { getHeapSortAnimations } from '../sortingAlgorithms/HeapSort.js'
import { getBubbleSortAnimations } from '../sortingAlgorithms/BubbleSort.js'
import './SortingVisualizer.css';




// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 250;

// Change this value for the number of bars (value) in the array.
// const NUMBER_OF_ARRAY_BARS = 310;
var NUMBER_OF_ARRAY_BARS = 70;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#43A6C6';

// This is thes color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const THIRD_COLOR = "green"

const MID_COLOR = "yellow"

const AFTER_SORTING_COLOR = "#43A6C6"

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the array
    this.state = {
      array: [],
      NUMBER_OF_ARRAY_BARS: NUMBER_OF_ARRAY_BARS,
      // sortingSpeed: 500,
      ANIMATION_SPEED_MS: ANIMATION_SPEED_MS,
      arraySize: 70,
      // timeComplexityLabel: 'Time Complexity\n\nBest Case:\n\nAverage Case:\n\nWorst Case:',
      // spaceComplexityLabel: 'Space Complexity\n\nWorst Case:',
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  // Reset the array put all the new values
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      // array.push(randomIntFromInterval(5, 730));
      array.push(randomIntFromInterval(5, 550));
    }
    this.setState({ array });
  }


  handleArraySizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    NUMBER_OF_ARRAY_BARS = newSize;
    this.setState({ arraySize: newSize }, this.resetArray);
  }

  handleSortingSpeedChange = (event) => {
    const newSpeed = 501 - parseInt(event.target.value, 10);
    ANIMATION_SPEED_MS = newSpeed;
    this.setState({ ANIMATION_SPEED_MS: newSpeed });
  }


  reloadPage = () => {
    window.location.reload(); // This reloads the page
  };



  mergeSort() {

    // this.setState({
    //   timeComplexityLabel: 'Time Complexity\n\nBest Case: O(nlog(n))\n\nAverage Case: O(nlog(n))\n\nWorst Case: O(nlog(n))',
    //   spaceComplexityLabel: 'Space Complexity\n\nWorst Case: O(n)',
    // });

    // We will call getMergeSortAnimations and will sort the array and push back their i and j value 
    // how they are working in background 
    const animations = getMergeSortAnimations(this.state.array);
    // now we have all the value of i and j how they sorted accordingly

    // animation contain sequence of mergeSort so we will iterate them
    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName('array-bar');

      const [barOneIdx, barTwoIdx, count] = animations[i];

      if (count === 0) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = SECONDARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = THIRD_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 2) {
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barTwoIdx}px`
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 3) {
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = MID_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }


    }

    const arrayBars = document.getElementsByClassName('array-bar');

    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        const barOneStyle = arrayBars[j].style;
        barOneStyle.backgroundColor = AFTER_SORTING_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);

  }





  quickSort() {


    // this.setState({
    //   timeComplexityLabel: 'Time Complexity\n\nBest Case: O(nlog(n))\nAverage Case: O(nlog(n))\nWorst Case: O(nlog(n))',
    //   spaceComplexityLabel: 'Space Complexity\n\nWorst Case: O(n)',
    // });

    const animations = getQuickSortAnimations(this.state.array);

    // animations.push([0, 0, 4]);

    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName('array-bar');

      const [barOneIdx, barTwoIdx, count] = animations[i];

      if (count === 0) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = SECONDARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = THIRD_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 2) {
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barTwoIdx}px`
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 3) {
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = MID_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 4) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }


    }

    const arrayBars = document.getElementsByClassName('array-bar');

    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        const barOneStyle = arrayBars[j].style;
        barOneStyle.backgroundColor = AFTER_SORTING_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);

  }

  heapSort() {

    // this.setState({
    //   timeComplexityLabel: 'Time Complexity\n\nBest Case: O(nlog(n))\nAverage Case: O(nlog(n))\nWorst Case: O(nlog(n))',
    //   spaceComplexityLabel: 'Space Complexity\n\nWorst Case: O(n)',
    // });
    // We leave it as an exercise to the viewer of this code to implement this method.

    const animations = getHeapSortAnimations(this.state.array);

    // animations.push([0, 0, 4]);

    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName('array-bar');

      const [barOneIdx, barTwoIdx, count] = animations[i];

      if (count === 0) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = SECONDARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = THIRD_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 2) {
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barTwoIdx}px`
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 3) {
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = MID_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
      else if (count === 4) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }


    }

    const arrayBars = document.getElementsByClassName('array-bar');

    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        const barOneStyle = arrayBars[j].style;
        barOneStyle.backgroundColor = AFTER_SORTING_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);

  }

  bubbleSort() {

    // this.setState({
    //   timeComplexityLabel: 'Time Complexity\n\nBest Case: O(nlog(n))\nAverage Case: O(nlog(n))\nWorst Case: O(nlog(n))',
    //   spaceComplexityLabel: 'Space Complexity\n\nWorst Case: O(n)',
    // });

    const animations = getBubbleSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx, count] = animations[i];

      if (count === 3) {
        const barOneStyle = arrayBars[barOneIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = THIRD_COLOR;
        }, i * ANIMATION_SPEED_MS);

      } else if (count === 0 || count === 1) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = count === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else if (count === 2) {
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${barTwoIdx}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

    const arrayBars = document.getElementsByClassName('array-bar');

    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        const barOneStyle = arrayBars[j].style;
        barOneStyle.backgroundColor = AFTER_SORTING_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);
  }


  render() {
    const { array, arraySize, sortingSpeed } = this.state;

    return (


      <div>

        {/* <div>
          <h1>Sorting Visualizer</h1>
        </div> */}


        <div id='toolbar'>
          <div className="toolbar-left">
            <button id='generateArray' className='button-style' onClick={() => this.resetArray()}>Generate New Array</button>
          </div>

          <div id='slider'>
            <div>
              <label>Array Size:</label>
              <input
                type="range"
                min="15"
                max="70"
                value={arraySize}
                onChange={this.handleArraySizeChange}
              />
              <span>{arraySize}</span>
            </div>


            <div>
              <label>Sorting Speed:</label>
              <input
                type="range"
                min="1"
                max="500"
                value={sortingSpeed}
                onChange={this.handleSortingSpeedChange}
              />
              <span>{sortingSpeed}</span>
            </div>
          </div>


          <div id='sorting-algorithms'>
            <button id='mergesort' className='button-style' onClick={() => this.mergeSort()}>Merge Sort</button>
            <button id='quicksort' className='button-style' onClick={() => this.quickSort()}>Quick Sort</button>
            <button id='heapsort' className='button-style' onClick={() => this.heapSort()}>Heap Sort</button>
            <button id='bubblesort' className='button-style' onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </div>

          <div id='Reset-button'>
            <button id="reload" className='button-style' onClick={this.reloadPage}>
              Reset
            </button>
          </div>

          {/* <button id='reset' onClick={this.resetApplication}>Reset</button> */}


        </div>


        <div className="array-container">



          { /* <div className="complexity-column">
            <div className="time-complexity">
              <h2>TIME COMPLEXITY</h2>

              <div className="complexity-cases">

                <div>
                  <p class="Sub_Heading">Worst case:</p>
                  <p id="Time_Worst"></p>
                </div>

                <div>
                  <p class="Sub_Heading">Average case:</p>
                  <p id="Time_Average"></p>
                </div>

                <div>
                  <p class="Sub_Heading">Best case:</p>
                  <p id="Time_Best"></p>
                </div>

              </div>

            </div>
      </div> */ }





          <div className='inner-array-container'>
            {array.map((value, idx) => (
              <div className="array-bar" key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  // flex: `0 0 calc(100% / ${arraySize})`,
                  width: `${100 / (arraySize + 50)}%`,
                  height: `${value}px`,
                }}>

              </div>
            ))}
          </div>



          { /* <div className="space-complexity">
            <h2>SPACE COMPLEXITY</h2>
            <div className="complexity-cases">
              <div>
                <p class="Sub_Heading">Worst case:</p>
                <p id="Space_Worst"></p>
              </div>
            </div>
          </div> */ }


        </div>



      </div >
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

// Selecting Random Value Using between min and max that is pass inside the reset function 
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

