# Mapping trong Solidity

`Mapping` là một cấu trúc dữ liệu trong Solidity cho phép ánh xạ các khóa với các giá trị. Nó tương tự như một bảng băm và rất hữu ích để lưu trữ và truy xuất dữ liệu một cách hiệu quả.

## Định nghĩa Mapping

Mapping được định nghĩa bằng từ khóa `mapping`, theo sau là kiểu dữ liệu của khóa và kiểu dữ liệu của giá trị.

```solidity
mapping(address => uint256) public balances;
```

Trong ví dụ trên, `balances` là một mapping ánh xạ từ địa chỉ Ethereum (`address`) đến số dư (`uint256`).

## Sử dụng Mapping

### Gán Giá Trị

Bạn có thể gán giá trị cho một khóa trong mapping bằng cách sử dụng cú pháp tương tự như mảng.

```solidity
function setBalance(address user, uint256 amount) public {
    balances[user] = amount;
}
```

### Truy Xuất Giá Trị

Truy xuất giá trị từ mapping cũng sử dụng cú pháp tương tự như mảng.

```solidity
function getBalance(address user) public view returns (uint256) {
    return balances[user];
}
```

### Xóa Giá Trị

Bạn có thể xóa giá trị trong mapping bằng cách gán giá trị mặc định cho khóa đó.

```solidity
function resetBalance(address user) public {
    delete balances[user];
}


## Lưu Ý

- **Không thể duyệt qua mapping**: Mapping không hỗ trợ duyệt qua các phần tử như mảng. Bạn không thể lấy danh sách tất cả các khóa hoặc giá trị trong mapping.
- **Giá trị mặc định**: Nếu một khóa không tồn tại trong mapping, nó sẽ trả về giá trị mặc định của kiểu dữ liệu giá trị (ví dụ: `0` cho `uint256`).
- **Sử dụng với Structs**: Mapping thường được sử dụng kết hợp với structs để lưu trữ dữ liệu phức tạp hơn.

### Ví dụ: Mapping với Struct

```solidity
struct Person {
    string name;
    uint256 age;
}

mapping(address => Person) public people;

function addPerson(address user, string memory name, uint256 age) public {
    people[user] = Person(name, age);
}

function getPerson(address user) public view returns (string memory, uint256) {
    Person memory person = people[user];
    return (person.name, person.age);
}
```

Mapping là một công cụ mạnh mẽ trong Solidity, cho phép bạn quản lý dữ liệu một cách hiệu quả và linh hoạt. Tuy nhiên, cần lưu ý rằng mapping không hỗ trợ duyệt qua các phần tử, do đó bạn cần có cách khác để theo dõi các khóa nếu cần.