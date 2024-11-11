# Bố cục tệp nguồn Solidity

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/WhjUzqGXHdc?si=T5xjwm-OoT-5Q758" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>

Dưới đây là một ví dụ về cách bố trí tệp nguồn Solidity, kèm theo một ví dụ đơn giản về hợp đồng thông minh:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Định nghĩa hợp đồng
contract SimpleStorage {
    // Biến lưu trữ một số nguyên
    uint256 private storedData;

    // Sự kiện được phát ra khi dữ liệu được cập nhật
    event DataStored(uint256 data);

    // Hàm để lưu trữ một số nguyên
    function set(uint256 x) public {
        storedData = x;
        emit DataStored(x);
    }

    // Hàm để lấy số nguyên đã lưu trữ
    function get() public view returns (uint256) {
        return storedData;
    }
}
```

- **License Identifier**: Dòng đầu tiên thường là một chú thích về giấy phép, ví dụ: // SPDX-License-Identifier: MIT.
- **Pragma Directive**: Sử dụng để chỉ định phiên bản của trình biên dịch Solidity, ví dụ: pragma solidity ^0.8.0;.
- **Import Statements**: (Nếu cần) Sử dụng để nhập các tệp Solidity khác.
- **Contract Definition**: Định nghĩa hợp đồng bắt đầu với từ khóa contract, theo sau là tên hợp đồng.
- **State Variables**: Khai báo các biến trạng thái để lưu trữ dữ liệu.
- **Events**: Khai báo các sự kiện để phát ra thông tin khi có sự thay đổi trạng thái.
- **Functions**: Định nghĩa các hàm để thực hiện các hành động, bao gồm:
- **Constructor**: (Nếu cần) Hàm khởi tạo chạy một lần khi hợp đồng được triển khai.
- **Public/External Functions**: Hàm có thể được gọi từ bên ngoài hợp đồng.
- **Internal/Private Functions**: Hàm chỉ có thể được gọi từ bên trong hợp đồng.
- **Modifiers**: (Nếu cần) Được sử dụng để thay đổi hành vi của các hàm.
- **Fallback/Receive Functions**: (Nếu cần) Được sử dụng để xử lý các giao dịch không có dữ liệu hoặc không khớp với hàm nào.

Ví dụ trên là một hợp đồng đơn giản để lưu trữ và truy xuất một số nguyên. Bạn có thể mở rộng hợp đồng này với các tính năng phức tạp hơn tùy theo nhu cầu của mình.