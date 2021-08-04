const name = { firstName: 'Philip',
lastName: 'Fry' };


const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

const new_obj = {...name,...details};

console.log(new_obj);