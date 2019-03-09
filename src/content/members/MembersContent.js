import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import Tabs from "../../components/Tabs.js";
import coursedata from "./coursedata.js";
import coursedata5 from "./coursedata5.js";
import coursedata2 from "./coursedata2.js";
import coursedata3 from "./coursedata3.js";
import coursedata4 from "./coursedata4.js";
import coursedata6 from "./coursedata6.js";
import coursecolumns from "./coursecolumn.js";
import paidContent from "./PaidMembersContent.js";
import testdata from "./testdata.js";
import testcolumns from "./testcolumn.js";
import "../../styles/css/Table.css";

const paidMembers = paidContent.map((item) => {
  return (
    <div className="paid__link">
      <a href={item.url}>{item.text}</a>
    </div>
  )
});


const content = {
  aTab: <div className="membersTab a__membersTab">
          <p>
            You’re at Cal and you want to go to vet school,
            so what do you do?  You obviously have a university full
            of courses to help you on your journey, but which courses
            should you take and when should you take them?
            Regardless of your major (you can have literally any major,
            and still go to vet school) there are certain
            “prerequisite” courses that you need to complete upon
            getting accepted into a vet school. Each school has
            different prerequisite courses, and they can change from
            year to year, so you should always check with your specific
            school. Having said that, here are the courses:
          </p>
          <div className="title">
            THE BASICS
          </div>
          <ReactTable
            data={coursedata}
            columns={coursecolumns}
            className="table"
            defaultPageSize={5}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
          />
          <div className="title">
            UPPER DIVISIONS
          </div>
          <p className="p-subject"><span className="subject">Biochemistry</span> (you only need one)!</p>
          <p>** NOTE: CHEM 135 does not meet the
              Biochemistry requirement for UC Davis; thus,
              it is not included here **</p>  
          <ReactTable
            data={coursedata2}
            columns={coursecolumns}
            className="table"
            minRows={2}
            defaultPageSize={5}
          />
          <p className="p-subject"><span className="subject">Genetics</span> (you only need one!)</p>
          <p>** NOTE: IB 141 does not meet the Genetics requirement for UC Davis; 
          thus, it is not included here **</p>
          <ReactTable
            data={coursedata3}
            columns={coursecolumns}
            className="table"
            minRows={2}
            defaultPageSize={5}
          />
          <p className="p-subject"><span className="subject">Physiology</span> (you only need one!)</p>
          <p>** NOTE: IB 132 does not meet the Physiology requirement for UC Davis; 
          thus, it is not included here **</p>
          <ReactTable
            data={coursedata4}
            columns={coursecolumns}
            className="table"
            minRows={2}
            defaultPageSize={5}
          />
          <p className="p-subject"><span className="subject">Microbiology</span> (you only need one lecture and laboratory combination!)</p>
          <p>** NOTE: not required for UC Davis **</p>
          <ReactTable
            data={coursedata5}
            columns={coursecolumns}
            className="table"
            minRows={2}
            defaultPageSize={5}
          />
          <div className="title">
            OTHER
          </div>
          <p>Almost every vet school requires the above requirements along with some 
          random assortment of "other" classes.</p>
          <p>
            Most "other" classes include: STATISTICS (STATS2, STATS20, PUBLIC HEALTH 142A);
            ENGLISH (R1A and R1B courses, English, Rhetoric, and Literature courses should fulfill this);
            PUBLIC SPEAKING (College Writing Program 10A/B); HUMANITIES.
          </p>
          <div className="title">
            FUN CLASSES
          </div>
          <p>So how about fun classes that are not prerequisites for vet school?</p>
          <ReactTable
            data={coursedata6}
            columns={coursecolumns}
            className="table"
            minRows={2}
            defaultPageSize={5}
          />
          <p>However, take heed that prerequisites, requirements, classes, and offerings are continuously 
          changing - never static. Some useful resources are: <br />
          www.aavmc.org/data/files/vmcas/prereqchart.pdf <br />
          career.berkeley.edu/Health/VetPrepCourses <br />
          guide.berkeley.edu/courses/:</p>

          <p>And don’t be afraid to contact vet schools directly; they are very responsive to prospective 
          applicants and encourage questions while steering you in the right direction.</p>
          </div>,
  bTab:
        <div className="membersTab b__membersTab">
          <div className="paid__links">
            {paidMembers}
          </div>
        </div>,
  cTab: <div className="membersTab c__membersTab">
          <ReactTable
            data={testdata}
            columns={testcolumns}
            className="table"
            defaultPageSize={5}
          />
        </div>,
};

export default content;
