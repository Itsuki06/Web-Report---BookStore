var currentPage = 1; // Trang hiện tại
var totalPages = 100; // Số lượng trang tổng cộng
var pageSize = 10; // Số lượng trang được hiển thị trên mỗi trang
var maxButtons = 10; // Số lượng nút ấn cho trang tối đa được hiển thị

var firstButton = document.getElementById('firstButton');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var lastButton = document.getElementById('lastButton');
var pageButtonsDiv = document.getElementById('pageButtons');

// Hàm để tạo các nút ấn cho trang
function createPageButtons() {
    // Xóa các nút ấn cũ
    pageButtonsDiv.innerHTML = '';

    // Tính toán trang bắt đầu và trang kết thúc
    var startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    var endPage = Math.min(totalPages, startPage + maxButtons - 1);

    // Điều chỉnh startPage và endPage nếu endPage vượt quá totalPages
    if (endPage - startPage + 1 < maxButtons) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    // Tạo nút ấn cho từng trang trong dải
    for (var i = startPage; i <= endPage; i++) {
        var button = document.createElement('button');
        button.textContent = i; // Số trang
        if (i === currentPage) {
            button.classList.add('active'); // In đậm cho trang đang được chọn
        }
        button.addEventListener('click', function() {
            currentPage = parseInt(this.textContent);
            console.log("Chuyển đến trang: " + currentPage);
            // Không chuyển hướng đến trang mới
            createPageButtons(); // Cập nhật lại các nút ấn cho trang
        });
        pageButtonsDiv.appendChild(button);
    }
}

// Xử lý sự kiện khi nút "Trang đầu tiên" được nhấn
firstButton.addEventListener('click', function() {
    currentPage = 1;
    console.log("Chuyển đến trang đầu tiên");
    createPageButtons(); // Cập nhật lại các nút ấn cho trang
});

// Xử lý sự kiện khi nút "Trang trước" được nhấn
prevButton.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        console.log("Chuyển đến trang trước: " + currentPage);
        createPageButtons(); // Cập nhật lại các nút ấn cho trang
    }
});

// Xử lý sự kiện khi nút "Trang tiếp theo" được nhấn
nextButton.addEventListener('click', function() {
    if (currentPage < totalPages) {
        currentPage++;
        console.log("Chuyển đến trang tiếp theo: " + currentPage);
        createPageButtons(); // Cập nhật lại các nút ấn cho trang
    }
});

// Xử lý sự kiện khi nút "Trang cuối cùng" được nhấn
lastButton.addEventListener('click', function() {
    currentPage = totalPages;
    console.log("Chuyển đến trang cuối cùng");
    createPageButtons(); // Cập nhật lại các nút ấn cho trang
});

// Tạo các nút ấn cho trang ban đầu
createPageButtons();
