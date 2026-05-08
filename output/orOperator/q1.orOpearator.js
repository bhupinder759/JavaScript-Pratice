function showMarks(marks) {
    const msg = marks || "No marks available";
    console.log(`grade: ${msg}`);
}

showMarks(85); // grade: 85
showMarks(0); // grade: No marks available
showMarks(null); // grade: No marks available
showMarks(undefined); // grade: No marks available
showMarks(""); // grade: No marks available

// resion (hinglish) : 0, null, undefined, "" ye sab false hote hai or baki sare true hote hai. isliye marks 0 hone par bhi msg me No marks available print hoga.