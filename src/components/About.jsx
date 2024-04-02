import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { BsFillPersonLinesFill } from 'react-icons/bs';

const About = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					 <FaLinkedin size={30} />
				</>
			),
			href: 'https://www.linkedin.com/in/sivaprakashselvamc/',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
				 <FaGithub size={30} />
				</>
			),
			href: 'https://github.com/Sivaprakash1606',
		},
		{
			id: 3,
			child: (
				<>
					<HiOutlineMail size={30} />
				</>
			),
			href: "mailto:sivasnprakash3@gmail.com",
		},
		{
			id: 4,
			child: (
				<>
					<BsFillPersonLinesFill size={30} />
				</>
			),
			href: '/sivaprakash_resume.pdf',
			style: 'rounded-br-md',
			download: true,
		},
	];
	return (
		<div
			name="about"
			className="w-full justify-center items-center sm:pt-12 pt-64  h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className=" sm:pt-12 pt-64 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl mt-20">
					I'm a Full Stack Developer with a knack for building and designing
					software. I enjoy creating both web applications and mobile apps using
					tools like Flutter, React, Tailwind CSS, Node.js, and MongoDB. With a
					passion for problem-solving, I love turning ideas into reality through
					coding. Let's work together to bring your projects to life!
				</p>
				<div className="md:hidden items-center justify-evenly  flex pt-10">
  <ul className="flex">
    {links.map(({ id, child, href, style, download }) => (
      <li
        key={id}
        className={
          'flex items-center w-14 h-14 px-4 hover:scale-105 duration-300 ' +
          ' ' +
          style
        }
        style={{ margin: '0 5px' }} // Add margin to separate items
      >
        <a
          href={href}
          className="flex flex-col justify-center items-center w-full text-white"
          download={download}
          target="_blank"
        >
          {child}
        </a>
      </li>
    ))}
  </ul>
</div>

				
			</div>

		</div>
	);
};

export default About;
