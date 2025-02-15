let data = {
    "Email addresses": ["user@example.com", "firstname.lastname@company.co.uk"],
    "URLs": ["https://www.example.com", "http://subdomain.example.org/pageLinks"],
    "Phone Numbers": ["(123) 456-7890", "123-456-7890", "123.456.7890"],
    "Credit card numbers": ["1234 5678 9012 3456", "1234-5678-9012-3456"],
    "HTML tags": ["<p>", '<div class="example">', '<img src="image.jpg" alt="description">']
};

// Define regex patterns
let regex= {
    "Email addresses": /[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?/g,
    "URLs": /https?:\/\/[a-zA-Z]+\.example\.[a-zA-Z]+(\/[a-zA-Z]+)?/g,
    "Phone Numbers": /\(?\d{3,}\)?(\s|\.|-)\d{3,}(-|.)\d{4,}/g,
    "Credit card numbers": /\d{4,}(\s|-)\d{4,}(\s|-)\d{4,}(\s|-)\d{4,}/g,
    "HTML tags": /<[^>]+>/g
};

//  Loop through the object and applying regex
for (let key in data) {
    console.log(`Matches for ${key}:`);
    
    // Apply regex dynamically using the key
    data[key].forEach(item => console.log(item.match(regex[key])));
}
