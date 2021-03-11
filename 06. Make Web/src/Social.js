import react from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './App.css';

class Social extends react.Component{
    render(){
        return(
            <div>
            <Icon.Group className ="Icon">
                <Button circular color='facebook'>
                <Icon name='facebook' /> Facebook
                </Button>
                <Button circular color='twitter'>
                <Icon name='twitter' /> Twitter
                </Button>   
                <Button circular color='instagram'>
                <Icon name='instagram' /> Instagram
                </Button>
                <Button circular color='youtube'>
                <Icon name='youtube' /> YouTube
                </Button>
                </Icon.Group>
          </div>
        )
    }
}

export default Social;