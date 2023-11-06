class BankAccount {
	constructor(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}

	deposit(amt) {
		this.balance += amt;
	}

	withdrawal(amt) {
		if (this.balance < amt) {
			console.log("Balance is too low");
		} else {
			this.balance -= amt;
		}
	}

	showInfo() {
		console.log(
			`Account Number: ${this.accountNumber}, Balance: $${this.balance}.00`
		);
	}
}

const fredAccount = new BankAccount("123456789", 5000);
// console.log(fredAccount);

fredAccount.showInfo();
fredAccount.deposit(4000);
fredAccount.showInfo();
fredAccount.withdrawal(6000);
fredAccount.showInfo();
fredAccount.withdrawal(8000);
fredAccount.showInfo();

// University

class University {
	constructor(name, departments) {
		this.name = name;
		this.departments = departments;
	}

	addDepartment(department) {
		this.departments.push(department);
	}

	removeDepartment(department) {
		const filteredList = this.departments.filter((d) => d !== department);
		this.departments = filteredList;
	}
}

const delsu = new University("Delta State University", [
	"Mathematics",
	"Economics",
	"Marine Engineering",
]);
const fupre = new University("FUPRE", [
	"Mathematics",
	"Economics",
	"Marine Engineering",
]);

delsu.addDepartment("Computer Science");

console.log(delsu);

delsu.removeDepartment("Economics");
console.log(delsu);

const { name: delsuName } = delsu; // alias
const { name: fupreName } = fupre;
console.log(name);

let x = 4;
let y = 10;
let z = 5;

const calc = {
	x,
	y,
	a: z,
};

console.log(calc);
