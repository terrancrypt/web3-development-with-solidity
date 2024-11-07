# Triển khai Hợp đồng Thông minh với Remix IDE

## Bước 1: Truy cập Remix IDE

1. Mở trình duyệt web và truy cập [Remix IDE](https://remix.ethereum.org/).

## Bước 2: Tạo Tệp Hợp đồng

1. Trong Remix, nhấp vào biểu tượng "File Explorer" ở bên trái.
2. Nhấp vào nút "New File" và đặt tên cho tệp của bạn, ví dụ: `SimpleStorage.sol`.
3. Nhập mã hợp đồng của bạn vào tệp. Ví dụ:

    ````solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    contract SimpleStorage {
        uint256 private storedData;

        function set(uint256 x) public {
            storedData = x;
        }

        function get() public view returns (uint256) {
            return storedData;
        }
    }
    ````

## Bước 3: Biên dịch Hợp đồng

1. Nhấp vào biểu tượng "Solidity Compiler" (hình chữ nhật và mũi tên) ở bên trái.
2. Chọn phiên bản trình biên dịch phù hợp với hợp đồng của bạn.
3. Nhấp vào nút "Compile SimpleStorage.sol" để biên dịch hợp đồng.

## Bước 4: Triển khai Hợp đồng

1. Nhấp vào biểu tượng "Deploy & Run Transactions" (hình máy tính) ở bên trái.
2. Chọn môi trường triển khai từ danh sách thả xuống. Bạn có thể chọn "JavaScript VM" để triển khai trên máy ảo cục bộ hoặc "Injected Web3" để triển khai trên mạng Ethereum thực tế (yêu cầu MetaMask).
3. Đảm bảo hợp đồng của bạn được chọn trong danh sách thả xuống "Contract".
4. Nhấp vào nút "Deploy" để triển khai hợp đồng.

## Bước 5: Tương tác với Hợp đồng

1. Sau khi triển khai, bạn sẽ thấy hợp đồng của mình xuất hiện trong phần "Deployed Contracts".
2. Mở rộng hợp đồng để xem các hàm có sẵn.
3. Sử dụng các nút để gọi các hàm `set` và `get` để tương tác với hợp đồng.

## Lưu ý

- **Chi phí Gas**: Khi triển khai trên mạng Ethereum thực tế, bạn sẽ cần Ether để trả phí gas.
- **Kiểm tra kỹ mã nguồn**: Đảm bảo mã nguồn của bạn không có lỗi và đã được kiểm tra kỹ trước khi triển khai trên mạng chính.

Triển khai hợp đồng thông minh với Remix IDE là một quy trình đơn giản và trực quan, giúp bạn nhanh chóng đưa hợp đồng của mình lên blockchain để thử nghiệm và sử dụng.