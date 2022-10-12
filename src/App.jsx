import React from 'react'
import Home from './layout/home'
import Google from './components/buttons/google'
import Facebook from './components/buttons/facebook'
const App = () => {
  const artist = [
    {
      "id" : 1,
      "name" : "The Weeknd",
      "category" : "Comedy",
      "image" : "https://i.pinimg.com/originals/ed/54/57/ed54571b47cb3246d3d827d0e8a8f860.jpg"
    },
    {
      "id" : 2,
      "name" : "Dababy",
      "category" : "Albums",
      "image" : "https://media.pitchfork.com/photos/5e9de95a2071a50008c2bd34/1:1/w_600/Blame%20It%20On%20Baby_DaBaby.jpg"
    },
    {
      "id" : 3,
      "name" : "Justin Bieber",
      "category" : "Albums",
      "image" : "https://cdns-images.dzcdn.net/images/cover/8ce99c4baef7f0528f08b6c9ba94f95a/500x500.jpg"
    },
    {
      "id" : 4,
      "name" : "24K Goldn",
      "category" : "Albums",
      "image" : "data:image/jpeg;base64,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"
    }
  ]
  const podcast = [
    {
      "id" : 1,
      "name" : "Close the Door",
      "category" : "Comedy",
      "image" : "https://www.nesabamedia.com/wp-content/uploads/2019/12/Neon-podcast-logo.jpg"
    },
    {
      "id" : 2,
      "name" : "Millenial Advisor",
      "category" : "Knowledge, Motivation",
      "image" : "https://images.unsplash.com/photo-1543269664-2407826601eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWlsZW5uaWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      "id" : 3,
      "name" : "Finance Master",
      "category" : "Financial",
      "image" : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    },
    {
      "id" : 4,
      "name" : "Sleepy",
      "category" : "Relax",
      "image" : "https://images.unsplash.com/photo-1429117237875-aa29229d99f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNsZWVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    }
  ]
  return (
    <Home>
      <section className="bg-gradient-to-r from-[#6AD2FF] to-[#76FF73] py-28 px-8 lg:px-16 lg:gap-y-0 lg:gap-x-6">
          <div className="bg-black max-w-7xl mx-auto p-8 rounded-xl mt-10 py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-4">
                <h5 className='text-4xl font-extrabold text-white leading-snug'>Discover your favorite <br className='hidden lg:block'/> <span  className='bg-gradient-to-r from-[#6AD2FF] to-[#76FF73] text-transparent bg-clip-text'>songs, podcast</span>   to <br className='lg:block hidden'/> make your days.</h5>
                <p className="text-lg font-medium text-[#c0c0c0]">more than 10.000+ playlist are available. Listen now</p>
              </div>
              <a href="#" className='lg:px-4 py-2 bg-white rounded-lg w-full text-center lg:w-min font-semibold text-lg tracking-normal  hover:tracking-widest hover:bg-gradient-to-r from-[#6AD2FF] to-[#76FF73] hover:text-white transform  duration-300 ease-out hover:scale-105'>Discover</a>
            </div>
            <video autoPlay loop muted className='rounded-xl hidden lg:block' height="100">
	            <source src="/src/video/concert.mp4" type="video/mp4"/>
            </video>
          </div>
      </section>
      {/* spacer */}
      <section className="px-8 lg:px-16 my-20 space-y-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2">
            <h5 className='text-2xl lg:text-5xl font-extrabold tracking-tighter'>Play, Repeat, Enjoy</h5>
            <p className="text-sm lg:text-lg font-medium text-[#444444]">No ads, just listen to make your day</p>
          </div>
          <h5 className="text-sm lg:text-lg font-medium text-[#444444]">Discover all</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 gap-y-6 lg:gap-y-0">
          {
            artist.map((artist) =>
              <div key={artist.id} className="mx-auto">
                <img className='h-96 bg-center object-cover' src={artist.image} alt="" />
                <div className="flex flex-col mt-5">
                  <h5 className="text-2xl font-semibold">{artist.name}</h5>
                  <p className="text-lg font-medium text-[#444444]">{artist.category}</p>
                </div>
              </div>
            )
          }
        </div>
      </section>
      {/* spacer */}
      <section className="px-8 lg:px-16 my-20 space-y-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2">
            <h5 className='text-2xl lg:text-5xl font-extrabold tracking-tighter'>Popular podcast are here too</h5>
            <p className="text-sm lg:text-lg font-medium text-[#444444]">Be a friend while you chill</p>
          </div>
          <h5 className="text-sm lg:text-lg font-medium text-[#444444]">Discover all</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 mx-auto gap-y-6 lg:gap-y-0">
          {
            podcast.map((podcast) =>
              <div key={podcast.id} className="mx-auto">
                <img className='h-96 bg-center object-cover' src={podcast.image} alt="" />
                <div className="flex flex-col mt-5">
                  <h5 className="text-2xl font-semibold">{podcast.name}</h5>
                  <p className="text-lg font-medium text-[#444444]">{podcast.category}</p>
                </div>
              </div>
            )
          }
        </div>
      </section>
      {/* spacer */}
      <section className="px-8 lg:px-16 my-20 max-w-7xl mx-auto">
        <div className="bg-black text-center py-8 rounded-xl">
            <div className="flex flex-col space-y-6">
              <h5 className='text-4xl text-white font-extrabold tracking-tighter'>Join SSense to <br /> listen what you love</h5>
              <div className="flex flex-col lg:flex-row mx-auto lg:items-center gap-y-4 lg:gap-y-0 lg:space-x-4 lg:justify-center">
                <Google/>
                <Facebook/>
              </div>
            </div>
        </div>
      </section>
      {/* spacer */}
      <section className='bg-black px-8 lg:px-16 py-10'>
        <h5 className="text-white">ssense</h5>
      </section>
    </Home>
  )
}

export default App