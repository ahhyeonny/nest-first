import ah from './ah.service'


interface Company {
  name: string;
}
interface IMirero {
  id: number;
  name: string;
  tel: number;
  company: Company;
}

const data: IMirero = {
  id: 1,
  company: {
    name: '123',
  },
  name: '345345',
  tel: 123,
};
// 구조분해 할당
// 스프레드 연산자
// Promise

const arr: IMirero[] = [{ ...data }, { ...data } , { ...data }] 
// array.push({...data})


sendAkka(data);

1
function sendAkka(Member member) {
    const tel = member.tel;
    if (tel ...Member) {

    }
    `insert into ${member.Member} , ${member.Tel}` [Symbol].
}

// const { company } = data;
const aa = {
  아현회사: { ...data.company },
};

console.log(data);
console.log(company);
