import React from 'react'

const Information = () => {
  return (
    <div className='flex flex-col gap-10  p-6 py-10'>
      <div className='max-w-[1100px] w-full rounded-[10px] mx-auto bg-[#4C5B62] p-6 py-12 px-10'>
        <div className="row-one flex gap-12">
          <div className="left">
            <img className='w-[80px]' src="https://nextlevelbot.com/home/img/icons/france.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#ccc]'>Increases Productivity</h1>

            <p className='text-[#A7AFB7] text-justify'>  Deploying the right student management system means spending less time maintaining records and more time focused on the school. Improved data accuracy and organization only further enhance productivity and efficiency.  Because all data is stored in a central location, this can also improve communication and coordination.</p>
          </div>

          <div className="right">
            <img className='w-[50px]' src="https://nextlevelbot.com/home/img/icons/Decentralized.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#ccc]'>Streamlined, Simplified Tasks</h1>

            <p className='text-[#A7AFB7] text-justify'> Student  Nextlevelbot  software empowers teachers to not only keep track of each student’s progress, but also take immediate action to course-correct or provide assistance as needed. Instead of dealing with administrative busywork, educators can focus on teaching.  .</p>
          </div>
        </div>

        <div className="row-two flex  gap-12 mt-14">
          <div className="left">
            <img className='max-w-[500px]' src="https://nextlevelbot.com/home/img/tecno.png" alt="" />
          </div>

          <div className="right ">
            <img className='w-[65px]' src="https://nextlevelbot.com/home/img/icons/energy.svg" alt="" />

            <h1 className='text-[1.3rem]  font-semibold mt-8 mb-3 text-[#ccc]'> Improved Communication.
            </h1>

            <div className='flex flex-col gap-8 text-justify'>
              <p className='text-[#A7AFB7]'> Modern student management systems allow students and parents to easily connect with their teachers in an environment where all essential data is accessible upfront.
              </p>
              <p className='text-[#A7AFB7]'>  This allows a student’s parents to take a more active role in their education, while also empowering the student to more easily ask questions or seek help. 
              </p>
              <p className='text-[#A7AFB7]'> All this is achieved at a reduced cost as well, as the school is no longer required to call, message, or send out paper documents.

</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-three flex gap-12 mt-10 py-10">
        <div className="left">
          <img className='max-w-[700px] rounded-tr-[14px] rounded-br-[14px]' src="https://nextlevelbot.com/home/img/Automation-trading-platform-software-nextlevelbot.jpg" alt="" />
        </div>


        <div className="right flex flex-col gap-10">
          <div className="element-one max-w-[400px]">
            <img src="https://nextlevelbot.com/home/img/icons/statistics.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#ccc]'>Access to Information
            </h1>

            <div className='flex flex-col gap-8'>
              <p className='text-[#A7AFB7] text-justify'>Student website NextlevelBot A student management system makes it possible for parents to gain total visibility into their children’s school activities, assignments, attendance, and performance . It also means a smoother transition between classes and grades, as all teachers have access to a single source of truth about their students performance..
              </p>
            </div>
          </div>

          <div className="element-two max-w-[400px]">
            <img src="https://nextlevelbot.com/home/img/icons/engage.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#ccc]'> Student Tracking
            </h1>

            <div className='flex flex-col gap-8'>
              <p className='text-[#A7AFB7] text-justify'>  School activity goes beyond the wall of the classroom. It also includes extracurriculars such as sports and clubs, in addition to details about a student’s home life. With a student management system, this information is all kept in one place, making it far simpler for teachers to keep track of their students and identify when one is struggling.
              </p>
            </div>
          </div>

          <div className="element-three max-w-[400px]">
            <img className='w-[50px]' src="https://nextlevelbot.com/home/img/icons/Thunder-move.svg" alt="" />

            <h1 className='text-[1.3rem] font-semibold mt-8 mb-3 text-[#ccc]'>More Efficient Scheduling
            </h1>

            <div className='flex flex-col gap-8 text-[#A7AFB7]'> <p>  Traditionally, school administrators manage timetables and schedules. However, dedicated school administration software provided through a student management platform allows much of this process to be automated. This results in better time management and timetable management


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information