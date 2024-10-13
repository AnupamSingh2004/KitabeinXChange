let bookCount = 1;
const bookFields = document.getElementById('book-fields');
const addBookBtn = document.getElementById('add-book-btn');

// Add another book entry form
addBookBtn.addEventListener('click', function () {
    bookCount++;
    const newBookEntry = document.createElement('div');
    newBookEntry.classList.add('book-entry');
    newBookEntry.innerHTML = `
        <h2>Book ${bookCount}</h2>
        <div class="form-group">
            <label for="bookTitle${bookCount}">Book Title:</label>
            <input type="text" id="bookTitle${bookCount}" name="bookTitle[]" placeholder="Enter the book title" required>
        </div>
        <div class="form-group">
            <label for="authorName${bookCount}">Author Name:</label>
            <input type="text" id="authorName${bookCount}" name="authorName[]" placeholder="Enter the author's name" required>
        </div>
        <div class="form-group">
            <label for="bookCondition${bookCount}">Condition:</label>
            <select id="bookCondition${bookCount}" name="bookCondition[]" required>
                <option value="new">New</option>
                <option value="used">Used - Good</option>
                <option value="used-fair">Used - Fair</option>
            </select>
        </div>
        <div class="form-group">
            <label for="price${bookCount}">Price (₹):</label>
            <input type="number" id="price${bookCount}" name="price[]" placeholder="Set your price" required>
        </div>
        <div class="form-group">
            <label for="exchangeOption${bookCount}">Interested in Exchange?</label>
            <select id="exchangeOption${bookCount}" name="exchangeOption[]" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="form-group">
            <label for="description${bookCount}">Description:</label>
            <textarea id="description${bookCount}" name="description[]" rows="4" placeholder="Add a brief description of the book (Optional)"></textarea>
        </div>
        <div class="form-group">
            <label for="bookImage${bookCount}">Upload Book Image:</label>
            <label class="custom-file-upload">
                <input type="file" id="bookImage${bookCount}" name="bookImage[]" accept="image/*" onchange="previewImage(event, ${bookCount})">
                Choose Image
            </label>
            <img id="previewImage${bookCount}" class="image-preview" alt="Image Preview" style="display:none;">
        </div>
        <button type="button" class="remove-book-btn">Remove Book</button>
        <hr>
    `;
    bookFields.appendChild(newBookEntry);

    // Add event listener for remove button
    newBookEntry.querySelector('.remove-book-btn').addEventListener('click', function () {
        newBookEntry.remove();
    });
});

// Preview image function
function previewImage(event, bookNumber) {
    const preview = document.getElementById(`previewImage${bookNumber}`);
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block'; // Show the image
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none'; // Hide the image if no file is selected
    }
}
