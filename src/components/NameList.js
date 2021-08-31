import React from 'react';
import People from './People';

function NameList() {
  // const names = ['shivashankara', 'Ashwini', 'Mallappa', 'Lalithamba'];
  const peoples = [
    { id: 1, name: 'shivashankara', age: 30, skill: 'React' },
    { id: 2, name: 'Ashwini', age: 32, skill: 'React' },
    { id: 3, name: 'Lalithamba', age: 33, skill: 'React' }
  ];
  // const nameLi = names.map((name, index) => (
  //   <h1>
  //     {index},{name}
  //   </h1>
  // ));
  const peopleList = peoples.map(people => <People people={people} />);
  return <div>{peopleList}</div>;
}

export default NameList;
