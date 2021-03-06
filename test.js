import React from 'react'
import SubComponent from './SubComponent'

export default (props) => rj`
  //- some comment 
  .Component
    if props.showSubComponent
      SubComponent.someClass(...props)

    ul
      for num, i in [1,2,3]
        li(key=i)= num
`

export default (props) => {
  return rj`
    //- some comment 
    .Component
      if props.showSubComponent
        SubComponent.someClass(...props)

      ul
        for num, i in [1,2,3]
          li(key=i)= num
  `
}

export default (props) => jade`
  //- some comment 
  .Component
`

// not highlighted
export default (props) => pug`
  //- some comment 
  .Component
`
