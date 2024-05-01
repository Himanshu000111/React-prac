import React from 'react'

function Demo({data}) {
  return (
 <>
 <div className='main w-full'>
<div className="container w-full p-24">
  <div className='Cards w-full bg-zinc-500 rounded-xl p-10'>
    <h1 className={`text-center text-[3vw] mb-5 text-[#f2f2f2]`}>{data.cardHeading.title}</h1>
    <div className={`card-desc ${data.cardHeading.isavailable ? "flex justify-between items-center" : "flex flex-row-reverse justify-between items-center"} w-full gap-5`}>
      <div className='bg-[url("https://images.pexels.com/photos/19277646/pexels-photo-19277646/free-photo-of-a-deer-in-the-middle-of-a-field-with-tall-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")] w-1/2 h-[50vh] bg-cover bg-center'></div>
      <div className='w-1/2'>
        <p className='text-[#f2f2f2] text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet similique corporis illo excepturi sit, at veniam, eius asperiores impedit, dolorem aliquam ipsum facilis quas omnis fuga odit nostrum optio! Omnis unde quisquam, exercitationem impedit voluptatibus suscipit autem culpa eaque! Magnam corporis quidem quis sunt beatae molestias. Placeat, sunt reprehenderit.</p>
      </div>
    </div>
  </div>
</div>
 </div>
 </>
  )
}

export default Demo