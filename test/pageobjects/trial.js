function getMonthName(monthNumber) {
    // Create a date object with the given month number
    const date = new Date();
    date.setMonth(monthNumber - 1); // monthNumber is 1-based, but setMonth is 0-based
  
    // Use Intl.DateTimeFormat to get the month name
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    return monthName;
  }
  
  // Example usage
  console.log(getMonthName(1)); // January
  console.log(getMonthName(2)); // February
  