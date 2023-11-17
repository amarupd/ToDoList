import { Link } from "react-router-dom";
import "../App.css";
import Button from "../components/Button";
function Home() {
	return (
		<div className="App bg-white dark:bg-gray-900">
			<header className="App-header">
				{/* divide to 2 section on md upper and 1 section in md below */}
				
				{/* tools */}
				<div className="container mx-auto px-0 md:px-4 py-10 my-10 bg-slate-300 rounded-md text-black dark:bg-gray-800 dark:text-white">
					<div className="text-4xl font-bold text-center mx-10 pb-10">
						<h1>Tools</h1>
					</div>
					<div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:px-4">
						<Link
							to="todo"
							className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
							<div className="bg-white rounded-t-lg md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-clipboard-list text-white fa-4x mx-2 md:mx-4"></i>
									</div>
									<div className="flex flex-col justify-center items-center ml-5">
										<h1 className="text-2xl font-bold">
											Todo List
										</h1>
										<p className="text-sm text-gray-500 dark:text-white">
											Manage your daily activities
										</p>
									</div>
								</div>
							</div>
						</Link>

						<Link
							to="note"
							className="flex justify-center items-center hover:scale-105 transition-transform mx-4">
							<div className="bg-white md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fas fa-sticky-note text-white fa-4x mx-1 md:mx-2"></i>
									</div>
									<div className="flex flex-col justify-center items-center  ml-5">
										<h1 className="text-2xl font-bold">
											Note
										</h1>
										<p className="text-sm text-gray-500 dark:text-white">
											Manage your notes with ease
										</p>
									</div>
								</div>
							</div>
						</Link>

						<Link
							to="/expense-tracker"
							className="flex justify-center items-center hover:scale-105 transition-transform mx-4 md:col-span-2 xl:col-span-1 md:mt-10 xl:mt-0">
							<div className="bg-white rounded-b-lg md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
								<div className="flex justify-center items-center">
									<div className="bg-blue-500 rounded-full p-8">
										<i className="fa-solid fa-coins text-white fa-4x"></i>
									</div>
									<div className="flex flex-col justify-center items-center ml-5 ">
										<h1 className="text-2xl font-bold">
											Expense Tracker
										</h1>
										<p className="text-sm text-gray-500 dark:text-white">
											Manage your expenses
										</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
				{/* contact */}
				<div className="">
					<div className="container relative mx-auto px-4 bg-slate-300 pt-20 pb-32 dark:bg-gray-800 rounded-md shadow-xl">
					<div className="text-4xl font-bold text-center mx-10 pb-10">
					<h1 className="text-3xl font-bold text-black dark:text-white">Contact me</h1>
					</div>
						<div className="icon pb-10">
							<i className="fa-regular fa-address-book fa-6x text-blue-600 dark:text-white"></i>
						</div>
						<div className="desc py-4">
							<p className="text-center text-xl text-black dark:text-white">
								Feel free to contact me! You can contact me via
								email or other social media listed below.
							</p>
						</div>
						{/* email */}
						<Button
							icon="fa-solid fa-envelope"
							link="mailto:amarduttupadhyay@gmail.com?subject=Hello&body=Hello">
							Email
						</Button>
						{/* github */}
						<Button
							icon="fa-brands fa-github"
							link="https://github.com/amarupd">
							Github
						</Button>
						{/* linkedin */}
						<Button
							icon="fa-brands fa-linkedin"
							link="https://www.linkedin.com/in/amar-upd/">
							Linkedin
						</Button>
						{/* instagram */}
						<Button
							icon="fa-brands fa-instagram"
							link="https://instagram.com/amar_upd">
							Instagram
						</Button>
					</div>
				</div>
				
			</header>
		</div>
	);
}

export default Home;
