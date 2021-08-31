import React from 'react';
function People({ people }) {
  return (
    <div>
      <h1>
        I am {people.name}, i am {people.age} years old, I know {people.skill}
      </h1>
    </div>
  );
}

export default People;
