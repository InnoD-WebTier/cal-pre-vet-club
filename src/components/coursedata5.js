import React, { Component } from 'react';

const coursedata5 = [{
  course: 'MCB C112/PMB C112',
  offered: 'every Fall',
  description: 'General Microbiology',
  notes: (
    <div>
      <p>prereq: MCB 102/ MCB 100A/ CHEM C130</p>
      <p>Lab section is separate (offered every semester)</p>
    </div>
  ),
},{
  course: 'MCB C112L/PMB C112L',
  offered: 'every Fall and Spring',
  description: 'General Microbiology Laboratory',
  notes: 'must be taken after or concurrently with MCB C112/PMB C112',
},{
  course: 'PUBLIC HEALTH 162A',
  offered: 'every Fall and Summer',
  description: 'Public Health Microbiology',
  notes: 'lab section is separate (Public Health 162L)',
},{
  course: ' PUBLIC HEALTH 162L',
  offered: 'every Fall and Summer',
  description: ' Public Health Microbiology Laboratory',
  notes: 'must be taken after or concurrently with Public Health 162A',
}]

export default coursedata5;
