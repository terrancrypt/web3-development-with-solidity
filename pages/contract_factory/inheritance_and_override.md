# Kế thừa và Ghi đè trong Solidity

## Kế thừa trong Solidity
- **Kế thừa** là một tính năng cho phép một hợp đồng thừa hưởng các thuộc tính và phương thức từ một hợp đồng khác.
- Solidity hỗ trợ kế thừa đa cấp, cho phép một hợp đồng kế thừa từ nhiều hợp đồng khác.

### Cú pháp kế thừa
Để kế thừa từ một hợp đồng khác, sử dụng từ khóa `is`:

```solidity
// BaseContract.sol
pragma solidity ^0.8.0;
contract BaseContract {
    function greet() public pure returns (string memory) {
        return "Hello from BaseContract";
    }
}
```

```solidity
// DerivedContract.sol
pragma solidity ^0.8.0;

import "./BaseContract.sol";

contract DerivedContract is BaseContract {
// DerivedContract thừa hưởng hàm greet() từ BaseContract
}
```


## Ghi đè trong Solidity
- **Ghi đè** cho phép một hợp đồng con cung cấp một triển khai mới cho một hàm đã được định nghĩa trong hợp đồng cha.
- Để ghi đè một hàm, sử dụng từ khóa `override`.

### Cú pháp ghi đè
Khi ghi đè một hàm, bạn cần chỉ định từ khóa `override` trong hợp đồng con và `virtual` trong hợp đồng cha nếu hàm đó có thể bị ghi đè.

```solidity
// BaseContract.sol
pragma solidity ^0.8.0;

contract BaseContract {
    function greet() public pure virtual returns (string memory) {
        return "Hello from BaseContract";
    }
}
```

```solidity
// DerivedContract.sol
pragma solidity ^0.8.0;

import "./BaseContract.sol";

contract DerivedContract is BaseContract {
    function greet() public pure override returns (string memory) {
        return "Hello from DerivedContract";
    }
```

## Kết luận
Kế thừa và ghi đè là những tính năng mạnh mẽ trong Solidity, giúp tái sử dụng mã và mở rộng chức năng của các hợp đồng thông minh. Hiểu rõ cách sử dụng chúng sẽ giúp bạn xây dựng các hợp đồng phức tạp và hiệu quả hơn.