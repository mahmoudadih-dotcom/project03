//صندوق حفظ القيمة
let count = 0;

// 2. ربط عناصر الـ HTML بالمتغيرات (باستخدام الـ IDs الصحيحة والدقيقة)
const counterValueEl = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateUI() {

    counterValueEl.textContent = count;


    if (count > 0) {
        counterValueEl.style.color = "#2ecc71";
    } else if (count < 0) {
        counterValueEl.style.color = "#c21d1d";
    } else {
        counterValueEl.style.color = "#333";
    }
}

incrementBtn.addEventListener('click', function() {
    count++;        // زيادة المتغير بواقع 1
    updateUI();    
});

decrementBtn.addEventListener('click', function() {
    count--;        // إنقاص المتغير بواقع 1
    updateUI();     // تحديث الشاشة فوراً
});

resetBtn.addEventListener('click', function() {
    count = 0;      // إرجاع المتغير إلى الصفر
    updateUI();     // تحديث الشاشة فوراً
});