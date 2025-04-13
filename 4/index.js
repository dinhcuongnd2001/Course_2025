// Chọn tất cả các nút hướng dẫn
const guideButtons = document.querySelectorAll('.guide-btn');

// Chọn tất cả các nút lời giải
const solutionButtons = document.querySelectorAll('.solution-btn');

// Xử lý sự kiện cho các nút hướng dẫn
guideButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Tìm phần hướng dẫn tương ứng trong cùng div.exercise
        const exercise = button.closest('.exercise');
        const guide = exercise.querySelector('.guide');

        // Toggle class hidden
        guide.classList.toggle('hidden');

        // Cập nhật văn bản nút
        button.textContent = guide.classList.contains('hidden') ? 'Hiện hướng dẫn' : 'Ẩn hướng dẫn';
    });
});

// Xử lý sự kiện cho các nút lời giải
solutionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Tìm phần lời giải tương ứng trong cùng div.exercise
        const exercise = button.closest('.exercise');
        const solution = exercise.querySelector('.solution');

        // Toggle class visible
        solution.classList.toggle('visible');

        // Cập nhật văn bản nút
        button.textContent = solution.classList.contains('visible') ? 'Ẩn lời giải' : 'Xem lời giải';
    });
});