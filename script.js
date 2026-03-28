let cart = JSON.parse(localStorage.getItem('myCart')) || [];

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartCount();
    alert("Đã thêm " + name + " vào giỏ hàng!");
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Khi nhấn vào biểu tượng giỏ hàng sẽ tạo tin nhắn Zalo tổng hợp
document.getElementById('cart-icon').onclick = function() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    
    let message = "Chào Toàn, tôi muốn mua các món sau:\n";
    let total = 0;
    cart.forEach((item, index) => {
        message += (index + 1) + ". " + item.name + " - " + item.price.toLocaleString() + "đ\n";
        total += item.price;
    });
    message += "Tổng cộng: " + total.toLocaleString() + "đ";
    
    // Thay số Zalo của bạn vào đây
    let zaloLink = "https://zalo.me/0943843061?text=" + encodeURIComponent(message);
    window.open(zaloLink, '_blank');
};

// Cập nhật số lượng khi mới tải trang
updateCartCount();