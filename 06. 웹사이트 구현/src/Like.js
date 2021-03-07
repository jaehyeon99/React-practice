import React from 'react'
import { Button ,Grid} from 'semantic-ui-react'


class Like extends React.Component{
    render(){
        return(
            <div>
                <Grid verticalAlign='middle' centered>
    <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: '0' }}
    />
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '0',
      }}
    />
    </Grid>
  </div>
        )
    }
}

export default Like;