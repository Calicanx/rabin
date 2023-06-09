import twitter from './pics/twitter.png'
import github from './pics/github.png'
import linkedin from './pics/linkedin.png'
import whatsapp from './pics/whatsapp.png'

import './Dev.css';

export default function MainBtn(){
    return(
        <div className='row'>
            <div className='col-6 s flex'>
            <a href='twitter.com/rty'><img className='socialbtn' src={github}></img></a>
            <a href='github.com/CalicanX'><img className='socialbtn' src={twitter}></img></a>
            <a href='linkedin.com/rty'><img className='socialbtn' src={linkedin}></img></a>
            <a href='whatsapp.com/rty'><img className='socialbtn' src={whatsapp}></img></a>
            </div>
        </div>
    )
}
