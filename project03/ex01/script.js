console.log("hello");

function calculateGrade(score) {
    
    if (typeof score !== 'number' || isNaN(score) || score < 0 || score > 100) {
        return "Invalid input";
    }

if (score>=90){return"A";}
else if (score>=80){return"B";}
else if (score>=70){return"C";}
else if (score >= 60) {return 'D';} 
else {return 'F';}
}
function checkAccess(age, hasTicket) {
    
    if (typeof age !== 'number' || typeof hasTicket !== 'boolean') {
        return false;
    } return age >= 18 && hasTicket === true;
}
// اختبار دالة calculateGrade مع الحالات المختلفة والحدودية
console.log("--- Testing calculateGrade ---");
console.log("Score 100:", calculateGrade(100)); // النتيجة المتوقعة: A
console.log("Score 90:", calculateGrade(90));   // النتيجة المتوقعة: A
console.log("Score 89:", calculateGrade(89));   // النتيجة المتوقعة: B
console.log("Score 60:", calculateGrade(60));   // النتيجة المتوقعة: D
console.log("Score 59:", calculateGrade(59));   // النتيجة المتوقعة: F
console.log("Score 0:", calculateGrade(0));     // النتيجة المتوقعة: F
console.log("Score -1:", calculateGrade(-1));   // النتيجة المتوقعة: Invalid input
console.log("Score 101:", calculateGrade(101)); // النتيجة المتوقعة: Invalid input
console.log("Score '90':", calculateGrade('90')); // النتيجة المتوقعة: Invalid input

// اختبار دالة checkAccess مع الحالات المختلفة
console.log("--- Testing checkAccess ---");
console.log("Age 20, Ticket true:", checkAccess(20, true));   // النتيجة المتوقعة: true
console.log("Age 17, Ticket true:", checkAccess(17, true));   // النتيجة المتوقعة: false
console.log("Age 20, Ticket false:", checkAccess(20, false)); // النتيجة المتوقعة: false
console.log("Age invalid:", checkAccess('20', true));     // النتيجة المتوقعة: false