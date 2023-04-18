import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({color,title,icon}) {
	return (
		<>
			<button  className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 ml-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor:color}}>
				{title}   <i className='ml-1'><FontAwesomeIcon icon={icon} /></i>
			</button>
		</>
	)
}
