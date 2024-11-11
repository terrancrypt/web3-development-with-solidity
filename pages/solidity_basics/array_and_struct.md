# Mảng (Array) và Cấu trúc (Struct) trong Solidity

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/qQyIeuJ1tqo?si=jdbNItFf9ZGVJOam" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>

## Mảng (Array)

Mảng trong Solidity có thể là mảng tĩnh hoặc mảng động. Mảng tĩnh có kích thước cố định, trong khi mảng động có thể thay đổi kích thước.

### Mảng Tĩnh

Mảng tĩnh có kích thước cố định và không thể thay đổi sau khi được khai báo.

```solidity
uint256[5] fixedArray; // Mảng tĩnh với 5 phần tử
```

### Mảng Động

Mảng động có thể thay đổi kích thước bằng cách sử dụng các phương thức như `push` và `pop`.

```solidity
uint256[] dynamicArray;

function addElement(uint256 element) public {
    dynamicArray.push(element); // Thêm phần tử vào cuối mảng
}

function removeLastElement() public {
    dynamicArray.pop(); // Xóa phần tử cuối cùng của mảng
}

function getElement(uint256 index) public view returns (uint256) {
    return dynamicArray[index]; // Truy cập phần tử tại chỉ số index
}
```


## Cấu trúc (Struct)

Struct cho phép bạn tạo các kiểu dữ liệu phức tạp hơn bằng cách nhóm các biến lại với nhau. Struct có thể được sử dụng để tổ chức dữ liệu một cách có cấu trúc.

### Định nghĩa và Sử dụng Struct

```solidity
struct Person {
    string name;
    uint256 age;
}

Person[] public people;

function addPerson(string memory name, uint256 age) public {
    Person memory newPerson = Person(name, age);
    people.push(newPerson);
}

function getPerson(uint256 index) public view returns (string memory, uint256) {
    Person memory person = people[index];
    return (person.name, person.age);
}
```

### Truy cập và Thay đổi Dữ liệu trong Struct

Bạn có thể truy cập và thay đổi dữ liệu trong struct bằng cách sử dụng các thuộc tính của nó.

```solidity
function updatePersonName(uint256 index, string memory newName) public {
    people[index].name = newName;
}
```


Mảng và struct là các công cụ mạnh mẽ trong Solidity, cho phép bạn quản lý và tổ chức dữ liệu một cách hiệu quả. Bạn có thể kết hợp chúng để tạo ra các cấu trúc dữ liệu phức tạp hơn, phù hợp với nhu cầu của hợp đồng thông minh của bạn.