const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(event) {
    // prevent browser default functionality
    event.preventDefault();

    // saves the entry text to entriesSection
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    // note: copies the value from entryTextbox to entryDiv
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild(entryDiv);

    // clears input
    entryTextbox.value = '';
    
    // add button to show note
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    // shows only my select note (entryDiv)
    displayEntryButton.addEventListener('click', function() {
        const allEntries = document.querySelectorAll('.single-entry');
        // hide all
        for (let index = 0; index < allEntries.length; index++) {
            allEntries[index].style.display = 'none';
        }
        // show only this
        entryDiv.style.display = 'block';        
    })
    
    count++
}

entryForm.addEventListener('submit', addEntryToDom)