var mainInput = document.getElementsByClassName('add-title-input')[0],
    mainDescInput = document.getElementsByClassName('add-desc-input')[0],
    mainForm = document.getElementsByClassName('main-form')[0],
    sortBtn = document.getElementsByClassName('sort-btn')[0],
    mainList = document.getElementsByClassName('main-list')[0],
    filterInp = document.getElementsByClassName('filter-inp')[0],
    listItem = document.createElement('li');

var toggleFilter = 'asc';

var allBooks = [{
        title: 'Harry',
        description: 'Potter\'s life'
    },
    {
        title: 'Dead',
        description: 'Pool'
    },
    {
        title: 'Titanic',
        description: 'Dead'
    },
    {
        title: 'Mission Impossible',
        description: 'Tom Cruise'
    }
];

generateRows(allBooks);

mainForm.onsubmit = function (e) {
    e.preventDefault();

    var title = mainInput.value || 'Unknown',
        desc = mainDescInput.value || '...';

    var newObj = {
        title: title,
        description: desc
    };
    allBooks.push(newObj);
    generateRows(allBooks);
    mainInput.value = '';
    mainDescInput.value = '';
}

// create and show new rows

function generateRows(books) {
    if (Array.isArray(books)) {
        mainList.innerHTML = '';
        books.map(function (item) {
            var newListItem = listItem.cloneNode(false);
            newListItem.innerText = item.title;
            mainList.append(newListItem);
        });
    }
}

// Filter list rows


filterInp.onkeyup = function () {
    var matchedBooks = allBooks.filter(function (data) {
        var title = data.title.toLowerCase(),
            desc = data.description.toLowerCase(),
            filterTerm = filterInp.value.toLowerCase();

        return title.indexOf(filterTerm) !== -1 || desc.indexOf(filterTerm) !== -1;
    });
    setTimeout(function () {
        generateRows(matchedBooks);
    }, 300);
}

sortBtn.onclick = function () {
    toggleFilter = toggleFilter === 'asc' ? 'desc' : 'asc';
    generateRows(allBooks.sort(function (a, b) {
        if (toggleFilter === 'asc') {
            if (a.title < b.title) {
                return -1;
            }

            if (a.title > b.title) {
                return 1;
            }
        } else if (toggleFilter === 'desc') {
            if (a.title > b.title) {
                return -1;
            }

            if (a.title < b.title) {
                return 1;
            }
        }
    }));
}