let selectedLink = ''; // Biến toàn cục để lưu liên kết của CV được chọn

function filterImages(category) {
    let lists = document.querySelectorAll('.image-list');
    lists.forEach(list => {
        if (category === 'all') {
            list.style.display = 'flex'; // Hiển thị tất cả
            shuffleList(); // Xáo trộn khi chọn "Tất cả"
        } else if (list.classList.contains(category)) {
            list.style.display = 'flex'; // Hiển thị các hình ảnh thuộc category
        } else {
            list.style.display = 'none'; // Ẩn các hình ảnh không thuộc category
        }
    });

    // Cập nhật nút lọc
    document.querySelectorAll('.filter-buttons button').forEach(button => {
        if (button.id === category + '-button' || category === 'all' && button.id === 'all-button') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function shuffleList() {
    let container = document.getElementById('image-container');
    let lists = Array.from(container.querySelectorAll('.image-list'));
    // Xáo trộn danh sách
    for (let i = lists.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lists[i], lists[j]] = [lists[j], lists[i]]; // Hoán đổi
    }
    // Thêm lại các danh sách đã xáo trộn vào container
    lists.forEach(list => container.appendChild(list));
}

function openModal(imageSrc, link) {
    document.getElementById('modal').style.display = 'flex'; // Hiển thị modal
    document.getElementById('modal-image').src = imageSrc; // Cập nhật hình ảnh trong modal
    selectedLink = link; // Lưu liên kết của CV được chọn
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Ẩn modal
}

function applyChanges() {
    if (selectedLink) {
        window.open(selectedLink, '_blank'); // Mở liên kết đã lưu trong tab mới
    }
    closeModal(); // Đóng modal
}

// Hiển thị tất cả hình ảnh khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    filterImages('all');
});
