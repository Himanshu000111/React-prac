import React from 'react'
import Demo from './Components/Demo'
function App() {

const data = [
  {
    image : 'https://images.pexels.com/photos/19277646/pexels-photo-19277646/free-photo-of-a-deer-in-the-middle-of-a-field-with-tall-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet similique corporis illo excepturi sit, at veniam, eius asperiores impedit, dolorem aliquam ipsum facilis quas omnis fuga odit nostrum optio! Omnis unde quisquam, exercitationem impedit voluptatibus suscipit autem culpa eaque! Magnam corporis quidem quis sunt beatae molestias. Placeat, sunt reprehenderit.',
      cardHeading : { title : 'This is a Beautiful Scenery', isavailable : true },
    },
  {
    image : 'https://images.pexels.com/photos/19277646/pexels-photo-19277646/free-photo-of-a-deer-in-the-middle-of-a-field-with-tall-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet similique corporis illo excepturi sit, at veniam, eius asperiores impedit, dolorem aliquam ipsum facilis quas omnis fuga odit nostrum optio! Omnis unde quisquam, exercitationem impedit voluptatibus suscipit autem culpa eaque! Magnam corporis quidem quis sunt beatae molestias. Placeat, sunt reprehenderit.',
      cardHeading : { title : 'This is a Beautiful Deer', isavailable : false },
    },
  {
    image : 'https://images.pexels.com/photos/19277646/pexels-photo-19277646/free-photo-of-a-deer-in-the-middle-of-a-field-with-tall-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet similique corporis illo excepturi sit, at veniam, eius asperiores impedit, dolorem aliquam ipsum facilis quas omnis fuga odit nostrum optio! Omnis unde quisquam, exercitationem impedit voluptatibus suscipit autem culpa eaque! Magnam corporis quidem quis sunt beatae molestias. Placeat, sunt reprehenderit.',
      cardHeading : { title : 'This is a Beautiful Scenery', isavailable : true },
    }
]

  return (
    <div w-full>
      {data.map((item,index)=>(
        <Demo data ={item}/>
      ))}
    </div>
  )
}

export default App