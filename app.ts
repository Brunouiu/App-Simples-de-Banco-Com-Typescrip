import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TestAccount } from './class/TestAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1,'Bruno',1)
console.log(peopleAccount)
peopleAccount.deposit(100)

peopleAccount.Loan(10)
peopleAccount.withdraw(1000)

const  companyAccount: CompanyAccount = new CompanyAccount('Dio',20)
companyAccount.deposit(100)

companyAccount.makeLoan(100)

const test : TestAccount = new TestAccount ('TESTE', 2)
test.makeTest(100)


