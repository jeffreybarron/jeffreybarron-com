// pages/experience.js [Server Side]
import Link from "next/link";
import PagesLayout from "../Layout/PagesLayout";


export default function CvPage() {
  return (
    <PagesLayout>
      <h1>Curriculum vitae</h1>
      <p>An account of my education, qualifications, previous occupations and acquired skills.</p>
      
      <section className="">
        <h2>Tertiary Education</h2>
        <div>
          <h3>Graduate Certificate in Computing</h3>
          <p>Completed: 2022</p>
        </div>
        <div>
          <h3>Bachelor of Psychological Science (Minor in Neuroscience)</h3>
          <p>Completed: 2021</p>
        </div>
        <div>
          <h3>Published Work</h3>
          <p className="italic">Roodenrys, S., Guitard, D., Miller, L. M., Saint-Aubin, J., & <span className="text-tertiary">Barron, J. M.</span> (2022). Phonological similarity in the serial recall task hinders item recall, not just order. British Journal of Psychology. <Link href="https://doi.org/10.1111/bjop.12575" className="underline">https://doi.org/10.1111/bjop.12575</Link></p> 
        </div>
      </section>
      <section>
        <h2>Soft Skills</h2>
        <ul>
          <li>I enjoy finding creative solutions to new and difficult problems and figuring out why things are as they are.</li>
          <ul>
            <li>Being able to fix things, is a useful side-effect of this.</li>
            <li>I am a concientious self-starter.</li>
          </ul>
          <li>I am quite pragmatic about most things, however, one challenge I need to be mindful of, is an occasional fall back into some perfectist tendencies, this can slow my productivity on occasion.</li>
          <li>I am content contributing to a team, however, I do prefer to lead given the opportunity. I prefer to lead by example and I am comfortable delegating work amongst my team.</li>
          <li>I have developed the refined communication skills essential for influencing change during my time in leadership roles and during my study of Psychology.</li>
          <li>I am passionate and naturally concerned for the wellfair of others. However, I am also able to be objective and rational when required.</li>
          <li>Drawing on broad industry knowledge, I am able to pivot quickly and bring creative solutions to problems.</li>
          <li>I am a quick learner and I am able to adapt to new environments and technologies.</li>
        </ul>
      </section>
      
      <section>
        <h2>Work Experience</h2>
        <h3>Software Development Experience</h3>
        
        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">ITMS, Wollongong University (As an Employee)</h4>
          <p><span className="font-bold mr-1">Role:</span>Solution Developer</p>
          <div>
              <p className="font-bold my-2">Responsibilities:</p>
              <p className="indent-6 pt-2">A contract role to bring an externally created and managed website in-house. The website (<Link className="underline" href="https://octopusdata.org">https://octopusdata.org</Link>) tech-stack consists of Maptiler, Vuejs, express, Geoserver and PostGIS, and CI-CD pipeline are managed via Terraform and docker with Google Cloud hosting. Unfortunately, project funding was withdrawn, and the project was scrapped before completion, as at October 2022 the project remained with the external provider.</p>
          </div>
        </div>        
        
        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">School of Psychology, Wollongong University (As an Employee)</h4>
          <p><span className="font-bold mr-1">Role:</span>Solution Developer</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <p className="indent-6 pt-2">The School of Psychology required a bespoke web-based platform to conduct scientific research of Short-term Memory. The research sources participants from populations via <Link className="underline" href="https://www.prolific.co/">   </Link> an online research participant referral service.</p>
            <p className="indent-6 pt-2">The initial feature of this solution was to enrol participants into trials, collect informed consent, then run short-term memory trials. Trials typically consist of displaying a time metered series of words, then an opportunity for the participant to recall the words. Finally, the trial concludes by returning the participant to prolific to receive financial reward. All data is parsed using JSON and is converted to CSV to make analysis more accessible for researchers. A database was not used because the client wanted to solution that would have little to no ongoing costs.</p>
            <p className="indent-6 pt-2">The solution was developed primary as a Vanilla JS project with the assistance of NodeJS, ExpressJS, and supporting frame works.</p>
              <ul className="pt-2">
                <li>
                Code Library: <Link className="underline" href="https://github.com/jeffreybarron/UOW-OnlineSTM">https://github.com/jeffreybarron/UOW-OnlineSTM</Link>
                </li>
              </ul>
          </div>
        </div>        
        
        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
        <h4 className="text-secondary">The Reserve Bank of Australia</h4>
          <p><span className="font-bold mr-1">Role:</span> Solution Developer</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Design and development of applications and databases in heterogeneous multi-user environments, being responsible for the full software development life cycle</li>
              <li>Research and development</li>
              <li>Second (2nd) level help desk in a two-tier system</li>
              <li>Train and assist junior staff and peers</li>
            </ul>
          </div>
          <div>
          <h5 className="font-bold py-2">Pojects included:</h5>
            <ul className="py-2">
              <li>Database conversion from Access 2.0(16bit) to Access 2000(32bit) of</li>
                <ul className="py-2">
                  <li>200+ small database with simple forms and no code or macros</li>
                  <li>Around one dozen large databases with extensive code, macros, and 16bit API calls</li>
                </ul>
              <li>Design and development of an application to calculate employee entitlements in accordance with the award, the entitlement calculated is then approved by management before posting to Peoplesoft payroll</li>
              <li>Developed several MS Office interoperability tools for peers for their own projects</li>
              <li>Website development with DHTML, ASP, SQL, XML, CSS, XSLT</li>
              <li>A simple database-driven job-logging system for Facilities Management department</li>
              <li>A dynamic graphing package for management to track computer hardware loads</li>
              <li>Support and enhancement of a third-party resource scheduling package BusyTime</li>
              <li>Designed and develop of an application to warn users that they are about to send an email outside the organisation. As well as being installed on over 800 desktops in the Sydney branch, management indicated that it will be rolled out nationally as well as in the RBA New York and London offices. The purpose of this application is to help stop sensitive information being released by the Bank that could adversely affect financial markets</li>
              <li>Developed numerous Microsoft Excel automation solutions for various departments</li>
              <li>Developed several COM Object Models, to simplify programming tasks, e.g. A Staff Object Model, and Calendar event and public holiday model</li>
              <li>Roll-out of Project 2000 to Real-Time Gross Settlement Team (RTGS)</li>
            </ul>
          </div>
        </div>   

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Solution 6 Pty Ltd</h4>
          <p><span className="font-bold mr-1">Role:</span>Senior Analyst Programmer</p>
          <p className="indent-6 pt-2">As the configuration management technical lead. I re-designed and develop a change and version control system that would be incorporated into the existing build process of all Solution 6 products.</p>
          <p className="indent-6 pt-2">Additionally, I was responsible for implementing improved build procedures and the integration of Rational ClearQuest, Microsoft Visual Sourcesafe and WISE InstallMaster.</p>
          <p className="indent-6 pt-2">During a major company re-structure and under extreme financial pressure (the dot com crash) this team was dissolved and along with many others and my role was made redundant.</p>
          <p className="indent-6 pt-2">In this role I was able to display competency in Visual Basic development, WISE Install scripting, Visual SourceSafe automation, understanding of software release issues and procedures.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Preparation of installation scripts for releases, patches and internal builds using WISE InstallMaster</li>
              <li>Customisation of business rules implemented in the change control system (ClearQuest) using the Application Programming Interface (API)</li>
              <li>Automation of the build process by integrating Visual Sourcesafe, ClearQuest and InstallMaster using the API for these products</li>
              <li>Development of various tools for team members to assist in daily tasks using Visual Basic 6.0</li>
            </ul>
          </div>
        </div>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Next Software Pty Ltd</h4>
          <p><span className="font-bold mr-1">Role:</span>Senior Analyst Programmer</p>
          <p className="indent-6 pt-2">BrokerPlus (a product of Lumley Technology Pty Ltd) implementation consultant, application customisations and post implementation support.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Client consultation and requirements gathering</li>
              <li>Assisting Next Software junior staff with Microsoft Office development issues</li>
              <li>Application prototyping</li>
              <li>Database design and construction</li>
              <li>Writing COM components using DAO, ADO and ODBC technologies</li>
              <li>Active-X controls</li>
              <li>Active-X DLL</li>
              <li>Troubleshooting data integrity using Microsoft SQL</li>
              <li>Corporate website development </li>
              <li>Research and development</li>
              <li>A mass mail project integrating Access and Outlook for a well-known Sydney financial advisor</li>
              <li>E-commerce solution using Microsoft WINSOCK, and ComSecure credit transaction server</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>Information Systems and Network Managment</h3>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Bridge Business College</h4>
          <p><span className="font-bold mr-1">Role:</span>CT Transformation Manager</p>
          <p className="indent-6 pt-2">I managed Bridges ICT operations to enable the boards strategic objectives of reducing risk, total cost of ownership and allow business growth.</p>
          <p className="indent-6 pt-2">Working with a budget of circa $600k per annum, I lead a small team Systems Administrators, providing technical mentoring, and ICT strategy.  I designed and initiated a fully managed Infrastructure as a Service (IaaS), budgeted at 3 million dollars over three years, including vendor procurement, project management, business engagement, business analysis, and solution design.</p>
          <p className="indent-6 pt-2">Thereby removing key man risks and ageing infrastructure.  Deliver Integrated Learning Management System (LMS) to transform how Bridge deliver teaching and learning throughout the college and reduce total cost of ownership (TCO) for Bridges core business (education).</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Architect ICT Modernisation Roadmap and formulate ICT Project Master Plan</li>
              <li>Manage suppliers, networks, storage, servers, desktops</li>
              <li>Manage and Develop ICT staff, support desk </li>
              <li>ICT Helpdesk for business-as-usual support, server and desktops</li>
              <li>Implement Learning Management System</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Sydney Anglican Schools Corporation</h4>
          <p><span className="font-bold mr-1">Role:</span>Solutions Engineer</p>
          <p className="indent-6 pt-2">Act as level 3 escalation point for the Site Support Officers at 2 schools and two pre-schools, assisting, guiding and monitoring their level 1/2 workflow. Maintaining and implementing server, network and storage infrastructure at the Schools and the Group Office. Providing solution design assistance to the IT Strategist.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Implement SAN to HP StoreVirtual\Lefthand SAN (3 site Network RAID)</li>
              <li>Configure HP Switching Infrastructure for New Lefthand SAN</li>
              <li>Troubleshooting existing Cisco ASA, Site-to-site VPN and Remote Access</li>
              <li>Implement Hyper-V with Failover Cluster manager and SCVMM</li>
              <li>Recover Business Data and infrastructure after OLD SAN Disaster Event</li>
              <li>Document Fibre, Wireless and Switching Infrastructure </li>
              <li>Business as Usual Support</li>
            </ul>
          </div>
        </div>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Pacific Hills Christian School</h4>
          <p><span className="font-bold mr-1">Role:</span>I.T. Support Manager</p>
          <p className="indent-6 pt-2">Duties include Administration of the School IT Infrastructure, monitor and plan for system upgrades and infrastructure as well as deliver major project implementations and provide backfill support and mentoring to the helpdesk. Working in the challenging environment of an elite K-12 private school in Sydneys northwest with 1,250+ students and 250 staff.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Upgrade Exchange from 2007 to Exchange 2013</li>
              <li>Implement Google Apps for Business</li>
              <li>Implement Mitel VOIP Phone System</li>
              <li>Implement Microsoft Lync 2010</li>
              <li>Implement New System Centre Configuration Manager (SCCM)</li>
              <li>Implement New System Centre Operations Manager (SCOM)</li>
              <li>Upgrade Active Directory from 2008 R2 to 2012 R2</li>
              <ul className="py-2">
                <li>Implement Active Directory Integrated Product Licensing</li>
                <li>Implement Active Directory Recycle Bin</li>
                <li>Implement Fine Grain Password Policies </li>
              </ul>
              <li>Implement Moodle with LAMS</li>
              <li>Administer and Upgrade Backups and conduct DR Testing</li>
              <li>Pilot infrastructure for 1,500 iPads</li>
              <li>Upgrade and Standardise Office Deployment to Office 2013</li>
              <li>Manager HP switched LAN and VLAN</li>
              <li>Administer Existing System Centre Virtual Machine Manager (SCVM)</li>
              <li>Manage Dell Equalogic SAN</li>
              <li>Manage MS Threat Management Gateway</li>
              <li>Manage NetboxBlue Firewall</li>
              <li>Administer Sophos Enterprise Antivirus Suite</li>
              <li>Administer MS Active Directory, Group Policy</li>
              <li>Mentor and train helpdesk staff</li>
              <li>Write technical manuals, IT policies and standards</li>
              <li>Administer and Support 30+ Apple Macs and several hundred iPads</li>
            </ul>
          </div>
        </div>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Depot It Pty Ltd</h4>
          <p><span className="font-bold mr-1">Role:</span>Consultant Engineer, permanent succondment to Bridgestone subsidiary.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Administer Windows Server environment including MS Active Directory, DNS, DHCP and Group Policy issues, Upgrade from 2003 to 2008 R2.</li>
              <li>Install and configure VMWare hosts, virtual machines and configure off-host backups using Symantec AVVI option</li>
              <li>Administer Citrix, troubleshoot issues and publish applications</li>
              <li>Troubleshoot WAN, LAN and WLAN issues</li>
              <li>Administer Symantec Backup Exec 2010, CPS and Livestate</li>
              <li>Administer Symantec Endpoint Protection, SAV Corporate Edition and Mail Security for 20+ sites across Australia and Papua New Guinea</li>
              <li>Build Windows XP SOE and deploy to 60+ computers </li>
              <li>Build Windows Server 2008 R2 SOE and deploy to 12 branch servers.</li>
              <li>Administer Remote Installation Server (RIS), WSUS and Ghost for software deployment</li>
              <li>Implement MDT for Desktop deployment</li>
              <li>Troubleshoot Windows Deployment Services (WDS) and provide advice to client on upgrade path</li>
              <li>Install and Administer SharePoint 2007 and SQL 2008</li>
              <li>Administer Exchange 2003</li>
              <li>Administer Network monitoring and logging tools PRTG and Whats up Gold and a range of others</li>
              <li>Develop and support Incident Tracking System</li>
              <li>Advise client on Infrastructure projects</li>
              <li>Mentor and train helpdesk staff, Assist and advise senior engineers</li>
              <li>Write technical manuals, IT policies and standards </li>
              <li>Assist with SAN Project</li>
              <li>3rd Level Desktop Support</li>
            </ul>
          </div>
        </div>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Vesuvius (a Cookson PLC company)</h4>
          <p><span className="font-bold mr-1">Role:</span>Infrastructure Engineer.</p>
          <p className="indent-6 pt-2">Provide support for IT infrastructure, projects and client issues to Vesuvius and their newly acquired subsidiary Forseco, during a period of significant IT infrastructure investment, projects and service consolidation.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Support Wintel Environment</li>
              <li>Administer Active Directory and assist in forest migration</li>
              <li>Administer VMWare hosts and virtual machines.</li>
              <li>Implement backups using VEEAM and Symantec Backup Exec 12.5 </li>
              <li>Manage Citrix Presentation Server 4.5 and roll-out clients and applications nationally</li>
              <li>Conduct Disaster Recovery Tests</li>
              <li>Co-ordinate MPLS and VPN upgrade for Oceania.</li>
              <li>Assist with SAN Installation</li>
              <li>Migrate Servers from Physical to Virtual (P2V)</li>
              <li>Assist with SYSPRO 6.0 ERP implementation and migration from Sage ACCPAC</li>
              <li>Migrate MitreFinch Time and Attendance System server to data centre.</li>
              <li>Install and configure Micropay Payroll System</li>
              <li>Provide support to End Users</li>
              <li>Support Lotus Notes 7.0.3</li>
            </ul>
          </div>
        </div>

        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Dimensional Fund Advisors</h4>
          <p><span className="font-bold mr-1">Role:</span>Software Developer, Infrastructure Engineer, Project Manager.</p>
          <p className="indent-6 pt-2">Hands-on management and ownership of all matters concerning IT for the firms Australian operations. $50+ billion under management in Australia, $250+ billion globally.</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Project Manage, support and plan Wintel Server Infrastructure</li>
              <ul className="py-2">
                <li>Complete two (2) x Infrastructure relocations as part of two (2) office moves</li>
                <li>Relocation of office/server room, network and telecom services when the company moved office</li>
                <li>ICT Representative of Business Continuance Planning Committee</li>
                <li>Architect and manage ICT Disaster Recovery site and DR Testing</li>
                <li>Advise on site selection for disaster recovery facility, design  and implement IT Disaster Recovery (DR) plan and infrastructure</li>
                <li>Document systems to comply with Australia Auditing Standard Aus810</li>
                <li>Develop desktop standard operating environment (SOE) and </li>
              </ul>
              <li>ICT Architecture and Technical Delivery</li>
              <ul className="py-2">
                <li>Design server room including electrical and mechanical services within budgetary constraints</li>
                <li>Implement real-time offsite disaster recovery systems</li>
                <li>Implement and support Symantec Antivirus Corporation</li>
                <li>Administer and support LAN and WAN</li>
                <li>Administer MS Active Directory, Linux email and MS Exchange</li>
                <li>Provide end user (including trading desk) support including Bloomberg and Reuters terminals</li>
              </ul>
              <li>Develop software to provide trading process automation solutions</li>
            </ul>
          </div>
        </div>

        <h3>Business Analyst Experience</h3>
        <div className="border-2 px-6 pb-6 pt-4 border-accent-dark border-solid rounded-md bg-primary-50 text-primary mt-2">
          <h4 className="text-secondary">Holden National Leasing Limited</h4>
          <p><span className="font-bold mr-1">Role:</span>Business Analyst / Data Analyst.</p>
          <p className="indent-6 pt-2">Fleet leasing company with 65 employees and some 18,000 vehicles under management. Jointly owned by General Motors Acceptance Corporation (GMAC) and Holden Automotive Limited</p>
          <div>
            <h5 className="font-bold py-2">Responsibilities:</h5>
            <ul className="py-2">
              <li>Risk analysis and management of HNLs maintenance products</li>
              <li>To set monthly services fee accruals to ensure income covers expenses, i.e. income versus vehicle running costs, accruals per annum approximately $15-22 million</li>
              <li>To research, implement, and maintain new products that ensure complete customer satisfaction</li>
              <li>To supply accurate analytical reports to clients, HNL senior management and Holdens senior management</li>
              <li>To have expert knowledge of the Microsoft Office suite, database manipulation and the VBA programming language, for automation of month end reporting</li>
              <li>Working closely with the contracted analyst programmers in the ongoing development of a mission critical business system and its associated database</li>
              <li>Cognos Impromptu report writing in HNLs Oracle driven data warehouse</li>
              <li>Calculation of lease rewrites and lease extensions</li>
              <li>Writing database queries and reports directly from the core business system (Universe database), using the query tool Information/uniVerse report writer</li>
            </ul>
          </div>
        </div>

      </section>

    </PagesLayout>
  );
}
