import React, { Component } from 'react';

const coursedata3 = [{
  course: 'MCB 104',
  offered: 'every Fall & Spring',
  description: 'Genetics, Genomics, and Cell Biology	',
  notes: 'prereq: MCB 102',
},{
  course: 'MCB 140',
  offered: 'every Spring',
  description: 'General Genetics',
  notes: 'prereq: MCB C100A/CHEM C130/MCB 110 lab section is separate (often offered in Spring)',
},{
  course: ' MCB 143',
  offered: 'see website',
  description: 'Evolution of Genomes, Cells, and Development',
  notes: (
    <div>
      <p>prereq: BIO 1A-1B, MCB C100/MCB 102; MCB 104/MCB 140 recommended.</p>
      <p>Offered by UC Berkeley Extension</p>
    </div>
  ),
},{
  course: 'IB 164',
  offered: 'every Fall',
  description: ' Human Genetics & Genomics',
  notes: '--',
}]

export default coursedata3;
