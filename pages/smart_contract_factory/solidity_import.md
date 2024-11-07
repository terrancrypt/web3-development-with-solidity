# Sử dụng `import` trong Solidity

## Tại sao cần sử dụng `import`?
- **Tái sử dụng mã**: Giúp sử dụng lại các đoạn mã đã viết trong các tệp khác.
- **Tổ chức mã**: Giúp mã nguồn trở nên gọn gàng và dễ quản lý hơn.
- **Phân chia trách nhiệm**: Cho phép chia nhỏ hợp đồng thành các phần nhỏ hơn, mỗi phần có một trách nhiệm cụ thể.

## Cách sử dụng `import`
Trong Solidity, bạn có thể sử dụng `import` để đưa mã từ một tệp khác vào tệp hiện tại. Dưới đây là một số cách sử dụng `import`:

### Import toàn bộ tệp

```solidity
import "./MyContract.sol";
```

### Import với bí danh

```solidity
import "./MyContract.sol" as MyAlias;
```

### Import các thành phần cụ thể

```solidity
import {ContractA, ContractB} from "./MyContracts.sol";
```

## Ví dụ
Giả sử bạn có một tệp `Math.sol` chứa các hàm toán học:

```solidity
// Math.sol
pragma solidity ^0.8.0;

library Math {
    function add(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }
}
```