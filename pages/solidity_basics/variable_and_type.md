# Biến và Kiểu Dữ Liệu trong Solidity

Solidity cung cấp nhiều kiểu dữ liệu khác nhau để giúp bạn quản lý và lưu trữ thông tin trong các hợp đồng thông minh. Dưới đây là một số kiểu dữ liệu phổ biến và cách sử dụng chúng.

## Kiểu Dữ Liệu Cơ Bản

- **Boolean**: Kiểu dữ liệu boolean có hai giá trị: `true` và `false`.
  ````solidity
  bool isActive = true;
  ````

- **Integer**: Solidity hỗ trợ cả số nguyên có dấu (`int`) và không dấu (`uint`). Bạn có thể chỉ định kích thước bit từ 8 đến 256, với bước nhảy là 8.
  ````solidity
  int256 signedNumber = -42;
  uint256 unsignedNumber = 42;
  ````

- **Address**: Kiểu dữ liệu `address` lưu trữ địa chỉ Ethereum, có thể được sử dụng để gửi và nhận Ether.
  ````solidity
  address walletAddress = 0x1234567890123456789012345678901234567890;
  ````

- **String**: Kiểu dữ liệu `string` lưu trữ chuỗi ký tự.
  ````solidity
  string memory greeting = "Hello, Solidity!";
  ````

- **Bytes**: Kiểu dữ liệu `bytes` là một mảng byte động, trong khi `bytes1` đến `bytes32` là các mảng byte tĩnh.
  ````solidity
  bytes32 fixedData = "FixedSizeData";
  bytes dynamicData = "DynamicSizeData";
  ````

## Kiểu Dữ Liệu Phức Tạp

- **Array**: Solidity hỗ trợ cả mảng tĩnh và động.
  ````solidity
  uint256[] dynamicArray;
  uint256[5] fixedArray;
  ````

- **Struct**: `struct` cho phép bạn tạo các kiểu dữ liệu phức tạp hơn bằng cách nhóm các biến lại với nhau.
  ````solidity
  struct Person {
      string name;
      uint256 age;
  }
  ````

- **Mapping**: `mapping` là một cấu trúc dữ liệu ánh xạ các khóa với các giá trị. Nó tương tự như một bảng băm.
  ````solidity
  mapping(address => uint256) public balances;
  ````

## Biến

- **State Variables**: Biến trạng thái được lưu trữ trên blockchain và có thể được truy cập bởi tất cả các hàm trong hợp đồng.
  ````solidity
  uint256 public storedData;
  ````

- **Local Variables**: Biến cục bộ chỉ tồn tại trong phạm vi của một hàm và không được lưu trữ trên blockchain.
  ````solidity
  function set(uint256 x) public {
      uint256 temp = x + 1;
      storedData = temp;
  }
  ````

- **Global Variables**: Solidity cung cấp một số biến toàn cục, như `msg.sender` (địa chỉ của người gọi hàm) và `block.timestamp` (thời gian khối hiện tại).
  ````solidity
  address public owner = msg.sender;
  ````

Các kiểu dữ liệu và biến này là nền tảng để xây dựng các hợp đồng thông minh phức tạp hơn trong Solidity. Bạn có thể kết hợp chúng để tạo ra các cấu trúc dữ liệu và logic phù hợp với nhu cầu của mình.