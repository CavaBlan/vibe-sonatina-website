function LoginModal({setIsLoginOpen}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="relative  h-150 w-200 border-l-4 border-red-800 rounded-3xl flex">
        <button className="absolute top-3 right-3 text-xl text-white px-3 py-1 bg-red-500 rounded-full cursor-pointer" onClick={()=>setIsLoginOpen(prev=>!prev)}>
          Close
        </button>
        <div className="w-1/5 bg-white border-r-4 border-black rounded-l-3xl flex flex-col justify-center items-center">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="h-20 w-20 m-5 rounded-full border"></div>
          ))}
        </div>
        <div className="w-4/5 bg-black border-l-4 border-white rounded-r-3xl flex flex-col items-center">
          <h2 className="text-6xl mt-25 mb-13 text-white font-bold">Vibe Sonatina</h2>
          <form className="w-3/5 flex flex-col" action="">
            <div className="text-white text-2xl">Account</div>
            <input className="bg-white mb-5 px-3.5 text-2xl  h-12 w-full rounded-2xl" type="text" />
            <div className="text-white text-2xl">Password</div>
            <input className="bg-white mb-10 px-3.5 text-2xl h-12 w-full rounded-2xl" type="password" />
            <button className="h-10 w-3/4 mb-10 m-auto text-2xl font-bold bg-white rounded-3xl cursor-pointer hover:scale-110 transition">Log In</button>
          </form>
          <button className="text-white underline  cursor-pointer">Create account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
