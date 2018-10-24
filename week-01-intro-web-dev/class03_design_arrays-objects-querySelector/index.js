/* eslint no-console: "off" */
/* exported tryQuerySelector */
'use strict';

// eslint-disable-next-line
var xIsTheNumber = 12;


function tryQuerySelector() {
    var mealInputs = document.querySelectorAll('input[name="meal"]');

    for(var i = 0; i < mealInputs.length; i++) {
        var input = mealInputs[i];
        console.log(input.value, input.id, input.checked);
    }

    var selectedMealInput = document.querySelector('input[name="meal"]:checked');

    if(selectedMealInput) {
        console.log(selectedMealInput.value);
    }
    else {
        console.log('no meal selected');
    }

    console.log(xIsTheNumber);
}

var pets = ['felix', 'cub', 'tweety'];

for(var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

var phrase = 'howdy hoe';

for(var j = 0; j < phrase.length; j++) {
    console.log(phrase[j]);
}
