import React, { Component } from 'react';

const coursedata = [{
  course: 'CHEM 1A',
  offered: 'every semester',
  description: 'General Chemistry Lecture',
  notes: '--',
}, {
  course: 'CHEM 1AL',
  offered: 'every semester',
  description: 'General Chemistry Lab',
  notes: 'Must be taken with or after CHEM1A',
}, {
  course: 'CHEM 1B',
  offered: 'every Spring and Summer',
  description: 'General Chemistry, Lab included',
  notes: '--',
},{
  course: 'CHEM 3A',
  offered: 'every semester',
  description: 'Organic Chemistry',
  notes: 'Prereq: CHEM1A',
},{
  course: 'CHEM 3AL',
  offered: 'every semester',
  description: 'Organic Chemistry Lab',
  notes: 'must be taken with or after Chem 3A',
},{
  course: 'CHEM 3B',
  offered: 'every semester',
  description: 'Organic Chemistry',
  notes: 'Prereq: CHEM 3A',
},{
  course: 'CHEM 3BL',
  offered: 'every semester',
  description: 'Organic Chemistry Lab',
  notes: 'must be taken with or after CHEM 3B',
},{
  course: 'PHYSICS 8A or 7A',
  offered: 'every semester',
  description: 'Physics, lab included',
  notes: '7A is designed for Engineering and Physics majors & is more challenging than 8A',
},{
  course: 'PHYSICS 8B or 7B',
  offered: 'every semester',
  description: 'Physics, lab included',
  notes: '7B is designed for Engineering and Physics majors & is more challenging than 8B',
},{
  course: 'BIO1A',
  offered: 'every semester',
  description: 'General Biology',
  notes: 'must be taken with BIO 1AL; Prereq: CHEM 1A',
},{
  course: 'BIO1AL',
  offered: 'every semester',
  description: 'General Biology Lab',
  notes: 'must be taken with BIO 1A; Prereq: CHEM 1A',
},{
  course: 'BIO1B',
  offered: 'every semester',
  description: 'General Biology, lab included',
  notes: 'can be taken before BIO 1A',
},{
  course: 'MATH 16A or 1A',
  offered: 'every semester',
  description: 'Single Variable Calculus',
  notes: (
    <div>
      <p>1A is intended for math and physical science majors and is more challenging than 16A which is designed for life and social science majors.</p>
      <p>NOTE: MCB/IB majors must take MATH 1A+1B or MATH 10A+10B - check with veterinary school if they will accept MATH 10A+10B</p>
    </div>
  ),
},{
  course: 'MATH 16A or 1A',
  offered: 'every semester',
  description: 'Single Variable Calculus',
  notes: (
    <div>
      <p>1A is intended for math and physical science majors and is more challenging than 16A which is designed for life and social science majors. </p>
      <p>NOTE: MCB/IB majors must take MATH 1A+1B or MATH 10A+10B - check with veterinary school if they will accept MATH 10A+10B</p>
    </div>
  ),
}]

export default coursedata;
