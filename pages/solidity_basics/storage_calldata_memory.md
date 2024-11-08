# Storage, Calldata, và Memory trong Solidity

## Storage

- **Đặc điểm**: 
  - `storage` là nơi lưu trữ dữ liệu vĩnh viễn trên blockchain.
  - Dữ liệu trong `storage` được duy trì giữa các giao dịch và có chi phí lưu trữ cao.

- **Sử dụng**: 
  - Thường được sử dụng cho các biến trạng thái của hợp đồng.

- **Ví dụ**:
  ````solidity
  contract Example {
      uint256 public storedData; // Biến trạng thái được lưu trữ trong storage
  }
  ````

## Calldata

- **Đặc điểm**: 
  - `calldata` là vùng nhớ chỉ đọc, được sử dụng để lưu trữ dữ liệu hàm đầu vào.
  - Dữ liệu trong `calldata` không thể thay đổi và có chi phí thấp hơn so với `storage`.

- **Sử dụng**: 
  - Thường được sử dụng cho các tham số của hàm `external`.

- **Ví dụ**:
  ````solidity
  function processData(uint256[] calldata data) external {
      // Xử lý dữ liệu từ calldata
  }
  ````

## Memory

- **Đặc điểm**: 
  - `memory` là vùng nhớ tạm thời, chỉ tồn tại trong thời gian thực thi hàm.
  - Dữ liệu trong `memory` có thể thay đổi và không được lưu trữ sau khi hàm kết thúc.

- **Sử dụng**: 
  - Thường được sử dụng cho các biến cục bộ và tham số của hàm `public` hoặc `internal`.

- **Ví dụ**:
  ````solidity
  function manipulateData(uint256[] memory data) public pure returns (uint256[] memory) {
      // Thay đổi dữ liệu trong memory
      data[0] = 42;
      return data;
  }
  ````

## Tóm tắt

- **Storage**: Lưu trữ dữ liệu vĩnh viễn, chi phí cao, dùng cho biến trạng thái.
- **Calldata**: Chỉ đọc, chi phí thấp, dùng cho tham số hàm `external`.
- **Memory**: Tạm thời, có thể thay đổi, dùng cho biến cục bộ và tham số hàm `public`/`internal`.

Hiểu rõ sự khác biệt giữa `storage`, `calldata`, và `memory` là rất quan trọng để tối ưu hóa chi phí và hiệu suất của hợp đồng thông minh trong Solidity.